"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import css from "./DictionaryTable.module.scss";
import { useEffectOnce } from "react-use";
import Spinner from "./Spinner";

type DictionaryTableProps = {
  searchWord: string;
};

const DictionaryTable = ({ searchWord }: DictionaryTableProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);
  const [filteredDictionary, setFilteredDictionary] = useState<Dictionary[]>(
    []
  );

  useEffectOnce(() => {
    setIsLoading(true);
    getDictionaryList()
      .then((res) => {
        setDictionary(res as Dictionary[]);
        setFilteredDictionary(res as Dictionary[]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  useEffect(() => {
    const filteredDictionary = dictionary.filter((word) => {
      const search = searchWord.toLocaleLowerCase();
      if (
        word.en.toLocaleLowerCase().includes(search) ||
        word.fi.toLocaleLowerCase().includes(search)
      )
        return true;
    });

    setFilteredDictionary(filteredDictionary);
  }, [searchWord]);

  const sortArray = (array: Dictionary[]) => {
    const sortedArray = [...array].sort((a, b) => {
      const nameA = a.en.toUpperCase();
      const nameB = b.en.toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return 0;
    });

    return sortedArray;
  };

  if (isLoading) {
    return (
      <table className={css.dictionary_table}>
        <thead>
          <tr>
            <th>English</th>
            <th>Suomeksi</th>
          </tr>
        </thead>
        <Spinner />
      </table>
    );
  }

  return (
    <table className={css.dictionary_table}>
      <thead>
        <tr>
          <th>English</th>
          <th>Suomeksi</th>
        </tr>
      </thead>
      {filteredDictionary.length ? (
        <tbody>
          {sortArray(filteredDictionary).map((word, index) => (
            <tr key={index}>
              <td>{word.en}</td>
              <td>{word.fi}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody></tbody>
      )}
    </table>
  );
};

export default DictionaryTable;

"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import { useEffectOnce } from "react-use";
import css from "./DictionaryTable.module.scss";
import Loader from "./Loader";

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
        <tbody>
          <Loader />
        </tbody>
      </table>
    );
  }

  if (!filteredDictionary.length) {
    return (
      <table className={css.dictionary_table}>
        <thead>
          <tr>
            <th>English</th>
            <th>Suomeksi</th>
          </tr>
        </thead>
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
      <tbody>
        {sortArray(filteredDictionary).map((word, index) => {
          const wordEng =
            word.en[0].toUpperCase() + word.en.slice(1).toLowerCase();
          const wordFin =
            word.fi[0].toUpperCase() + word.fi.slice(1).toLowerCase();

          return (
            <tr key={index}>
              <td>{wordEng}</td>
              <td>{wordFin}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DictionaryTable;

"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import css from "./DictionaryTable.module.scss";
import { useEffectOnce } from "react-use";

type DictionaryTableProps = {
  searchWord: string;
};

const DictionaryTable = ({ searchWord }: DictionaryTableProps) => {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);
  const [filteredDictionary, setFilteredDictionary] = useState<Dictionary[]>(
    []
  );

  useEffectOnce(() => {
    getDictionaryList()
      .then((res) => {
        setDictionary(res as Dictionary[]);
        setFilteredDictionary(res as Dictionary[]);
      })
      .catch((err) => {
        console.log(err);
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
          {filteredDictionary.map((word, index) => (
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

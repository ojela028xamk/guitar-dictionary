"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import css from "./DictionaryTable.module.scss";

const DictionaryTable = () => {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);

  useEffect(() => {
    getDictionaryList()
      .then((res) => {
        setDictionary(res as Dictionary[]);
      })
      .catch((err) => {
        setDictionary([]);
        console.log(err);
      });
  }, []);

  if (!dictionary.length) return null;

  return (
    <table className={css.dictionary_table}>
      <thead>
        <tr>
          <th>English</th>
          <th>Suomeksi</th>
        </tr>
      </thead>
      <tbody>
        {dictionary.length &&
          dictionary.map((word, index) => (
            <tr key={index}>
              <td>{word.en}</td>
              <td>{word.fi}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DictionaryTable;

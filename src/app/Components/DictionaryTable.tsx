"use client";
import { getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import css from "./DictionaryTable.module.scss";

type Dictionary = {
  en: string;
  fi: string;
};

const DictionaryTable = () => {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);

  useEffect(() => {
    getDictionaryList()
      .then((res) => {
        setDictionary(res.rows as Dictionary[]);
      })
      .catch((err) => console.log(err));
  }, []);

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
          dictionary.map((word) => (
            <tr>
              <td>{word.en}</td>
              <td>{word.fi}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DictionaryTable;

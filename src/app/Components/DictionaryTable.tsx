"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { Fragment, useEffect, useState } from "react";
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
      <div className={css.dictionary_table}>
        <div className={css.table_header}>
          <span>English</span>
          <span>Suomeksi</span>
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className={css.dictionary_table}>
      <div className={css.table_header}>
        <span>English</span>
        <span>Suomeksi</span>
      </div>
      {filteredDictionary.length ? (
        <>
          {sortArray(filteredDictionary).map((word, index) => {
            const wordEng =
              word.en[0].toUpperCase() + word.en.slice(1).toLowerCase();
            const wordFin =
              word.fi[0].toUpperCase() + word.fi.slice(1).toLowerCase();

            return (
              <div className={css.table_row} key={index}>
                <span>{wordEng}</span>
                <span>{wordFin}</span>
              </div>
            );
          })}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DictionaryTable;

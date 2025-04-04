"use client";
import { Dictionary, getDictionaryList } from "@/dictionaryService";
import { useEffect, useState } from "react";
import { useEffectOnce } from "react-use";
import Spinner from "./Spinner";
import { Table } from "@radix-ui/themes";
import css from "./DictionaryTable.module.scss";

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
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>English</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Suomeksi</Table.ColumnHeaderCell>
            <Spinner />
          </Table.Row>
        </Table.Header>
      </Table.Root>
    );
  }

  if (!filteredDictionary.length) {
    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>English</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Suomeksi</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
      </Table.Root>
    );
  }

  return (
    <Table.Root size="3" className={css.dictionary_table}>
      <Table.Header>
        <Table.Row className={css.dictionary_table_row}>
          <Table.ColumnHeaderCell>English</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Suomeksi</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortArray(filteredDictionary).map((word, index) => {
          const wordEng =
            word.en[0].toUpperCase() + word.en.slice(1).toLowerCase();
          const wordFin =
            word.fi[0].toUpperCase() + word.fi.slice(1).toLowerCase();

          return (
            <Table.Row key={index} className={css.dictionary_table_row}>
              <Table.Cell>{wordEng}</Table.Cell>
              <Table.Cell>{wordFin}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default DictionaryTable;

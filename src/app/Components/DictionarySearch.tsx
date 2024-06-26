import { Dispatch, SetStateAction } from "react";
import css from "./DictionarySearch.module.scss";

type DictionarySearchProps = {
  setSearchWord: Dispatch<SetStateAction<string>>;
};

const DictionarySearch = ({ setSearchWord }: DictionarySearchProps) => {
  return (
    <div className={css.dictionary_search}>
      <input
        type="text"
        placeholder="Hae..."
        onChange={(event) => setSearchWord(event.currentTarget.value)}
      />
    </div>
  );
};

export default DictionarySearch;

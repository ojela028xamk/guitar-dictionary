"use client";
import { useState } from "react";
import css from "./AppContainer.module.scss";
import MusicBackground from "./Components/MusicBackground";
import DictionaryHeader from "./Components/DictionaryHeader";
import DictionarySearch from "./Components/DictionarySearch";
import DictionaryTable from "./Components/DictionaryTable";

const AppContainer = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <div className={css.app_container}>
      <MusicBackground />
      <DictionaryHeader />
      <DictionarySearch setSearchWord={setSearchWord} />
      {/* <DictionaryTable searchWord={searchWord} /> */}
    </div>
  );
};

export default AppContainer;

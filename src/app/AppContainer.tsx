"use client";
import { useState } from "react";
import MusicBackground from "./Components/MusicBackground";
import DictionaryHeader from "./Components/DictionaryHeader";
import DictionarySearch from "./Components/DictionarySearch";
import DictionaryTable from "./Components/DictionaryTable";
import css from "./AppContainer.module.scss";
import { Theme } from "@radix-ui/themes";

const AppContainer = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <div className={css.app_container}>
      <Theme>
        <MusicBackground />
        <DictionaryHeader />
        <DictionarySearch setSearchWord={setSearchWord} />
        <DictionaryTable searchWord={searchWord} />
      </Theme>
    </div>
  );
};

export default AppContainer;

"use client";
import { useEffect } from "react";
import css from "./AppContainer.module.scss";
import MusicBackground from "./Components/MusicBackground";
import { getDictionaryList } from "@/dictionaryService";

const AppContainer = () => {
  useEffect(() => {
    getDictionaryList()
      .then((res) => console.log(res.rows))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={css.app_container}>
      <MusicBackground />
    </div>
  );
};

export default AppContainer;

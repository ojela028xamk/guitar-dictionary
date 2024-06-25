"use client";
import css from "./AppContainer.module.scss";
import MusicBackground from "./Components/MusicBackground";

const AppContainer = () => {
  return (
    <div className={css.app_container}>
      <MusicBackground />
    </div>
  );
};

export default AppContainer;

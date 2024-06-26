import Image from "next/image";
// https://www.flaticon.com/free-icons/music-note
import music_note from "../note1.png";
import music_note2 from "../note2.png";
import css from "./MusicBackground.module.scss";
import { Fragment, useState } from "react";
import DictionaryTable from "./DictionaryTable";
import DictionarySearch from "./DictionarySearch";

const MusicBackground = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const noteCount = Array.from(Array(15).keys());

  return (
    <div className={css.music_background}>
      <DictionarySearch setSearchWord={setSearchWord} />
      <DictionaryTable searchWord={searchWord} />
      <div className={css.background}>
        {noteCount.map((number) => (
          <Fragment key={number}>
            <Image
              className={css.music_note}
              src={music_note}
              alt="Music Note"
            />
            <Image
              className={css.music_note}
              src={music_note2}
              alt="Music Note"
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MusicBackground;

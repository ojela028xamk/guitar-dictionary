// https://www.flaticon.com/free-icons/music-note
import Image from "next/image";
import css from "./MusicBackground.module.scss";
import { Fragment } from "react";

const MusicBackground = () => {
  const noteCount = Array.from(Array(15).keys());

  return (
    <div className={css.music_background}>
      <div className={css.background}>
        {noteCount.map((number) => (
          <Fragment key={number}>
            <Image
              className={css.music_note}
              src="/note1.png"
              alt="Music Note"
              width={512}
              height={512}
            />
            <Image
              className={css.music_note}
              src="/note2.png"
              alt="Music Note"
              width={512}
              height={512}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MusicBackground;

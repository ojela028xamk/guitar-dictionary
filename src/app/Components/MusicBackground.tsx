// https://www.flaticon.com/free-icons/music-note
import Image from "next/image";
import css from "./MusicBackground.module.scss";
import { Fragment } from "react";

const MusicBackground = () => {
  return (
    <div className={css.music_background}>
      <div className={css.background}>
        {[1, 2].map((number) => {
          return (
            <Fragment key={number}>
              <Image
                className={css["note_single_" + number]}
                src="/note_single.png"
                alt="Music Note"
                width={512}
                height={512}
              />
              <Image
                className={css["note_double_" + number]}
                src="/note_double.png"
                alt="Music Note"
                width={512}
                height={512}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MusicBackground;

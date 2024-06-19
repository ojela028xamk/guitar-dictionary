import Image from "next/image";
// https://www.flaticon.com/free-icons/music-note
import music_note from "../note1.png";
import music_note2 from "../note2.png";
import css from "./MusicBackground.module.scss";

const MusicBackground = () => {
  const noteCount = Array.from(Array(15).keys());

  return (
    <div className={css.music_background}>
      <div className={css.background}>
        {noteCount.map(() => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default MusicBackground;

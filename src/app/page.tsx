import Image from "next/image";
// https://www.flaticon.com/free-icons/music-note
import music_note from "./note1.png";
import music_note2 from "./note2.png";
import css from "./page.module.scss";

const Home = () => {
  const noteCount = Array.from(Array(15).keys());

  return (
    <main className={css.main}>
      <div className={css.music_note_background}>
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
    </main>
  );
};

export default Home;

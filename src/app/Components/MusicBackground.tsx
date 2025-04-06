// https://www.flaticon.com/free-icons/music-note
import Image from "next/image";
import css from "./MusicBackground.module.scss";
import guitarist1 from "../../../public/guitarist1.svg";
import guitarist2 from "../../../public/guitarist2.svg";
import notes1 from "../../../public/notes1.png";
import notes2 from "../../../public/notes2.png";

const MusicBackground = () => {
  return (
    <div className={css.music_background}>
      <div className={css.background}>
        <Image
          className={`${css.vector} ${css.vector_left}`}
          src={guitarist1}
          alt="Image of a guitarist"
        />
        <Image
          className={`${css.vector} ${css.vector_right}`}
          src={guitarist2}
          alt="Image of a guitarist"
        />
        <Image
          className={`${css.notes} ${css.notes_left}`}
          src={notes1}
          alt="Music Notes"
        />
        <Image
          className={`${css.notes} ${css.notes_right}`}
          src={notes2}
          alt="Music Notes"
        />
      </div>
    </div>
  );
};

export default MusicBackground;

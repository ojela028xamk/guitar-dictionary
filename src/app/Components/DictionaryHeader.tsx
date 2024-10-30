import Image from "next/image";
import dictionaryLogo from "../dictionary_logo.png";
import css from "./DictionaryHeader.module.scss";

const DictionaryHeader = () => {
  return (
    <div className={css.dictionary_header}>
      <Image src={dictionaryLogo} priority alt="Dictionary Logo" />
    </div>
  );
};

export default DictionaryHeader;

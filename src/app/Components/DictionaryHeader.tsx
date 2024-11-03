import Image from "next/image";
import css from "./DictionaryHeader.module.scss";

const DictionaryHeader = () => {
  return (
    <div className={css.dictionary_header}>
      <Image
        src="/dictionary_logo.png"
        priority
        alt="Dictionary Logo"
        width={982}
        height={156}
      />
    </div>
  );
};

export default DictionaryHeader;

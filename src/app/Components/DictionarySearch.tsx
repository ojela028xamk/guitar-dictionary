import css from "./DictionarySearch.module.scss";

const DictionarySearch = () => {
  return (
    <div className={css.dictionary_search}>
      <input type="text" placeholder="Hae..." />
    </div>
  );
};

export default DictionarySearch;

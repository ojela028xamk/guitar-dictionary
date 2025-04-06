import { Spinner } from "@radix-ui/themes";
import css from "./Loader.module.scss";

const Loader = () => {
  return <Spinner className={css.spinner} />;
};

export default Loader;

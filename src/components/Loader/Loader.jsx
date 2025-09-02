import clsx from "clsx";
import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = ({ className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <PuffLoader size={80} color="#F9F9F9" />
    </div>
  );
};

export default Loader;

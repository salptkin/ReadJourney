import clsx from "clsx";
import styles from "./AuthError.module.css";

const AuthError = ({ message, isError = true }) => {
  return (
    <p
      className={clsx(
        styles.base,
        isError ? styles.error : styles.success
      )}
    >
      {message}
    </p>
  );
};

export default AuthError;

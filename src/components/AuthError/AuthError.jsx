import clsx from "clsx";
import PropTypes from "prop-types";
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

AuthError.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

export default AuthError;

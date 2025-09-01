import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  type = "button",
  title,
  className = "",
  onClick,
  primary = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        styles.base,
        primary ? styles.primary : styles.secondary,
        className
      )}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;

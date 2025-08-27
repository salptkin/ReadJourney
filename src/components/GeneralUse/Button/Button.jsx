import clsx from "clsx";
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

export default Button;

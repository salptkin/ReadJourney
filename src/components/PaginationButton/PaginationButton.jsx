import clsx from "clsx";
import styles from "./PaginationButton.module.css";

const PaginationButton = ({ disabled, onClick, iconName, className }) => {
  const getIconPath = () => {
    if (iconName === "icon-next") {
      return "/images/listnext.svg";
    } else if (iconName === "icon-prev") {
      return "/images/listprew.svg";
    }
    return null;
  };

  return (
    <button
      type="button"
      className={styles.btn}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <img
        src={getIconPath()}
        alt={iconName}
        className={clsx(styles.icon, className)}
      />
    </button>
  );
};

export default PaginationButton;

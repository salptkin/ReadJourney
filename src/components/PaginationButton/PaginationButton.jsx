import clsx from "clsx";
import Icon from "../GeneralUse/Icon/Icon";
import styles from "./PaginationButton.module.css";

const PaginationButton = ({ disabled, onClick, iconName, className }) => {
  return (
    <button
      type="button"
      className={styles.btn}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <Icon
        className={clsx(styles.icon, className)}
        w={16}
        iconName={iconName}
      />
    </button>
  );
};

export default PaginationButton;

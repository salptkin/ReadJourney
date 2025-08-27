import Icon from "../GeneralUse/Icon/Icon";
import styles from "./AuthHeader.module.css";

const AuthHeader = () => {
  return (
    <>
      <div className={styles.logoRow}>
        <Icon className={styles.logoIcon} w={42} h={17} iconName="icon-logo" />
        <span className={styles.logoText}>read journey</span>
      </div>
      <h1 className={styles.title}>
        Expand your mind, reading{" "}
        <span className={styles.highlight}>a book</span>
      </h1>
    </>
  );
};

export default AuthHeader;

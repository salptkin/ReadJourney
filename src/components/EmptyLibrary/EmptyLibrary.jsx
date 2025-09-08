import styles from "./EmptyLibrary.module.css";

const EmptyLibrary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>
        <span className={styles.emoji}>📚</span>
      </div>
      <p className={styles.text}>
        To start training, add{" "}
        <span className={styles.muted}>some of your books</span> or from the
        recommended ones.
      </p>
    </div>
  );
};

export default EmptyLibrary;

import styles from "./ProgressContent.module.css";

const ProgressContent = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Progress</h2>
      <p className={styles.desc}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>

      <div className={styles.circle}>
        <span className={styles.emoji}>🌟</span>
      </div>
    </div>
  );
};

export default ProgressContent;

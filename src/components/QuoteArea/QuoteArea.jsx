import styles from "./QuoteArea.module.css";

const QuoteArea = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.emoji}>📚</span>
      <p className={styles.text}>
        &quot;Books are <span className={styles.highlight}>windows</span> to the
        world, and reading is a journey into the unknown.&quot;
      </p>
    </div>
  );
};

export default QuoteArea;

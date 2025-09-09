import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import styles from "./Statistics.module.css";

const Statistics = ({ progress, totalPages }) => {
  const totalPagesRead = Math.min(
    (progress || [])
      .filter(({ status }) => status === "inactive")
      .reduce((acc, page) => acc + (page.finishPage - page.startPage), 1),
    totalPages
  );

  const percentage =
    totalPages > 0
      ? parseFloat(((totalPagesRead / totalPages) * 100).toFixed(2))
      : 0;

  return (
    <div className={styles.wrapper}>
      <CircleProgressBar percentage={percentage} />

      <div className={styles.row}>
        <div className={styles.legendSquare} />
        <div>
          <p className={styles.percent}>{percentage}%</p>
          <p className={styles.desc}>{totalPagesRead} pages read</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

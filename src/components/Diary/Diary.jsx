import { useRemoveReadingMutation } from "../../store/book/bookSlice";
import clsx from "clsx";
import toast from "react-hot-toast";
import formatTime from "../../utils/helpers/formatTime";
import getProgressByDate from "../../utils/helpers/getProgressByDate";
import getReadingTime from "../../utils/helpers/getReadingTime";
import Icon from "../GeneralUse/Icon/Icon";
import styles from "./Diary.module.css";

const Diary = ({ progress, totalPages, bookId }) => {
  const [removeReading] = useRemoveReadingMutation();

  const groups = getProgressByDate({ progress, totalPages });

  const handleRemoveReading = async (bookId, readingId) => {
    try {
      await removeReading({ bookId, readingId }).unwrap();
      toast.success("Reading entry removed successfully");
    } catch (error) {
      if (error.status === 409) {
        const message = error.data?.message || "Cannot remove this reading entry. It may be part of an active session or have restrictions.";
        toast.error(message);
      } else if (error.status === 400) {
        toast.error("Invalid request. Please check the reading entry.");
      } else if (error.status === 404) {
        toast.error("Reading entry not found.");
      } else if (error.status === 403) {
        toast.error("You don't have permission to remove this reading entry.");
      } else {
        toast.error(error.data?.message || "Failed to remove reading entry");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.inner}>
        {groups?.map(({ date, totalPagesRead, detail }, index) => (
          <li
            key={date}
            className={clsx(styles.diaryItem, index === 0 ? styles.first : undefined)}
          >
            <div className={styles.headerRow}>
              <p className={styles.date}>{formatTime(date)}</p>
              <p className={styles.pages}>{totalPagesRead} pages</p>
            </div>

            <ul className={styles.detailList}>
              {detail.map(
                ({ percent, startReading, finishReading, readingSpeed, _id }) => (
                  <li key={_id} className={styles.detail}>
                    <div>
                      <p className={styles.percent}>{percent}%</p>
                      <p className={styles.time}>
                        {getReadingTime(startReading, finishReading)}
                      </p>
                    </div>

                    <div className={styles.rightGroup}>
                      <div className={styles.iconRow}>
                        <Icon
                          className={styles.diagramIcon}
                          w={43}
                          h={18}
                          iconName="icon-line-diagram"
                        />
                        <button
                          type="button"
                          className={styles.removeBtn}
                          onClick={() => handleRemoveReading(bookId, _id)}
                          aria-label="Remove reading entry"
                        >
                          <Icon
                            className={styles.trashIcon}
                            w={14}
                            iconName="icon-trash"
                          />
                        </button>
                      </div>
                      <p className={styles.speed}>
                        {readingSpeed} pages per hour
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;

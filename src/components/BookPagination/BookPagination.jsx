import { BtnType } from "../../helpers/pagination";
import PaginationButton from "../PaginationButton/PaginationButton";
import styles from "./BookPagination.module.css";

const BookPagination = ({ page, totalPages, handlePage }) => {
  const prevIconClass = page === 1 ? styles.iconDisabled : styles.iconActive;
  const nextIconClass =
    totalPages === page ? styles.iconDisabled : styles.iconActive;

  return (
    <ul className={styles.list}>
      <li>
        <PaginationButton
          disabled={page === 1}
          onClick={() => handlePage(BtnType.Prev)}
          iconName="icon-prev"
          className={prevIconClass}
        />
      </li>
      <li>
        <PaginationButton
          disabled={totalPages === page}
          onClick={() => handlePage(BtnType.Next)}
          iconName="icon-next"
          className={nextIconClass}
        />
      </li>
    </ul>
  );
};

export default BookPagination;

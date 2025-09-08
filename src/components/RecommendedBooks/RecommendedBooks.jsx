import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetRecommendedBooksQuery } from "../../store/book/bookSlice";

import randomBooks from "../../utils/helpers/randomBook";
import Loader from "../Loader/Loader";
import BookList from "../BookList/BookList";
import Icon from "../GeneralUse/Icon/Icon";

import styles from "./RecommendedBooks.module.css";

const RecommenendedBooks = () => {
  const { data, isFetching } = useGetRecommendedBooksQuery({ limit: 20 });

  const books = useMemo(
    () => randomBooks(data?.results ?? [], 3),
    [data?.results]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Recommended books</h2>

        {isFetching ? (
          <Loader className={styles.loader} />
        ) : books.length > 0 ? (
          <BookList
            books={books}
            styles={{
              list: styles.listCustom,
              item: styles.itemCustom,
              img: styles.imgCustom,
              title: styles.titleCustom,
              text: styles.textCustom,
            }}
          />
        ) : (
          <div className={styles.emptyMessage}>
            No recommended books available
          </div>
        )}
      </div>

      <Link to="/" className={styles.link}>
        Home
        <Icon className={styles.icon} w={20} iconName="icon-log-in" />
      </Link>
    </div>
  );
};

export default RecommenendedBooks;

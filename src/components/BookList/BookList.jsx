import BookItem from "../BookItem/BookItem";
import clsx from "clsx";
import css from "./BookList.module.css";

const BookList = ({ books, handleModal, styles: override, isButton }) => {
  const booksArray = Array.isArray(books) ? books : (books && books.results) || [];

  return (
    <ul className={clsx(css.list, override?.list)}>
      {booksArray.map(({ _id, title, author, imageUrl, totalPages }) => (
        <BookItem
          key={_id}
          _id={_id}
          title={title}
          author={author}
          imageUrl={imageUrl}
          totalPages={totalPages}
          handleModal={handleModal}
          className={{ ...override }}
          isButton={isButton}
        />
      ))}
    </ul>
  );
};

export default BookList;

import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddBookToLibraryMutation,
  useRemoveBookFromLibraryMutation,
} from "../../store/book/bookSlice";
import clsx from "clsx";
import toast from "react-hot-toast";
import Button from "../GeneralUse/Button/Button";
import Icon from "../GeneralUse/Icon/Icon";
import styles from "./BookItem.module.css";

const BookItem = ({
  _id,
  title,
  totalPages,
  imageUrl,
  author,
  isModal,
  className = {},
  handleModal,
  isButton,
}) => {
  const [addBook, { isLoading }] = useAddBookToLibraryMutation();
  const [removeBook] = useRemoveBookFromLibraryMutation();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
    if (handleModal) {
      const bookData = { _id, title, totalPages, imageUrl, author };
      handleModal(bookData);
    }
  };

  const isLibraryWithBtn = pathname === "/library" && isButton;

  return (
    <li className={clsx(styles.item, className?.item)}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          width={137}
          height={208}
          className={clsx(styles.image, className?.img)}
          onClick={openModal}
        />
      ) : (
        <div className={styles.placeholder} onClick={openModal}>
          <img
            src="/images/book.png"
            alt=""
            className={styles.placeholderImg}
            width={137}
            height={90}
          />
        </div>
      )}

      <div className={clsx(isLibraryWithBtn && styles.row)}>
        <div
          className={clsx(
            styles.description,
            isLibraryWithBtn && styles.descriptionNarrow,
            className?.description
          )}
        >
          <h2 className={clsx(styles.title, className?.title)}>{title}</h2>
          <p className={clsx(styles.text, className?.text)}>{author}</p>

          {isModal && (
            <p className={styles.pages}>
              {totalPages} pages
            </p>
          )}
        </div>

        {isLibraryWithBtn && (
          <button
            type="button"
            onClick={() => removeBook(_id)}
            className={styles.deleteBtn}
            aria-label="Remove from library"
          >
            <Icon className={styles.iconTrash} w={14} iconName="icon-trash" />
          </button>
        )}
      </div>

      {isModal && (
        <Button
          disabled={isLoading}
          type="button"
          className={styles.cta}
          title={pathname === "/library" ? "Start reading" : "Add to library"}
          primary={false}
          onClick={() => {
            if (pathname === "/library") {
              navigate("/reading", { state: { bookId: _id } });
              if (handleModal) handleModal();
            } else {
              (async () => {
                try {
                  await addBook(_id).unwrap();
                  toast.success(
                    "The book has been successfully added to your library!"
                  );
                // eslint-disable-next-line no-unused-vars
                } catch (e) {
                  toast.error(
                    "The book has already been added to your library!"
                  );
                }
              })();
            }
          }}
        />
      )}
    </li>
  );
};

export default BookItem;

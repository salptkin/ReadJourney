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
  isOwn = false,
  isLoadingOwnBooks = false,
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
      {imageUrl && imageUrl.trim() ? (
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
          <svg 
            className={styles.placeholderImg}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
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
            <img 
              src="/images/trashicon.svg" 
              alt="Delete" 
              className={styles.iconTrash}
            />
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
            } else if (isLoadingOwnBooks) {
              toast.error("Please wait, checking your library...");
            } else if (isOwn) {
              toast.error("This book is already in your library!");
            } else {
              (async () => {
                try {
                  await addBook(_id).unwrap();
                  toast.success("Book added to your library successfully!");
                  if (handleModal) handleModal();
                } catch {
                  toast.error("This book is already in your library!");
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

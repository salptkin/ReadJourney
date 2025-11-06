import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../customhooks/useRedux";
import {
  useAddNewBookMutation,
  useGetOwnBooksQuery,
} from "../../store/book/bookSlice";
import { selectModal } from "../../store/modal/modalSelector";
import { toggleModal } from "../../store/modal/modalSlice";
import { BtnType } from "../../helpers/pagination";
import useWindowSize from "../../customhooks/useWindowSize";

import clsx from "clsx";
import toast from "react-hot-toast";
import selectData from "../../utils/data/selectData";
import BookAddForm from "../../components/BookAddForm/BookAddForm";
import BookItem from "../../components/BookItem/BookItem";
import BookList from "../../components/BookList/BookList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Modal from "../../components/Modal/Modal";
import EmptyLibrary from "../../components/EmptyLibrary/EmptyLibrary";
import Recommendations from "../../components/RecommendedBooks/RecommendedBooks";
import LibraryDropDown from "../../components/LibraryDropDown/LibraryDropDown";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import BookPagination from "../../components/BookPagination/BookPagination";
import SEO from "../../components/SEO/SEO";

import styles from "./LibraryPage.module.css";

const LibraryPage = () => {
  const [select, setSelect] = useState(selectData[0]);
  const [modalData, setModalData] = useState(null);
  const [page, setPage] = useState(1);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const limit = isMobile ? 2 : 10;

  const dispatch = useAppDispatch();
  const { isOpen, modalName } = useAppSelector(selectModal);

  const { data: allBooks } = useGetOwnBooksQuery({
    status: select?.value ?? "",
  });
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const ownBooks = allBooks ? {
    results: allBooks.slice(startIndex, endIndex),
    totalPages: Math.ceil(allBooks.length / limit),
    totalCount: allBooks.length
  } : null;
  
  const [addNewBook] = useAddNewBookMutation();

  const handleSelect = (value) => {
    setSelect(value);
    setPage(1);
  };

  const handlePage = (type) => {
    if (type === BtnType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleModal = (data) => {
    setModalData(data ?? null);
    dispatch(toggleModal("ownBook"));
  };

  const handleAddBook = ({ title, author, totalPages }) => {
    const totalPagesAsNumber =
      typeof totalPages === "string" ? parseFloat(totalPages) : totalPages;

    addNewBook({ title, author, totalPages: totalPagesAsNumber })
      .unwrap()
      .then(() => {
        dispatch(toggleModal("addBook"));
        setPage(1);
      })
      .catch((e) => {
        toast.error(e?.data?.message || "Something went wrong");
      });
  };

  const isEmpty = (ownBooks?.results?.length || ownBooks?.length || 0) === 0;

  return (
    <>
      <SEO
        title="My Library"
        description="Read Journey kütüphanenizdeki kitapları görüntüleyin, yönetin ve okuma ilerlemenizi takip edin."
        url="https://read-journey-iota.vercel.app/library"
      />
      <div className={styles.libraryPageContainer}>
      <div className={styles.contentWrapper}>
        <Dashboard className={styles.dashboard}>
          <div className={styles.dashboardContent}>
            <BookAddForm handleAddBook={handleAddBook} />
            <Recommendations />
          </div>
        </Dashboard>

        <section className={styles.librarySection}>
          <div
            className={clsx(
              styles.header,
              isEmpty ? styles.headerEmpty : styles.headerCompact
            )}
          >
            <h1 className="title">My library</h1>
            <div className={styles.headerRight}>
              <LibraryDropDown
                options={selectData}
                defaultValue={selectData[0]}
                onChange={handleSelect}
              />
              {ownBooks && (ownBooks.totalPages > 1 || (ownBooks.results?.length > (isMobile ? 2 : 10) || ownBooks.length > (isMobile ? 2 : 10))) && (
                <BookPagination
                  page={page}
                  handlePage={handlePage}
                  totalPages={ownBooks.totalPages || Math.ceil((ownBooks.results?.length || ownBooks.length) / (isMobile ? 2 : 10))}
                />
              )}
            </div>
          </div>

          {isEmpty && <EmptyLibrary />}

          {ownBooks && !isEmpty && (
            <BookList
              books={ownBooks.results || ownBooks}
              isButton={true}
              handleModal={handleModal}
            />
          )}
        </section>
      </div>

      {isOpen && modalName === "ownBook" && modalData && (
        <Modal handleModal={handleModal}>
          <BookItem
            isModal={true}
            handleModal={handleModal}
            className={{
              item: styles.modalItem,
              img: styles.modalImg,
              description: styles.modalDesc,
              title: styles.modalTitle,
              text: styles.modalText,
            }}
            {...modalData}
          />
        </Modal>
      )}

      {isOpen && modalName === "addBook" && (
        <Modal
          handleModal={() => dispatch(toggleModal("addBook"))}
          className={styles.modalOverride}
        >
          <ModalAlert
            emoji="👍"
            title="Good job"
            text="Your book is now in the library! The joy knows no bounds and now you can start your training"
          />
        </Modal>
      )}
      </div>
    </>
  );
};

export default LibraryPage;

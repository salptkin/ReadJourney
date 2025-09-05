import { useEffect, useState } from "react";
import { useGetRecommendedBooksQuery } from "../../store/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../customhooks/useRedux";
import { selectModal } from "../../store/modal/modalSelector";
import { toggleModal } from "../../store/modal/modalSlice";
import { BtnType } from "../../helpers/pagination";

import BookFilterForm from "../../components/BookFilterForm/BookFilterForm";
import BookPagination from "../../components/BookPagination/BookPagination";
import Dashboard from "../../components/Dashboard/DashBoard";
import QuoteArea from "../../components/QuoteArea/QuoteArea";
import Workout from "../../components/WorkOut/WorkOut";
import useWindowSize from "../../customhooks/useWindowSize";
import Loader from "../../components/Loader/Loader";
import BookList from "../../components/BookList/BookList";
import Modal from "../../components/Modal/Modal";
import BookItem from "../../components/BookItem/BookItem";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState(null);
  const [filter, setFilter] = useState({
    title: "",
    author: "",
  });

  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { isOpen, modalName } = useAppSelector(selectModal);
  
  const { data, isFetching, error, isLoading } = useGetRecommendedBooksQuery({
    limit,
    page,
    title: filter.title,
    author: filter.author,
  });

  useEffect(() => {
    if (width < 768) {
      setLimit(2);
    } else if (width > 768 && width < 1439) {
      setLimit(8);
    } else {
      setLimit(10);
    }
  }, [width]);

  const handlePage = (type) => {
    if (type === BtnType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleFilter = (data) => {
    setFilter(data);
    setPage(1);
  };

  const handleModal = (data) => {
    setModalData(data ?? null);
    dispatch(toggleModal("recommendedBook"));
  };

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.contentWrapper}>
        <Dashboard>
          <BookFilterForm handleFilter={handleFilter} />
          <Workout />
          <QuoteArea />
        </Dashboard>

        {/* Recommended section with consistent background */}
        <div className={styles.recommendedSection}>
          {isFetching || isLoading ? (
            <Loader className={styles.loader} />
          ) : error ? (
            <div className={styles.empty}>
              <h1 className={styles.emptyTitle}>Recommended</h1>
              <p className={styles.emptyText}>
                Error loading books: {error?.data?.message || error?.message || 'Unknown error'}
              </p>
              <p className={styles.emptyText}>
                Status: {error?.status}
              </p>
            </div>
          ) : data && data.results && data.results.length > 0 ? (
            <>
              <div className={styles.headerRow}>
                <h1 className="title">Recommended</h1>

                {data && (
                  <BookPagination
                    page={page}
                    handlePage={handlePage}
                    totalPages={data?.totalPages}
                  />
                )}
              </div>
              <BookList books={data} handleModal={handleModal} />
            </>
          ) : (
            <div className={styles.empty}>
              <h1 className={styles.emptyTitle}>Recommended</h1>
              <p className={styles.emptyText}>No books found for your request 😓</p>
              {data && (
                <p className={styles.emptyText}>
                  Debug: Data exists but no results. Data: {JSON.stringify(data)}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {isOpen && modalName === "recommendedBook" && modalData && (
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
    </div>
  );
};

export default HomePage;

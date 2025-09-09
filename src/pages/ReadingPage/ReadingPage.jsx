import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useFinishReadingMutation,
  useGetBookInfoQuery,
  useStartReadingMutation,
} from "../../store/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../customhooks/useRedux";
import { selectModal } from "../../store/modal/modalSelector";
import { toggleModal } from "../../store/modal/modalSlice";
import getTimeLeftString from "../../utils/helpers/getTimeLeft";

import clsx from "clsx";
import toast from "react-hot-toast";
import ReadingForm from "../../components/ReadingForm/ReadingForm";
import BookItem from "../../components/BookItem/BookItem";
import Dashboard from "../../components/Dashboard/Dashboard";
import ProgressContent from "../../components/ProgressContent/ProgressContent";
import Statistics from "../../components/Statistics/Statistics";
import Diary from "../../components/Diary/Diary";
import Modal from "../../components/Modal/Modal";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import Icon from "../../components/GeneralUse/Icon/Icon";

import styles from "./ReadingPage.module.css";

const ReadingPage = () => {
  const { state } = useLocation();
  const [isActive, setIsActive] = useState({ statistics: false, diary: true });

  const dispatch = useAppDispatch();
  const { isOpen, modalName } = useAppSelector(selectModal);

  const { data: bookInfo } = useGetBookInfoQuery(state?.bookId ?? "");
  const [startReading] = useStartReadingMutation();
  const [finishReading] = useFinishReadingMutation();

  const lastSessionStatus =
    bookInfo?.progress[bookInfo?.progress.length - 1]?.status;

  const handleReadingForm = ({ page }) => {
    const pageAsNumber = typeof page === "string" ? parseFloat(page) : page;

    if (lastSessionStatus === "active") {
      finishReading({ page: pageAsNumber, id: state?.bookId ?? "" })
        .unwrap()
        .then((res) => {
          res.status === "done" && dispatch(toggleModal("finishBook"));
        })
        .catch((err) => {
          toast.error(err?.data?.message || "Something went wrong");
        });
    } else {
      startReading({ page: pageAsNumber, id: state?.bookId ?? "" })
        .unwrap()
        .catch((err) => {
          toast.error(err?.data?.message || "Something went wrong");
        });
    }
  };

  const showProgressMsg =
    !bookInfo ||
    bookInfo?.progress.length === 0 ||
    bookInfo?.progress[0]?.status !== "inactive";

  return (
    <div className={styles.readingPageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.dashboardContent}>
          <Dashboard
            className={clsx(
              styles.dash,
              showProgressMsg ? styles.dashEmpty : styles.dashWithList
            )}
          >
            <ReadingForm
              handleReading={handleReadingForm}
              isReadingStarted={lastSessionStatus === "active"}
            />

            {showProgressMsg ? (
              <ProgressContent />
            ) : (
              <div>
                <div className={styles.subHeader}>
                  <h2 className={styles.subTitle}>
                    {isActive.statistics ? "Statistics" : "Diary"}
                  </h2>

                  <ul className={styles.tabs}>
                    <li className={styles.tabItem}>
                      <button className={styles.tabButton}
                        type="button"
                        onClick={() => setIsActive({ diary: true, statistics: false })}
                        aria-label="Show diary"
                      >
                        <Icon
                          className={clsx(
                            styles.hourglassIcon,
                            isActive.diary && styles.hourglassIconActive
                          )}
                          w={16}
                          iconName="icon-hourglass"
                        />
                      </button>
                    </li>

                    <li className={styles.tabItem}>
                      <button className={styles.tabButton}
                        type="button"
                        onClick={() => setIsActive({ diary: false, statistics: true })}
                        aria-label="Show statistics"
                      >
                        <Icon
                          className={clsx(
                            styles.diaryIcon,
                            isActive.statistics && styles.diaryIconActive
                          )}
                          w={16}
                          iconName="icon-diary"
                        />
                      </button>
                    </li>
                  </ul>
                </div>

                {isActive.statistics && (
                  <p className={styles.statsInfo}>
                    Each page, each chapter is a new round of knowledge, a new step
                    towards understanding. By rewriting statistics, we create our
                    own reading history.
                  </p>
                )}

                {bookInfo && isActive.statistics && (
                  <Statistics
                    progress={bookInfo?.progress}
                    totalPages={bookInfo?.totalPages}
                  />
                )}

                {bookInfo && isActive.diary && (
                  <Diary
                    progress={bookInfo?.progress}
                    totalPages={bookInfo?.totalPages}
                    bookId={bookInfo?._id}
                  />
                )}
              </div>
            )}
          </Dashboard>
        </div>

        <div className={styles.bookSection}>
          <div className={styles.pageHeader}>
            <h1 className="title">My reading</h1>
          </div>
          <div className={styles.timeContainer}>
            <p className={styles.timeLeft}>
              {bookInfo && getTimeLeftString(bookInfo?.timeLeftToRead)}
            </p>
          </div>

          <div className={styles.bookContent}>
            {bookInfo && (
              <>
                <BookItem
                  className={{
                    item: styles.readItem,
                    img: styles.readImg,
                    title: styles.readTitle,
                    text: styles.readText,
                  }}
                  {...bookInfo}
                />

                <Icon
                  className={styles.recordIcon}
                  w={40}
                  iconName={
                    lastSessionStatus === "active"
                      ? "icon-stop-record"
                      : "icon-start-record"
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>

      {isOpen && modalName === "finishBook" && (
        <Modal
          className={styles.finishModal}
          handleModal={() => dispatch(toggleModal("finishBook"))}
        >
          <ModalAlert
            emoji="📚"
            title="The book is read"
            text="It was an exciting journey, where each page revealed new horizons, and the characters became inseparable friends."
          />
        </Modal>
      )}
    </div>
  );
};

export default ReadingPage;

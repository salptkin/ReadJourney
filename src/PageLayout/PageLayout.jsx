import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./PageLayout.module.css";

const PageLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;

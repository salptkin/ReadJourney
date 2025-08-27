import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./PageLayout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

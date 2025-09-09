import clsx from "clsx";
import styles from "./Dashboard.module.css";

const Dashboard = ({ children, className }) => {
  return (
    <aside className={clsx(styles.dashboard, className)}>
      {children}
    </aside>
  );
};

export default Dashboard;

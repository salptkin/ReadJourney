import clsx from "clsx";
import navigation from "../../utils/data/navigation";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ className = "", onLinkClick }) => {
  return (
    <nav className={clsx(className)}>
      <ul className={styles.list}>
        {navigation.map(({ path, label }) => (
          <li key={label} className={styles.item}>
            <NavLink
              to={path}
              onClick={onLinkClick}
              className={({ isActive }) =>
                clsx(styles.link, isActive ? styles.active : styles.inactive)
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

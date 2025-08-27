import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/auth/authSelectors";
import { logOut } from "../../store/auth/authOperations";
import { resetStore } from "../../store/auth/authSlice";

import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import Button from "../GeneralUse/Button/Button"
import Icon from "../GeneralUse/Icon/Icon";

import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const name = user?.name || "";
  const initial = name?.[0] || "";

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(resetStore());
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.brand}>
          <Icon className={styles.logoIcon} w={42} h={17} iconName="icon-logo" />
          <span className={styles.logoText}>read journey</span>
        </div>
      </Link>

      <Navigation className={styles.navDesktop} />

      <div className={styles.actions}>
        <div className={styles.userBox}>
          <div className={styles.avatar}>
            <span className={styles.avatarInitial}>{initial}</span>
          </div>
          <p className={styles.username}>{name}</p>
        </div>

        <button type="button" className={styles.menuBtn} onClick={toggleMenu}>
          <Icon className={styles.menuIcon} w={28} iconName="icon-open-menu" />
        </button>

        <Button
          type="button"
          primary={false}
          title="Log out"
          className={styles.logoutBtn}
          onClick={handleLogOut}
        />
      </div>

      <MobileMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        handleLogOut={handleLogOut}
      />
    </header>
  );
};

export default Header;

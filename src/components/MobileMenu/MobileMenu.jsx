import { useEffect } from "react";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import Button from "../GeneralUse/Button/Button";
import Icon from "../GeneralUse/Icon/Icon";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ isOpen, toggleMenu, handleLogOut }) => {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, toggleMenu]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleMenu();
    }
  };

  return (
    <div
      className={clsx(
        styles.overlay,
        isOpen ? styles.overlayOpen : styles.overlayClosed
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={clsx(
          styles.panel,
          isOpen ? styles.panelOpen : styles.panelClosed
        )}
      >
        <button type="button" className={styles.closeBtn} onClick={toggleMenu}>
          <Icon className={styles.closeIcon} w={28} iconName="icon-close-menu" />
        </button>

        <div className={styles.navWrap}>
          <Navigation />
        </div>

        <Button
          type="button"
          primary={false}
          title="Log out"
          className={styles.logoutBtn}
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

export default MobileMenu;

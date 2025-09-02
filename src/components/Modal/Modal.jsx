import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import Icon from "../GeneralUse/Icon/Icon";
import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ handleModal, children, className }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") handleModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleModal]);

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) handleModal();
  };

  if (!modalRoot) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div className={clsx(styles.modal, className)}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleModal}
          aria-label="Close modal"
        >
          <Icon className={styles.icon} w={22} iconName="icon-close-menu" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

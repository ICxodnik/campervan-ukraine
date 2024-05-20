import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./index.module.css";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          <svg className={css.favIcon} onClick={onClose}>
            <use xlinkHref="icons.svg#icon-close"></use>
          </svg>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

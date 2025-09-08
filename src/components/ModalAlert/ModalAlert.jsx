import styles from "./ModalAlert.module.css";

const ModalAlert = ({ emoji, title, text }) => {
  return (
    <>
      <p className={styles.emoji}>{emoji}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </>
  );
};

export default ModalAlert;

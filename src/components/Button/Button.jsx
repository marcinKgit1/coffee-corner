import styles from "./Button.module.css";

export function Button({ children, disabled, onClick }) {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

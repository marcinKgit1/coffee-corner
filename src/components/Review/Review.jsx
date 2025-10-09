import styles from "./Review.module.css";

export function Review({ author, text }) {
  return (
    <article className={styles.article}>
      <strong>{author}</strong>
      <p>{text}</p>
    </article>
  );
}

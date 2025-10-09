import styles from "./Form.module.css";
import { useState } from "react";

export function Form({ onReviewSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);
    setInputValue("");
    setTextareaValue("");
  }
  return (
    <>
      <hr />

      <h2 className={styles.header}>Podziel się opinią✍️</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            className={styles.input}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
            className={styles.textarea}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textareaValue === ""}
          className={styles.button}
        >
          Dodaj
        </button>
      </form>
    </>
  );
}

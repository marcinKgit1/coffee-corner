import { Review } from "../Review/Review";
import styles from "./Reviews.module.css";

export function Reviews({ reviews }) {
  const reviewsElement = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  return <ul>{reviewsElement}</ul>;
}

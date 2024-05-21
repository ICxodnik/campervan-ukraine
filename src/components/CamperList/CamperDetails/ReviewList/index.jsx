import Review from "./Review";
import css from "./index.module.css";

export default function ReviewList({ data }) {
  return (
    <div className={css.list}>
      {data.map((rw) => (
        <Review review={rw} key={rw.reviewer} />
      ))}
    </div>
  );
}

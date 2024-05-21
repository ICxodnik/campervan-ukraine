import Stars from "../../../../Stars";
import css from "./index.module.css";

export default function Review({ review }) {
  return (
    <div className={css.rating}>
      <div className={css.header}>
        <div className={css.logo}>{review.reviewer[0]}</div>
        <div className={css.info}>
          <div className={css.name}>{review.reviewer}</div>
          <Stars rating={review.rating} />
        </div>
      </div>
      <div className={css.contant}>{review.comment}</div>
    </div>
  );
}

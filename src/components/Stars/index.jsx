import css from "./index.module.css";

export default function Stars({ rating }) {
  const maxRating = 5;

  let rows = [];
  for (let i = 0; i < rating; i++) {
    rows.push(
      <svg className={css.favIcon}>
        <use xlinkHref="icons.svg#icon-star"></use>
      </svg>
    );
  }
  for (let i = rating; i < maxRating; i++) {
    rows.push(
      <svg className={css.favIcon}>
        <use xlinkHref="icons.svg#icon-empty-star"></use>
      </svg>
    );
  }
  return <div className={css.starContainer}>{rows}</div>;
}

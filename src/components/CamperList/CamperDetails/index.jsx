import CategoryList from "../../CategoryList";
import css from "./index.module.css";

export default function CamperItemDetails({ el, showModal }) {
  return (
    <div className={css.cardContent}>
      <div className={css.header}>
        <div className={css.title}>{el.name}</div>
        <div className={css.additionalInfo}>
          <div className={css.text}>
            <svg className={css.favIcon}>
              <use xlinkHref="icons.svg#icon-star"></use>
            </svg>
            <div className={css.rating}>
              {el.rating}({el.reviews.length} Reviews)
            </div>
          </div>
          <div className={css.text}>
            <svg className={css.favIcon}>
              <use xlinkHref="icons.svg#icon-location"></use>
            </svg>
            <div className={css.location}>{el.location}</div>
          </div>
        </div>
        <div className={css.price}>€{el.price.toFixed(2).toLocaleString()}</div>
      </div>
      <div className={css.cardDetails}>
        <div className={css.gallery}>
          <div className={css.cardImage}>
            <img src={el.galleryUrls[0]} alt={el.name} />
          </div>
          <div className={css.cardImage}>
            <img src={el.galleryUrls[1]} alt={el.name} />
          </div>
          <div className={css.cardImage}>
            <img src={el.galleryUrls[2]} alt={el.name} />
          </div>
        </div>
        <div className={css.supportingText}>{el.description}</div>

        <CategoryList details={el.details} />
      </div>
    </div>
  );
}

import { useAppDispatch } from "../../../app/hooks";
import { toggleFavorite } from "../../../app/camperSlice";
import CategoryList from "../../CategoryList";
import css from "./index.module.css";

export default function CamperItem({ el, showModal }) {
  const dispatch = useAppDispatch();

  return (
    <div className={css.card}>
      <div className={css.cardContent}>
        <div className={css.cardImage}>
          <img src={el.galleryUrls[0]} alt={el.name} />
        </div>
        <div className={css.cardDetails}>
          <div className={css.container}>
            <div className={css.header}>
              <div className={css.title}>{el.name}</div>
              <div className={css.headerLeft}>
                <div className={css.price}>
                  €{el.price.toFixed(2).toLocaleString()}
                </div>
                <svg
                  className={css.favIcon}
                  onClick={() => dispatch(toggleFavorite(el.id))}
                >
                  <use
                    xlinkHref={
                      "icons.svg#icon-" + (el.isFav ? "fav_heart" : "heart")
                    }
                  ></use>
                </svg>
              </div>
            </div>
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
          </div>
          <div className={css.supportingText}>{el.description}</div>

          <CategoryList details={el.details} />
          <button className="accentButton" onClick={() => showModal(el)}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

import CategoryList from "../../CategoryList";
import css from "./index.module.css";

export default function CamperItem({ el }) {
  return (
    <div className={css.card}>
      <div className={css.contant}>
        <div className={css.image}>
          <img src={el.gallery && el.gallery[0]} alt={el.name} />
        </div>
        <div className={css.cardDetails}>
          <div className={css.container}>
            <div className={css.horizontalContainer}>{el.name}</div>
            <div className={css.section}></div>
            <div className={css.supportingText}>{el.description}</div>
          </div>
          <CategoryList list={el} />
          <button className={css.accentButton}>Show more</button>
        </div>
      </div>
    </div>
  );
}

import css from "./index.module.css";

export default function FilterSection({ title, filters }) {
  return (
    <div className={css.filterSection}>
      <div className={css.subTitle}>{title}</div>
      <div className={css.line}></div>
      <div className={css.filterButtonContainer}>
        {filters.map((el) => (
          <div className={css.filterButton}>
            <svg className={css.filterIcon}>
              <use xlinkHref={"icons.svg#icon-" + el.icon}></use>
            </svg>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
}

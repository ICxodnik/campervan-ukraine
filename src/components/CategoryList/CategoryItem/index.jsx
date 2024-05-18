import css from "./index.module.css";

export default function CategoryItem({ value, label }) {
  let icon = label;
  if (value === 0) {
    //not included
    return null;
  }
  if (value === 1) {
    //show is included
    value = "";
  }
  if (isNaN(value)) {
    //show type
    label = "";
    icon = value;
  }
  return (
    <div className={css.categories}>
      <svg className={css.categoriesIcon}>
        <use xlinkHref={"icons.svg#icon-" + icon}></use>
      </svg>
      {value} {label}
    </div>
  );
}

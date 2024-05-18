import css from "./index.module.css";

function prepareValue(value, label) {
  //label not important
  if (Number.isNaN(parseFloat(value))) {
    return {
      icon: value,
      text: value,
    };
  }
  //value not important
  if (value === 1) {
    return {
      icon: label,
      text: label,
    };
  }
  return {
    icon: label,
    text: value + " " + label,
  };
}

export default function CategoryItem({ value, label }) {
  if (!value) {
    return null;
  }
  const displayData = prepareValue(value, label);
  return (
    <div className={css.categories}>
      <svg className={css.categoriesIcon}>
        <use xlinkHref={"icons.svg#icon-" + displayData.icon}></use>
      </svg>
      {displayData.text}
    </div>
  );
}

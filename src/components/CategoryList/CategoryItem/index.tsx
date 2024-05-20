import css from "./index.module.css";

const mapping: Record<
  string,
  (label: string, value: string | number) => string
> = {
  engine: capitalizeValue,
  transmission: capitalizeValue,
  airConditioner: () => "AC",
  beds: combined,
};

function genericLabel(label: string, value: number | string) {
  // eslint-disable-next-line eqeqeq
  if (value == 1) {
    return capitalizeLabel(label);
  }
  return combined(label, value);
}

function combined(label: string, value: number | string) {
  return `${value} ${label}`;
}

function capitalizeLabel(label: string) {
  return capitalize(label);
}

function capitalizeValue(_: string, value: string | number) {
  return capitalize(value + "");
}

function prepareValue(id: string, value: any) {
  const textMapper = mapping[id] || {};

  return {
    id,
    text:
      typeof textMapper === "function"
        ? textMapper(id, value)
        : genericLabel(id, value),
    icon: id,
  };
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

export default function CategoryItem({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  const displayData = prepareValue(label, value);
  return (
    <div className={css.categories}>
      <svg className={css.categoriesIcon}>
        <use xlinkHref={"icons.svg#icon-" + displayData.icon}></use>
      </svg>
      {displayData.text}
    </div>
  );
}

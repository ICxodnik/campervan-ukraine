import css from "./index.module.css";

const mapping: Record<
  string,
  (label: string, value: string | number) => string
> = {
  adults: combined,
  children: combined,
  engine: capitalizeValue,
  transmission: capitalizeValue,
  airConditioner: () => "AC",
  bathroom: combined,
  kitchen: capitalizeLabel,
  beds: combined,
  TV: capitalizeLabel,
  CD: capitalizeLabel,
  radio: capitalizeLabel,
  shower: capitalizeLabel,
  toilet: capitalizeLabel,
  freezer: capitalizeLabel,
  hob: combined,
  microwave: capitalizeLabel,
  gas: combined,
  water: combined,
};

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
      typeof textMapper === "function" ? textMapper(id, value) : (value as any),
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

import CategoryItem from "./CategoryItem";
import css from "./index.module.css";

export default function CategoryList({ list }) {
  console.log(list);
  const category = {
    ...list.details,
    adults: list.adults,
    children: list.children,
    engine: list.engine,
    transmission: list.transmission,
  };
  console.log(category);

  return (
    <ul className={css.categories}>
      {Object.entries(category).map((el) => (
        <CategoryItem label={el[0]} value={el[1]} key={el[0]} />
      ))}
    </ul>
  );
}

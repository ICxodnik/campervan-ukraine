import CategoryItem from "./CategoryItem";
import css from "./index.module.css";

export default function CategoryList({ details }) {
  return (
    <div className={css.categories}>
      {details.map((el) => (
        <CategoryItem key={el.id} label={el.id} value={el.value} />
      ))}
    </div>
  );
}

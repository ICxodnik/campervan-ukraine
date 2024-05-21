import { useState } from "react";
import CategoryItem from "./CategoryItem";
import css from "./index.module.css";

export default function CategoryList({ details, toShowAll }) {
  const [showAll, setShowAll] = useState(toShowAll ?? false);
  const maxCount = 7;

  return (
    <>
      <div className={css.categories}>
        {details.slice(0, showAll ? details.length : maxCount).map((el) => (
          <CategoryItem key={el.id} label={el.id} value={el.value} />
        ))}
      </div>
      {!showAll && (
        <div className={css.showMore} onClick={() => setShowAll(true)}>
          show all ▾
        </div>
      )}
    </>
  );
}

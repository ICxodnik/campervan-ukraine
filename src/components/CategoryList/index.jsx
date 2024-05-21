import { useState } from "react";
import CategoryItem from "./CategoryItem";
import css from "./index.module.css";

export default function CategoryList({ details }) {
  const [showAll, setShowAll] = useState(false);
  const maxCount = 7;
  const showAllCount = -1;

  return (
    <>
      <div className={css.categories}>
        {details.slice(0, showAll ? showAllCount : maxCount).map((el) => (
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

import css from "./index.module.css";
import cx from "classnames";
import { Equipment, Type } from "../../../app/filterSlice";

interface Props {
  title: string;
  filters: Array<Equipment | Type>;
  onSelect: (id: string) => void;
}

export default function FilterSection({ title, filters, onSelect }: Props) {
  return (
    <div className={css.filterSection}>
      <div className={css.subTitle}>
        <h2>{title}</h2>
      </div>
      <div className={css.line}></div>
      <div className={css.filterButtonContainer}>
        {filters.map((el) => (
          <div
            className={cx(css.filterButton, {
              [css.selected]: el.isSelected,
            })}
            key={el.name}
            onClick={() => onSelect(el.name)}
          >
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

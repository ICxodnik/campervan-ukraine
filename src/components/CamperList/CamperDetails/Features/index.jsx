import Line from "../../../Line";
import css from "./index.module.css";

export default function Features({ data }) {
  return (
    <div className={css.features}>
      <div className={css.title}>Vehicle details</div>
      <Line />
      <div className={css.data}>
        {Object.entries(data).map((el) => (
          <div className={css.section} key={el[0]}>
            <div className={css.data}>{el[0]}</div>
            <div className={css.value}>{el[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

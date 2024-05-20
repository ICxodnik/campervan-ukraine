import css from "./index.module.css";
import CamperItem from "./Camper";
import { useAppSelector } from "../../app/hooks";
import { getCampers } from "../../app/selectors";

export default function CamperList() {
  const campers = useAppSelector(getCampers);
  return (
    <div className={css.list}>
      {campers.map((el) => (
        <CamperItem el={el} key={el.id} />
      ))}
    </div>
  );
}

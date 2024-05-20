import { useAppSelector } from "../../app/hooks";
import { getFilteredCampers } from "../../app/selectors";
import CamperList from "../../components/CamperList";
import Filter from "../../components/Filter";
import css from "./index.module.css";

export default function Catalog() {
  const campers = useAppSelector(getFilteredCampers);
  return (
    <div className={css.page}>
      <Filter />

      <CamperList campers={campers} />
    </div>
  );
}

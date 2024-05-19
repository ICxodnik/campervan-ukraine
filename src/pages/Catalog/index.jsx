import CamperList from "../../components/CamperList";
import Filter from "../../components/Filter";
import css from "./index.module.css";

export default function Catalog() {
  return (
    <div className={css.page}>
      <Filter />

      <CamperList />
    </div>
  );
}

import css from "./index.module.css";
import camperList from "../../services/camper.json";
import CamperItem from "./Camper";

export default function CamperList() {
  return (
    <div className={css.list}>
      {camperList.map((el) => (
        <CamperItem el={el} key={el._id} />
      ))}
    </div>
  );
}

import { useAppSelector } from "../../app/hooks";
import { getFavCampers } from "../../app/selectors";
import CamperList from "../../components/CamperList";
import css from "./index.module.css";

export default function Favorites() {
  const favorites = useAppSelector(getFavCampers);

  return <CamperList campers={favorites} />;
}

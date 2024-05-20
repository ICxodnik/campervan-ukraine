import { nextPage } from "../../app/filterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPaginatedCampers, getPaginatedInfo } from "../../app/selectors";
import CamperList from "../../components/CamperList";
import Filter from "../../components/Filter";
import css from "./index.module.css";

export default function Catalog() {
  const campers = useAppSelector(getPaginatedCampers);
  const pageInfo = useAppSelector(getPaginatedInfo);
  const dispatch = useAppDispatch();

  return (
    <div className={css.page}>
      <Filter />

      <CamperList campers={campers} />
      {pageInfo.hasNextPage && (
        <div className={css.footer}>
          <button className="button" onClick={() => dispatch(nextPage())}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

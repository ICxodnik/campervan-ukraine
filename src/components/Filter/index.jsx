import FilterSection from "./FilterSection";
import css from "./index.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectEquipment,
  selectType,
  setLocation,
  selectFilterEquipment,
  selectFilterLocation,
  selectFilterType,
} from "../../app/filterSlice";

export default function Filter(props) {
  const filterEquipment = useAppSelector(selectFilterEquipment);
  const filterType = useAppSelector(selectFilterType);
  const location = useAppSelector(selectFilterLocation);
  const dispatch = useAppDispatch();

  return (
    <div className={css.filter}>
      <div className={css.filterDepartment}>
        <div className={css.title}>Location</div>

        <div className={css.inputContainer}>
          <svg className={css.inputIcon}>
            <use xlinkHref={"icons.svg#icon-location"}></use>
          </svg>
          <input
            className={css.input}
            type="search"
            name="searchLocation"
            id="searchLocation"
            value={location}
            onChange={(e) => dispatch(setLocation(e.currentTarget.value))}
          />
        </div>
      </div>
      <div className={css.filterDepartment}>
        <div className={css.title}>Filters</div>
        <FilterSection
          title="Vehicle Equipment"
          onSelect={(id) => dispatch(selectEquipment(id))}
          filters={filterEquipment}
        />
        <FilterSection
          title="Vehicle Type"
          filters={filterType}
          onSelect={(id) => dispatch(selectType(id))}
        />
      </div>
    </div>
  );
}

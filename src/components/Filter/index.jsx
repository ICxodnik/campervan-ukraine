import FilterSection from "./FilterSection";
import css from "./index.module.css";

const filterEquipment = [
  {
    name: "AC",
    icon: "ac",
    isSelected: false,
  },
  {
    name: "Automatic",
    icon: "transmission",
    isSelected: false,
  },
  {
    name: "Kitchen",
    icon: "kitchen",
    isSelected: false,
  },
  {
    name: "TV",
    icon: "TV",
    isSelected: false,
  },
  {
    name: "Shower/WC",
    icon: "shower",
    isSelected: false,
  },
];
const filterType = [
  {
    name: "Van",
    icon: "panelTruck",
    isSelected: false,
  },
  {
    name: "Fully Integrated",
    icon: "fullyIntegrated",
    isSelected: false,
  },
  {
    name: "Alcove",
    icon: "alcove",
    isSelected: false,
  },
];

export default function Filter(props) {
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
          />
        </div>
      </div>
      <div className={css.filterDepartment}>
        <div className={css.title}>Filters</div>
        <FilterSection title="Vehicle Equipment" filters={filterEquipment} />
        <FilterSection title="Vehicle Type" filters={filterType} />
      </div>
    </div>
  );
}

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
    icon: "tv",
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
        <div className={css.filterSection}>
          <div className={css.subTitle}>Vehicle Equipment</div>
          <div className={css.line}></div>
          <div className={css.filterButtonContainer}>
            {filterEquipment.map((el) => (
              <div className={css.filterButton}>
                <svg className={css.filterIcon}>
                  <use xlinkHref={"icons.svg#icon-" + el.icon}></use>
                </svg>
                {el.name}
              </div>
            ))}
          </div>
        </div>
        <div className={css.filterSection}>
          <div className={css.subTitle}>Vehicle Type</div>
          <div className={css.line}></div>

          <div className={css.filterButtonContainer}>
            {filterType.map((el) => (
              <div className={css.filterButton}>
                <svg className={css.filterIcon}>
                  <use xlinkHref={"icons.svg#icon-" + el.icon}></use>
                </svg>
                {el.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

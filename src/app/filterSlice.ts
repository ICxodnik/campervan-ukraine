import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Filter {
  filterEquipment: Array<Equipment>;
  filterType: Array<Type>;
  filterLocation: string;
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  perPage: number;
}

export interface Equipment {
  keys: string[];
  name: "AC" | "Automatic" | "Kitchen" | "TV" | "Shower/WC";
  value?: string;
  icon: string;
  isSelected: boolean;
}

export interface Type {
  key: "alcove" | "fullyIntegrated" | "panelTruck";
  name: "Van" | "Fully Integrated" | "Alcove";
  icon: string;
  isSelected: boolean;
}

const filterEquipment: Array<Equipment> = [
  {
    keys: ["airConditioner"],
    name: "AC",
    icon: "airConditioner",
    isSelected: false,
  },
  {
    keys: ["transmission"],
    value: "automatic",
    name: "Automatic",
    icon: "transmission",
    isSelected: false,
  },
  {
    keys: ["kitchen"],
    name: "Kitchen",
    icon: "kitchen",
    isSelected: false,
  },
  {
    keys: ["TV"],
    name: "TV",
    icon: "TV",
    isSelected: false,
  },
  {
    keys: ["shower", "toilet"],
    name: "Shower/WC",
    icon: "shower",
    isSelected: false,
  },
];
const filterType: Array<Type> = [
  {
    key: "panelTruck",
    name: "Van",
    icon: "panelTruck",
    isSelected: false,
  },
  {
    key: "fullyIntegrated",
    name: "Fully Integrated",
    icon: "fullyIntegrated",
    isSelected: false,
  },
  {
    key: "alcove",
    name: "Alcove",
    icon: "alcove",
    isSelected: false,
  },
];

const filterInitialState: Filter = {
  filterEquipment,
  filterType,
  filterLocation: "",
  pagination: {
    page: 1,
    perPage: 4,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    nextPage: (state) => {
      state.pagination.page++;
    },
    selectEquipment: (state, action: PayloadAction<string>) => {
      let filter = state.filterEquipment.find(
        (eq) => eq.name === action.payload
      )!;
      filter.isSelected = !filter.isSelected;
      state.pagination.page = 1;
    },
    selectType: (state, action: PayloadAction<string>) => {
      let filter = state.filterType.find((eq) => eq.name === action.payload)!;
      filter.isSelected = !filter.isSelected;
      state.pagination.page = 1;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.filterLocation = action.payload;
      state.pagination.page = 1;
    },
  },
});

export const { selectEquipment, selectType, setLocation, nextPage } =
  filterSlice.actions;

export default filterSlice.reducer;

export const selectFilterEquipment = (state: RootState) =>
  state.filter.filterEquipment;
export const selectFilterType = (state: RootState) => state.filter.filterType;
export const selectFilterLocation = (state: RootState) =>
  state.filter.filterLocation;

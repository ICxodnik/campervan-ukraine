import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Filter {
  filterEquipment: Array<Equipment>;
  filterType: Array<Type>;
  filterLocation: string;
}

export interface Equipment {
  name: "AC" | "Automatic" | "Kitchen" | "TV" | "Shower/WC";
  icon: string;
  isSelected: boolean;
}

export interface Type {
  name: "Van" | "Fully Integrated" | "Alcove";
  icon: string;
  isSelected: boolean;
}

const filterEquipment: Array<Equipment> = [
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
const filterType: Array<Type> = [
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

const filterInitialState: Filter = {
  filterEquipment,
  filterType,
  filterLocation: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    //TODO: could combine
    selectEquipment: (state, action: PayloadAction<string>) => {
      let filter = state.filterEquipment.find(
        (eq) => eq.name === action.payload
      )!;
      filter.isSelected = !filter.isSelected;
    },
    selectType: (state, action: PayloadAction<string>) => {
      let filter = state.filterType.find((eq) => eq.name === action.payload)!;
      filter.isSelected = !filter.isSelected;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.filterLocation = action.payload;
    },
  },
});

export const { selectEquipment, selectType, setLocation } = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilterEquipment = (state: RootState) =>
  state.filter.filterEquipment;
export const selectFilterType = (state: RootState) => state.filter.filterType;
export const selectFilterLocation = (state: RootState) =>
  state.filter.filterLocation;

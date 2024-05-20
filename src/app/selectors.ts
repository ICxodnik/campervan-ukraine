import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

function getAllCampers(state: RootState) {
  return state.campers.items;
}
export const getCampers = createSelector([getAllCampers], (campers) => {
  // TODO: filter campers
  return campers;
});

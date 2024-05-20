import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const getAllCampers = (state: RootState) => state.campers.items;
const getFavoritesCampers = (state: RootState) => state.campers.favorite;

export const getCampers = createSelector(
  [getAllCampers, getFavoritesCampers],
  (campers, favorites) => {
    // TODO: filter campers
    const favIds = new Set(favorites);

    return campers.map((el) => ({
      ...el,
      isFav: favIds.has(el.id),
    }));
  }
);

export const getFavCampers = createSelector([getCampers], (campers) => {
  return campers.filter((cp) => cp.isFav);
});

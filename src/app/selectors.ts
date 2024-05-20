import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const getAllCampers = (state: RootState) => state.campers.items;
const getFavoritesCampers = (state: RootState) => state.campers.favorite;
const getFilters = (state: RootState) => state.filter;

export const getCampers = createSelector(
  [getAllCampers, getFavoritesCampers],
  (campers, favorites) => {
    const favIds = new Set(favorites);

    return campers.map((el) => ({
      ...el,
      isFav: favIds.has(el.id),
    }));
  }
);

export const getFilteredCampers = createSelector(
  [getCampers, getFilters],
  (campers, filters) => {
    const types = filters.filterType.filter((f) => f.isSelected);

    if (types.length > 0) {
      campers = campers.filter((cp) =>
        types.some((type) => type.key === cp.form)
      );
    }

    const equipment = filters.filterEquipment.filter((f) => f.isSelected);
    const equipmentTypes = equipment.flatMap((type) => type.keys);
    if (equipmentTypes.length > 0) {
      campers = campers.filter((cp) =>
        equipmentTypes.every((type) =>
          cp.details.some((det) => det.id === type)
        )
      );
    }

    const transmission = equipment.find((eq) =>
      eq.keys.includes("transmission")
    );
    if (transmission) {
      campers = campers.filter((cp) =>
        cp.details.some(
          (det) =>
            transmission.keys.includes(det.id) &&
            transmission.value! === det.value
        )
      );
    }

    const location = filters.filterLocation.toLocaleLowerCase();
    if (location.length > 0) {
      campers = campers.filter((cp) =>
        cp.location.toLowerCase().includes(location)
      );
    }

    return campers;
  }
);

export const getFavCampers = createSelector([getCampers], (campers) => {
  return campers.filter((cp) => cp.isFav);
});

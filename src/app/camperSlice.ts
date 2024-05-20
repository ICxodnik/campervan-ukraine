import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/api";

export interface CamperDetail {
  id: string;
  value: string;

  order?: number;
}

export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  location: string;
  form: "alcove" | "fullyIntegrated" | "panelTruck";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;

  galleryUrls: string[];

  details: CamperDetail[];
  rating: number;
  reviews: Review[];
}

interface CamperState {
  items: Camper[];
  isLoading: boolean;
  favorite: string[];
}

const initialState: CamperState = {
  items: [],
  isLoading: false,
  favorite: [],
};

const loadAction = createAsyncThunk<Camper[]>("campers", async () => {
  return await api.fetchCampers();
});

export const camperSlice = createSlice({
  name: "camper",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      let favIndex = state.favorite.findIndex((fav) => fav === action.payload);
      if (favIndex > -1) {
        state.favorite.splice(favIndex, 1);
      } else {
        state.favorite.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadAction.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadAction.rejected, (state) => {
      state.isLoading = false;
    });

    if (process.env.NODE_ENV === "development") {
      builder.addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          console.error(action.error);
        }
      );
    }
  },
});

export const { toggleFavorite } = camperSlice.actions;
export { loadAction };
export default camperSlice.reducer;

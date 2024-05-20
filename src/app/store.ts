import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import camperReducer from "./camperSlice";
import filterReducer from "./filterSlice";

const camperConfig = {
  key: "favorites",
  whitelist: ["favorite"],
  storage,
};

const filterConfig = {
  key: "filters",
  storage,
};

const camperReducerP = persistReducer(camperConfig, camperReducer);
const filterReducerP = persistReducer(filterConfig, filterReducer);

export const store = configureStore({
  reducer: {
    campers: camperReducerP,
    filter: filterReducerP,
  },

  middleware: (getDefaultMiddleware) => {
    // ignore serializable checks for redux-persist library
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

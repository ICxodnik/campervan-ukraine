import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import camperReducer from "./camperSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    campers: camperReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice";
import menuReducer from "./features/menuSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    menu: menuReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

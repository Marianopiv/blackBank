import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "../slices/cardsSlice";
import transferencesSlice from "../slices/transferencesSlice";
import usersSlice from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    transferences: transferencesSlice,
    users: usersSlice,
  },
});

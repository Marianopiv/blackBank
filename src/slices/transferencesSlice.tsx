import { createSlice } from "@reduxjs/toolkit";
import { exampleTransferences } from "../config/config";
import { checkifDataExists } from "../helper";

const initialState = {
  transferences: [],
};

const transferencesSlice = createSlice({
  name: "transferences",
  initialState,
  reducers: {
    setFilterTransferences: (state, action) => {
      if (!action.payload) {
        state.transferences = exampleTransferences;
        return;
      }
      state.transferences = checkifDataExists(state.transferences, action.payload);
    },
    setFilterTransferenceStatus: (state, action) => {
      if (!action.payload) {
        state.transferences = exampleTransferences;
        return;
      }
      state.transferences = exampleTransferences.filter((transference) => transference.status === action.payload);
    },
    setTransferences: (state, action) => {
      state.transferences = [...state.transferences, action.payload];
    },
    setTotalTransferences: (state, action) => {
      state.transferences = action.payload;
    },
  },
});

export const { setFilterTransferences, setFilterTransferenceStatus, setTransferences, setTotalTransferences } = transferencesSlice.actions;

export default transferencesSlice.reducer;

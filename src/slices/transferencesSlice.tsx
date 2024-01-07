import { createSlice } from "@reduxjs/toolkit";
import { checkifDataExists } from "../helper";

const initialState = {
  transferences: [],
  allTransferences:[]
};

const transferencesSlice = createSlice({
  name: "transferences",
  initialState,
  reducers: {
    setFilterTransferences: (state, action) => {
      if (!action.payload) {
        state.transferences = state.allTransferences;
        return;
      }
      state.transferences = checkifDataExists(state.transferences, action.payload);
    },
    setFilterTransferenceStatus: (state, action) => {
      if (!action.payload) {
        state.transferences = state.allTransferences;
        return;
      }
      state.transferences = state.allTransferences.filter((transference) => transference.status === action.payload);
    },
    setTransferences: (state, action) => {
      state.transferences = [...state.transferences, action.payload];
    },
    setTotalTransferences: (state, action) => {
      state.transferences = action.payload;
      state.allTransferences = action.payload
    },
  },
});

export const {setFilterTransferences, setFilterTransferenceStatus, setTransferences, setTotalTransferences } = transferencesSlice.actions;

export default transferencesSlice.reducer;

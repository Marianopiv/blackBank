import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload;
    },
  },
});

export const { setTotalUsers } = usersSlice.actions;

export default usersSlice.reducer;

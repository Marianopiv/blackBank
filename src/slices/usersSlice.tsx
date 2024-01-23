import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUsers: [],
  contact:"",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload;
    },
    setContact: (state,action) => {
      state.contact = action.payload;
    }
  },
});

export const { setContact,setTotalUsers } = usersSlice.actions;

export default usersSlice.reducer;

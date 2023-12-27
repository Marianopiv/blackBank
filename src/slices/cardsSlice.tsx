import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../config/config";

const initialState = {
  toogleModal: false,
  cards: cards,
  newCard: {},
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAddCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
    setNewCard: (state, action) => {
      state.newCard = { ...state.newCard, ...action.payload };
    },
    setToogleModal: (state) => {
      state.toogleModal = !state.toogleModal;
    },
  },
});

export const { setAddCard, setNewCard, setToogleModal } = cardsSlice.actions;

export default cardsSlice.reducer;

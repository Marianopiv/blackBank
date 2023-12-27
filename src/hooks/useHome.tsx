import { useSelector, useDispatch } from "react-redux";
import { setAddCard, setNewCard, setToogleModal } from "../slices/cardsSlice";
import { Card, Store } from "../interfaces/interfaces";
import { convertToDigits } from "../helper";

const useHome = () => {
  const { toogleModal, cards, newCard } = useSelector((store: Store) => store.cards);

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(setToogleModal());
  };

  const handleAddCard = (card: Card) => {
    dispatch(setAddCard(card));
  };

  const handleNewCard = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "number") {
      updatedValue = convertToDigits(value);
    }

    dispatch(setNewCard({ ...newCard, [name]: updatedValue, name: "Mariano Pividori" }));
  };

  return { cards, newCard, toogleModal, dispatch, handleAddCard, handleModal, handleNewCard };
};

export default useHome;

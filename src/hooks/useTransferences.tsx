import { useSelector, useDispatch } from "react-redux";
import { Store, TransferenceObject } from "../interfaces/interfaces";
import { setFilterTransferenceStatus, setFilterTransferences, setTransferences } from "../slices/transferencesSlice";
import { createId } from "../helper";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { fechaFormateada } from "../config/config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { Toast } from "../shared/CustomAlert";
import Swal from "sweetalert2";

const useTransferences = () => {
  const { transferences } = useSelector((store: Store) => store.transferences);
  const { user } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const [transferenceObj, setTransferenceObj] = useState({
    id: "",
    status: "",
    payer: "",
    date: "",
    amount: 0,
    receiver: "",
  });

  const addTransference = (transference: TransferenceObject) => {
    dispatch(setTransferences(transference));
  };

  const filterByStatus = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterTransferenceStatus(e.target.value));
  };

  const filterTransference = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterTransferences(e.target.value));
  };

  const createTransferenceToDb = async (transfObj: TransferenceObject) => {
    try {
      const collectionRef = collection(db, `transferences`);
      await addDoc(collectionRef, transfObj);
      await Toast.fire({
        icon: "success",
        title: "Operación realizada correctamente",
      });
      return;
    } catch (error) {
      Swal.fire({
        title: "Ups!",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  const createTransference = (e: { target: { name: string; value: string } }, deposit: boolean,service: { type: unknown; }) => {
    const { name, value } = e.target;
    console.log(transferenceObj,"transfobj")
    if (service) {
      setTransferenceObj({
        ...transferenceObj,
        [name]: value,
        id: createId(transferences.length, transferenceObj.amount),
        status: "success",
        payer: user.displayName,
        receiver: service.type,
        date: fechaFormateada,
      });
      return
    }
    if (deposit) {
      setTransferenceObj({
        ...transferenceObj,
        [name]: value,
        id: createId(transferences.length, transferenceObj.amount),
        status: "success",
        payer: user.displayName,
        receiver: user.displayName,
        date: fechaFormateada,
      });
    } else {
      setTransferenceObj({
        ...transferenceObj,
        [name]: value,
        id: createId(transferences.length, transferenceObj.amount),
        status: "success",
        payer: user.displayName,
        date: fechaFormateada,
      });
    }
  };

  const resetTransferenceObj = () => {
    setTransferenceObj({
      id: "",
      status: "",
      payer: "",
      date: "",
      amount: 0,
      receiver: "",
    })
  }
  return {
    addTransference,
    createTransference,
    createTransferenceToDb,
    dispatch,
    filterByStatus,
    filterTransference,
    resetTransferenceObj,
    transferences,
    transferenceObj,
  };
};

export default useTransferences;

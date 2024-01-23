import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";
import { SetStateAction,useState } from "react";
import { db } from "../firebase/Firebase";
import { ToastError } from "../shared/CustomAlert";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { setContact } from "../slices/usersSlice";

const useAddContact = () => {
  const { contact } = useSelector((store: Store) => store.users);
  const dispatch = useDispatch();
  const [tempUser, setTempUser] = useState<null|DocumentData>(null);
  const [searchedBy, setSearchedBy] = useState<string>("")

  const searchUser = async (userData: string | DocumentData,criteriaChosen:string) => {
    try {
      const usersCollectionRef = collection(db, "users");
      const emailQuery = query(usersCollectionRef, where(criteriaChosen, "==", userData));
      const emailSnapshot = await getDocs(emailQuery);
      if (emailSnapshot.size > 0) {
        const primerDocumento = emailSnapshot.docs[0];
        // Acceder a todos los datos del documento
        const datosUsuario = primerDocumento.data();
        setTempUser(datosUsuario);
        return;
      } else {
        await ToastError.fire({
          icon: "error",
          title: `No se encontro un usuario con ese ${criteriaChosen}`,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Ups!",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  const handleContact = (e: { target: { value: SetStateAction<string> } } | DocumentData) => {
    dispatch(setContact(e.target.value));
  };

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchedBy(e.target.value)
  }

  return { contact,searchedBy, tempUser, handleContact,handleSearch, searchUser };
};

export default useAddContact;

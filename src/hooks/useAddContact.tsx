import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/Firebase";
import { Toast, ToastError } from "../shared/CustomAlert";
import Swal from "sweetalert2";

const useAddContact = () => {
  const [contact, setContact] = useState("");

  const searchUser = async (userData: string) => {
    try {
      const usersCollectionRef = collection(db, "users");
      const emailQuery = query(usersCollectionRef, where("email", "==", userData));
      const emailSnapshot = await getDocs(emailQuery);
      if (emailSnapshot.size > 0) {
        const primerDocumento = emailSnapshot.docs[0];

        // Acceder a todos los datos del documento
        const datosUsuario = primerDocumento.data();
        const { name, email, alias, cbu } = datosUsuario;
        await Toast.fire({
          icon: "info",
          title: `Desea agregar a este usuario? 
          ${name} ${email} ${alias} ${cbu}`,
        });
        return;
      } else {
        await ToastError.fire({
          icon: "error",
          title: `No se encontro un usuario con ese email`,
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

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  return { contact, handleContact, searchUser };
};

export default useAddContact;

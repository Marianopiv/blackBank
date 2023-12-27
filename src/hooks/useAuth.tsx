import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Toast } from "../shared/CustomAlert";
import { createAlias } from "../helper";
import { randomWords } from "../config/config";
import { userData } from "../interfaces/interfaces";

type CustomUser = Partial<User>;
const useAuth = () => {
  const [user, setUser] = useState<CustomUser>({ displayName: "", email: "", photoURL: "" });
  const [, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const createUser = async (userData: userData) => {
    try {
      const usersCollectionRef = collection(db, "users");
      const emailQuery = query(usersCollectionRef, where("email", "==", userData.email));
      const emailSnapshot = await getDocs(emailQuery);
      if (emailSnapshot.size === 0) {
        const collectionRef = collection(db, `users`);
        await addDoc(collectionRef, userData);
        await Toast.fire({
          icon: "success",
          title: "Ingreso satisfactorio",
        });
        return;
      } else {
        await Toast.fire({
          icon: "success",
          title: `Bienvenido ${userData.name} ya ingresaste previamente`,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Ups!",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      navigate(-1);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setIsAuthenticated(true);
      createUser({
        name: result.user.displayName,
        email: result.user.email,
        cbu: createAlias(randomWords, 22),
        alias: createAlias(randomWords, 3),
      });
    } catch (error) {
      console.log("Error en la autenticación", error);
    }
  };

  const logOut = () => {
    setUser({ displayName: "", email: "", photoURL: "" });
  };

  return { createUser, logOut, signInWithGoogle, setUser, user };
};

export default useAuth;

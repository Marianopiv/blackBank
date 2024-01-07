import { createContext, useEffect } from "react";
import { GlobalContextProps, Store } from "../interfaces/interfaces";
import useAuth from "../hooks/useAuth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { setTotalUsers } from "../slices/usersSlice";
import { setTotalTransferences } from "../slices/transferencesSlice";

export const GlobalContext = createContext<GlobalContextProps>({
  logOut: () => "",
  signInWithGoogle: () => Promise.resolve(),
  setTransferences: () => "",
  handleAddToAgenda: () =>Promise.resolve(),
  user: { displayName: "", email: "" },
  totalUsers: [],
  transferences: [],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalProvider = ({ children }: any) => {
  const { logOut, signInWithGoogle, user } = useAuth();
  const { totalUsers } = useSelector((store: Store) => store.users);
  const { transferences } = useSelector((store: Store) => store.transferences);

  const dispatch = useDispatch();

  const handleAddToAgenda = async (values: unknown) => {

    try {
      // Assuming you have a "lotteries' collection
      const agenda = collection(db, "users");

      // Create a new document in the 'lotteries' collection
      const data = await addDoc(agenda, values); // Assuming values contains the necessary data for the new document

      // Use the reference of the newly created document to access the "numbers" subcollection
      const agendaSub = collection(agenda, data.id, "agenda");

      // Add documents to the 'numbers' subcollection
      await addDoc(agendaSub,values);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const collectionRef = collection(db, "users");

    // Subscribe to collection updates using onSnapshot
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        name: doc.data().name,
        email: doc.data().email,
        cbu: doc.data().cbu,
        alias: doc.data().alias,
        ...doc.data(),
      }));
      dispatch(setTotalUsers(updatedData));
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const collectionRef = collection(db, "transferences");

    // Subscribe to collection updates using onSnapshot
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.data().id,
        status: doc.data().status,
        payer: doc.data().payer,
        receiver: doc.data().receiver,
        date: doc.data().date,
        amount: doc.data().amount,
        ...doc.data(),
      }));
      dispatch(setTotalTransferences(updatedData));
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GlobalContext.Provider value={{ handleAddToAgenda,logOut, signInWithGoogle, user, totalUsers, transferences }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

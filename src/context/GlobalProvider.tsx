import { createContext, useEffect } from "react";
import { GlobalContextProps, Store } from "../interfaces/interfaces";
import useAuth from "../hooks/useAuth";
import { DocumentData, addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { setTotalUsers } from "../slices/usersSlice";
import { setTotalTransferences } from "../slices/transferencesSlice";

export const GlobalContext = createContext<GlobalContextProps>({
  logOut: () => "",
  signInWithGoogle: () => Promise.resolve(),
  setTransferences: () => "",
  handleAddToAgenda: () => Promise.resolve(),
  user: { displayName: "", email: "" },
  totalUsers: [],
  transferences: [],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalProvider = ({ children }: any) => {
  const { logOut, signInWithGoogle, user } = useAuth();
  const { transferences } = useSelector((store: Store) => store.transferences);

  const dispatch = useDispatch();

  const handleAddToAgenda = async (values: unknown) => {
    const usersCollectionRef = collection(db, "users");
    const emailQuery = query(usersCollectionRef, where("email", "==", user.email));
    const emailSnapshot = await getDocs(emailQuery);
    const docChange = emailSnapshot._snapshot.docChanges[0];
    // Accede al id dentro del documento
    const docId = docChange.doc.key.path.segments[6];
    try {
      const userDocRef = doc(db, "users", docId);

      // Use the reference of the existing user document to access the "agenda" subcollection
      const agendaSub = collection(userDocRef, "agenda");

      // Add a document to the 'agenda' subcollection
      await addDoc(agendaSub, values);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    const emailQuery = query(usersCollectionRef, where("email", "==", user.email));

    const fetchData = async () => {
      try {
        const emailSnapshot = await getDocs(emailQuery);
        const docChange = emailSnapshot._snapshot.docChanges[0];
        const docId = docChange.doc.key.path.segments[6];

        const userDocRef = doc(db, "users", docId);
        const agendaSub = collection(userDocRef, "agenda");

        // Subscribe to updates in the 'agenda' subcollection using onSnapshot
        const unsubscribe = onSnapshot(agendaSub, (snapshot) => {
          const updatedData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(setTotalUsers(updatedData));
        });

        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email, dispatch]);
  useEffect(() => {
    const collectionRef = collection(db, "transferences");

    // Subscribe to collection updates using onSnapshot
    const unsubscribe = onSnapshot(query(collectionRef, orderBy("date", "desc")), (snapshot) => {
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

  return (
    <GlobalContext.Provider value={{ handleAddToAgenda, logOut, signInWithGoogle, user, transferences }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

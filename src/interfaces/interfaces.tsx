import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { IconType } from "react-icons";


export interface publicServicesObj  {
  type:string,
  Icon:IconType,
  color:string
}

export interface TransferenceObject {
  id: string;
  status: string;
  payer: string;
  date: string;
  amount: number;
  receiver: string;
}

export interface Card {
  type: string;
  number: string;
  amount: number;
}

export interface Store {
  users: {
    users: userData[];
  };
  transferences: {
    transferences: TransferenceObject[];
    transferenceObject: TransferenceObject;
  };
  cards: {
    toogleModal: boolean;
    cards: Card[];
    newCard: Card;
  };
}

export interface userData {
  name: string;
  email: string;
}

export interface GlobalContextProps {
  logOut: () => void;
  signInWithGoogle: () => Promise<void>;
  handleAddToAgenda:(userData:DocumentData)=>Promise<void>;
  setTransferences: () => void;
  user: Partial<User>;
  totalUsers: userData[];
  transferences: TransferenceObject[];
}

import { User } from "firebase/auth";

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
  setTransferences: () => void;
  user: Partial<User>;
  totalUsers: userData[];
  transferences: TransferenceObject[];
}

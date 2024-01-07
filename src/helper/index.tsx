import moment from "moment";
import { TransferenceObject } from "../interfaces/interfaces";

export const checkIfTitle = (value: string) =>
  value === "id" || value === "status" || value === "payer" || value === "requestDate" || value === "amount";

export const checkStatus = (value: string) =>
  value === "pending" ? "text-blue-500" : value === "success" ? "text-green-500" : value === "failed" ? "text-red-500" : "";

export const checkTypeOfData = (value: string, index: number) => index === 5 && value !== "amount";

export const checkIfStatus = (value: string) => value === "pending" || value === "success" || value === "failed";

//Con este array, lo que hacemos es el array de transferences, lo reducimos,
//En ese reduce, primero hago un filter para que no mne muestre los valores: ni los failed, ni success, ni pending
//Luego con el if chequeo si el currArray tiene alguno que incluya el action.payload. Ambos retornan booleano,
// es un booleano dentro de un booleano.
export const checkifDataExists = (arr: TransferenceObject[] | never, actionPayload: string) =>
  arr.reduce((acc, curr: TransferenceObject | never) => {
    const currToArray = Object.values(curr).filter((value) => value !== "failed" && value !== "success" && value !== "pending");
    if (currToArray.some((value) => value.toString().toLowerCase().includes(actionPayload.toLowerCase()))) {
      acc.push(curr);
    }
    return acc;
  }, []);

export const createId = (index: number, amount: number) => `${index}${amount}`;

export const createAlias = (randomWords: string[], vueltas: number) => {
  return randomWords.reduce((acc: string, curr: string | number, index) => {
    const alias = acc + randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase() + (index > 1 ? "" : ".");
    const cbu = acc + Math.floor(Math.random() * randomWords.length);
    if (index < vueltas && vueltas === 3) {
      acc = alias;
    }
    if (acc.length < vueltas && vueltas === 22) {
      acc = cbu;
    }
    return acc;
  }, "");
};

export const convertToDigits = (number: string) => {
  number = number.slice(0, 4) + "-" + number.slice(4, 8) + "-" + number.slice(8, 18);
  return number;
};

export const getBalance = (arr: TransferenceObject[], userName: string) => {
  const result = arr
    .filter((transference) => transference.receiver === userName || transference.payer === userName)
    .reduce((acc, curr) => {
      if (userName === curr.payer && userName !== curr.receiver) {
        acc = Number(acc) - Number(curr.amount);
      } else {
        acc = Number(acc) + Number(curr.amount);
      }
      return acc;
    }, 0);
  return result;
};

export const sortTransferences = (array: TransferenceObject[]) => {
  return array.sort((a, b) => {
    const dateA = moment(a.date, "DD/MM/YYYY").valueOf();
    const dateB = moment(b.date, "DD/MM/YYYY").valueOf();

    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    }
  });
};

export const generateNumberArrays = (number: number) => {
  /* let arr = [];
  let number = 0;
  if (number < 20) {
    arr.push(number);
    generateNumberArrays(number);
  } else {
    return arr;
  } */

  for (let index = 0; index < number; index++) {
    debugger;
    let element = index
    console.log(element)    
  }

};

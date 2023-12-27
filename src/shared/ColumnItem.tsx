type Props = {
  item:
    | {
        id: string;
        status: string;
        payer: string;
        requestDate: string;
        amount: number;
      }
    | object;
};
import { checkIfStatus, checkIfTitle, checkStatus, checkTypeOfData } from "../helper/index.tsx";

const ColumnItem = ({ item }: Props) => {
  return (
    <>
      {Object.values(item)
        .slice(0, 6)
        .map((value, index: number) => (
          <p key={index} className={`w-1/6 capitalize text-left mb-2 ${checkIfTitle(value) ? "font-bold" : `${checkStatus(value)}`}`}>
            {checkTypeOfData(value, index) ? `$${value}` : checkIfStatus(value) ? `• ${value}` : value}
          </p>
        ))}
    </>
  );
};

export default ColumnItem;

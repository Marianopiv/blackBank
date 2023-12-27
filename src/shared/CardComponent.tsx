import { Card, CardHeader, Divider } from "@nextui-org/react";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

type Props = {
  type: string;
  number: string;
  amount: number;
};

const CardComponent = ({ type, number, amount }: Props) => {
  return (
    <Card className="py-4 bg-gradient-to-tr from-black to-gray-500 mt-10 text-white h-44 shadow-2xl" style={{ minWidth: "300px" }}>
      <CardHeader className="flex-col items-start justify-around h-full">
        <div className="flex w-full justify-between px-4">
          <p className="capitalize">{type}</p>
          <p className="">{number}</p>
        </div>
        <Divider className="w-full" />
        <div className="flex items-center  w-full justify-between px-4">
          <p>${amount}</p>
          {number.startsWith("5") ? <FaCcMastercard className="text-white text-4xl" /> : <RiVisaLine className="text-white text-4xl" />}
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardComponent;

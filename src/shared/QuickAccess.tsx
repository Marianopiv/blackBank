import { BsFileSpreadsheet } from "react-icons/bs";
import AddMoney from "../components/AddMoney";

type Props = {
  action: () => void;
  text: string;
};

const QuickAccess = ({ action, text }: Props) => {
  return (<>
    <div onClick={action} className="flex flex-col items-center gap-2">
      <BsFileSpreadsheet className="text-3xl text-green-600" />
      <p className="text-xs capitalize">{text}</p>
      
    {text==="receive money"&&<AddMoney/>}
    </div>
    </>
  );
};

export default QuickAccess;

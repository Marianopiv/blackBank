import { IconType } from "react-icons";
import AddPayment from "../components/AddPayment";

type Props = {
    type:string,
    color:string,
    Icon:IconType
};
const CardPublicService = (props: Props) => {
    const {type,color,Icon} = props
  return (
    <div>
      <div
        className={`flex flex-col items-center gap-4 shadow-large hover:border hover:border-black p-10 hover:cursor-pointer rounded-md bg-transparent ${color}`}
      >
        <Icon className={`text-6xl`} />
        <p className="capitalize">{type}</p>
        <AddPayment service={props} />
      </div>
    </div>
  );
};

export default CardPublicService;

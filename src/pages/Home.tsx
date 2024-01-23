import { Card, TransferenceObject } from "../interfaces/interfaces";
import CardComponent from "../shared/CardComponent";
import QuickAccess from "../shared/QuickAccess";
import Transference from "../shared/Transference.tsx";
import { quickAccesses } from "../config/config.jsx";
import Update from "../components/Update.js";
import { useNavigate } from "react-router-dom";
import AddElement from "../components/AddElement.tsx";
import useHome from "../hooks/useHome.tsx";
import "swiper/css";
import "swiper/css/virtual";
import { generateNumberArrays, getBalance } from "../helper/index.tsx";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider.tsx";

const Home = () => {
  const navigate = useNavigate();
  const { cards } = useHome();
  const { transferences, user } = useContext(GlobalContext);

  generateNumberArrays(10)
  return (
    <div className="bg-white w-screen h-screen flex p-4 font-bold flex-col items-start gap-10 flex-wrap">
      <div className="flex flex-col items-start">
        <h4 className="">Quick Access</h4>
        <div className="flex gap-14 mt-10 items-center pl-4 hover:cursor-pointer  ">
          {quickAccesses.map((access: string, index: number) => (
            <QuickAccess key={index} action={access === "send money" ? () => navigate("/transferences") : ()=>""} text={access} />
          ))}
        </div>
      </div>
      <h4 className="">My Wallet</h4>
      <div className="flex gap-10">
        <h3>Balance</h3>
        <p>{getBalance(transferences, user?.displayName)}</p>
      </div>
      <div className="flex items-center gap-20">
        <div className="flex gap-4 items-center max-w-7xl overflow-x-auto px-10 ">
          {cards.map((card: Card, index: number) => (
            <CardComponent key={`${index} ${card.number}`} type={card.type} number={card.number} amount={card.amount} />
          ))}
        </div>
        <AddElement />
      </div>
      <div className="flex flex-col items-start gap-4 ">
        <h4>Recent transferences</h4>
        {transferences.slice(0, 4).map((transference: TransferenceObject, index: number) => (
          <Transference
            key={index}
            payer={transference.payer}
            date={transference.date}
            amount={transference.amount}
            status={transference.status}
          />
        ))}
      </div>
      <div className="flex items-end h-5/6 mt-10">
        <Update />
      </div>
      {/* <LineChart/> */}
    </div>
  );
};

export default Home;

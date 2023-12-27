import { FaMagnifyingGlass } from "react-icons/fa6";
import ColumnItem from "../shared/ColumnItem";
import { statusOfTransference, transferenceTitles } from "../config/config";
import useTransferences from "../hooks/useTransferences";
import { useEffect } from "react";
import AddElement from "../components/AddElement";

const Transferences = () => {
  const { filterByStatus, filterTransference, transferences } = useTransferences();
  useEffect(() => {}, [transferences]);

  return (
    <div className="text-black w-full h-screen bg-white p-3">
      <h3 className="text-2xl font-bold text-left p-3">Recent Requests</h3>
      <div className="flex items-center p-3 gap-4">
        <FaMagnifyingGlass />
        <input onChange={filterTransference} className="w-1/4" type="text" placeholder="Search" />
        <input className="w-1/4" type="date" name="" id="" />
        <select onChange={filterByStatus} className="w-1/4" name="Status" id="">
          <option value={""}>Status</option>
          {statusOfTransference.map((status, index) => (
            <option key={index}>{status}</option>
          ))}
        </select>
        <AddElement forTransference={true} />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <ColumnItem item={transferenceTitles} />
        </div>
        <div className="flex flex-wrap">
          {transferences.map((transference, index) => (
            <ColumnItem key={index} item={transference} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transferences;

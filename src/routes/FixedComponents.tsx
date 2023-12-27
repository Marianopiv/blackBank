import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const FixedComponents = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default FixedComponents;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Transferences from "../pages/Transferences";
import GlobalProvider from "../context/GlobalProvider";
import PayServices from "../pages/PayServices";

const Rutas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <NavBar />
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transferences" element={<Transferences />} />
          <Route path="/pay-services" element={<PayServices />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rutas;

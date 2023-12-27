import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { BsBank2 } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { navItems } from "../config/config";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { logOut, user } = useContext(GlobalContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <Navbar className="w-screen bg-black text-white decoration-none flex justify-around">
      <NavbarBrand onClick={user.email ? () => navigate("/home") : () => navigate("/")} className="flex gap-2 w-1/3 hover:cursor-pointer">
        <BsBank2 className="w-10 h-10" />
        <p className="font-bold text-inherit">BlackBank</p>
      </NavbarBrand>
      <NavbarContent className="w-1/3 hidden sm:flex gap-4 ">
        {navItems.map(({ text, to }, index) => (
          <NavbarItem key={`${index}${text}`}>
            <Link onClick={user.email ? () => navigate(to) : () => navigate("/")} className="capitalize text-white hover:cursor-pointer">
              {text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="w-1/3">
        {user.email && (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link onClick={handleLogout} className="text-white" href="#">
                Logout
              </Link>
            </NavbarItem>
            <NavbarItem className="flex items-center gap-2">
              <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="" />
              <p className="text-white">{user?.email}</p>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

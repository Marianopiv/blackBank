import CardSignIn from "../components/CardSignIn";
import { BsBank2 } from "react-icons/bs";
const SignIn = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-screen mt-60">
      <BsBank2 className="w-10 h-10 text-white" />
      <h1 className="text-white text-2xl">BlackBank</h1>
      <CardSignIn />
    </div>
  );
};

export default SignIn;

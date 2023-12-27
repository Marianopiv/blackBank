import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export default function CardSignIn() {
  const navigate = useNavigate();

  const { signInWithGoogle } = useContext(GlobalContext);

  const handleAuth = async () => {
    await signInWithGoogle();
    navigate("/home");
  };

  return (
    <Card className="max-w-[400px] w-80">
      <CardHeader className="flex justify-center gap-3">
        <p>Sign In with google</p>
      </CardHeader>
      <CardBody>
        <Button onClick={handleAuth} className="rounded-sm" endContent={<BsGoogle className="text-xs mt-0.5" />} color="success">
          Sign In
        </Button>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

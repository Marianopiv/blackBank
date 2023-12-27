import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

const Update = () => {
  return (
    <Card className="max-w-[300px] bg-black text-white">
      <CardHeader className="flex gap-3">
        <h2 className="text-3xl">Update to Pro</h2>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4 pb-10">
        <p>$29,99 / month</p>
        <p>Open more possibilities of your service with a pro account. Gain access to an array of enhanced features and much more.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button className="bg-blue-400 text-white shadow-lg text-md w-full h-12 rounded-sm uppercase flex">update my plan</Button>
      </CardFooter>
    </Card>
  );
};

export default Update;

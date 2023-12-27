import { Card, CardHeader, Image } from "@nextui-org/react";

type Props = {
  payer: string;
  date: string;
  amount: number;
  status: string;
};

export default function Transference({ payer, date, amount, status }: Props) {
  return (
    <Card className="w-[600px]">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <p className="text-md w-32">{payer}</p>
        </div>
        <p className="text-small text-default-500">{date}</p>
        <div className="flex gap-2 w-10 capitalize">
          <p>•</p>
          <p className="">{status}</p>
        </div>
        <p>${amount}</p>
      </CardHeader>
    </Card>
  );
}

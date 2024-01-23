import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};
const ContainerWrapper = ({ children, title }: Props) => {
  return (
    <div className="bg-white h-screen w-screen p-10">
      <h3 className="text-2xl font-bold text-left capitalize">{title}</h3>
      {children}
    </div>
  );
};

export default ContainerWrapper;

import React from "react";

type Props = { className?: string; label: string; text: string };

const TextField = ({ className = "", label, text }: Props) => {
  return (
    <div className="flex gap-5 mt-2 mx-auto">
      <span className="w-10 capitalize">{label}:</span>
      <p className={className}>{text}</p>
    </div>
  );
};

export default TextField;

import React from "react";

type Props = {
  isOutlineBtn: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ isOutlineBtn, ...props }: Props) => {
  return isOutlineBtn ? (
    <button
      {...props}
      className="w-full text-center p-4 rounded-xl border-2 border-gray-700 mt-5"
    ></button>
  ) : (
    <button
      {...props}
      className="w-full text-center p-4 rounded-xl bg-red-600 shadow-xl mt-5 "
    ></button>
  );
};

export default Button;

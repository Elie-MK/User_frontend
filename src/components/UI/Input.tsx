import { ReactElement } from "react";

type Props = {
  LeftIcon: ReactElement;
  RightIcon?: ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ LeftIcon, RightIcon, ...props }: Props) => {
  return (
    <div className="w-full flex items-center border-2 border-gray-500  rounded-lg mb-5">
      {LeftIcon}
      <input
        className="py-3 mx-2 w-full outline-none placeholder:font-semibold text-lg"
        {...props}
      />
      {RightIcon}
    </div>
  );
};

export default Input;

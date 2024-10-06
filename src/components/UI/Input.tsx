import { ReactElement } from "react";

type Props = {
  LeftIcon: ReactElement;
  RightIcon?: ReactElement;
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ LeftIcon, RightIcon, isError, ...props }: Props) => {
  return (
    <div
      className={`w-full flex items-center border-2  ${
        isError ? "border-red-600" : "border-gray-500"
      }  rounded-lg mb-5`}
    >
      {LeftIcon}
      <input
        className="py-3 mx-2 w-full outline-none placeholder:font-semibold text-lg invalid:border-red-600"
        {...props}
      />
      {RightIcon}
    </div>
  );
};

export default Input;

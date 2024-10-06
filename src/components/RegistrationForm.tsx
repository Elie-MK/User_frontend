import React from "react";
import Input from "./UI/Input";
import { FaAt, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Checkbox from "./UI/Checkbox";
import Button from "./UI/Button";

type Props = {};

const RegistrationForm = (props: Props) => {
  return (
    <form className="mt-4">
      <Input
        placeholder="Full Name"
        LeftIcon={<FaUserCircle className="ml-2" color="gray" size={25} />}
      />
      <Input
        placeholder="Email address"
        LeftIcon={<FaAt className="ml-2" color="gray" size={25} />}
      />
      <Input
        placeholder="Password"
        type="password"
        LeftIcon={
          <RiLockPasswordFill className="ml-2" color="gray" size={25} />
        }
        RightIcon={<FaEyeSlash className="mr-2" color="gray" size={25} />}
      />
      <div className="flex items-center gap-3">
        <Checkbox />
        <label className="text-lg font-semibold text-gray-600">
          I agree with <span className="text-red-600">Terms</span> and{" "}
          <span className="text-red-600">Privacy</span>
        </label>
      </div>
      <Button type="button" isOutlineBtn={false}>
        <span className="text-white text-lg ">SIGN UP</span>
      </Button>
      <Button type="button" isOutlineBtn={true}>
        <span className="flex justify-center">
          <span className="text-gray-600 text-lg flex items-center gap-3 ">
            <img
              className="w-5 h-5"
              src="../../assets/logos/google-logo.webp"
            />
            <span>Sign Up with Google</span>
          </span>
        </span>
      </Button>
    </form>
  );
};

export default RegistrationForm;

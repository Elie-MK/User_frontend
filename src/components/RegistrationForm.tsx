import Input from "./UI/Input";
import { FaAt, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Checkbox from "./UI/Checkbox";
import Button from "./UI/Button";
import { IoEyeSharp } from "react-icons/io5";
import { IUserForm } from "../interfaces/IUserForm";
import { IInputsChange } from "../interfaces/IInputsChange";
import { IErrors } from "../interfaces/IValidationResult";
import ErrorItem from "./ErrorItem";

type Props = {
  togglePasswordVisibility: () => void;
  submitForm: () => void;
  passwordState: boolean;
  inputsValue: IUserForm;
  valueChange: (change: IInputsChange) => void;
  errors?: IErrors;
};

const RegistrationForm = (props: Props) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.submitForm();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <Input
        value={props.inputsValue.name}
        isError={props.errors?.name && props.errors.name.length >= 1}
        onChange={(e) =>
          props.valueChange({ InputName: "name", value: e.target.value })
        }
        placeholder="Full Name"
        LeftIcon={<FaUserCircle className="ml-2" color="gray" size={25} />}
      />
      {props.errors?.name && props.errors.name.length >= 1 && (
        <ErrorItem errors={props.errors.name} />
      )}

      <Input
        value={props.inputsValue.email}
        isError={props.errors?.email && props.errors.email.length >= 1}
        onChange={(e) =>
          props.valueChange({ InputName: "email", value: e.target.value })
        }
        type="email"
        placeholder="Email address"
        LeftIcon={<FaAt className="ml-2" color="gray" size={25} />}
      />
      {props.errors?.email && props.errors.email.length >= 1 && (
        <ErrorItem errors={props.errors.email} />
      )}
      <Input
        value={props.inputsValue.password}
        isError={props.errors?.password && props.errors.password.length >= 1}
        placeholder="Password"
        type={props.passwordState ? "text" : "password"}
        onChange={(e) =>
          props.valueChange({ InputName: "password", value: e.target.value })
        }
        LeftIcon={
          <RiLockPasswordFill className="ml-2" color="gray" size={25} />
        }
        RightIcon={
          <button type="button" onClick={props.togglePasswordVisibility}>
            {props.passwordState ? (
              <IoEyeSharp className="mr-2" color="gray" size={25} />
            ) : (
              <FaEyeSlash className="mr-2" color="gray" size={25} />
            )}
          </button>
        }
      />
      {props.errors?.password && props.errors.password.length >= 1 && (
        <ErrorItem errors={props.errors.password} />
      )}
      <div className="flex items-center gap-3">
        <Checkbox />
        <label className="text-lg font-semibold text-gray-600">
          I agree with <span className="text-red-600">Terms</span> and{" "}
          <span className="text-red-600">Privacy</span>
        </label>
      </div>
      <Button isOutlineBtn={false}>
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

import { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { IUserForm } from "../interfaces/IUserForm";
import { IInputsChange } from "../interfaces/IInputsChange";
import { validateForm } from "../utils/validationInputs";
import { IErrors } from "../interfaces/IValidationResult";

function Registration() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formDatas, setFormDatas] = useState<IUserForm>({
    name: "",
    email: "",
    password: "",
  });
  const [isError, setSetIsError] = useState<IErrors>();

  const handleInputsChange = ({ InputName, value }: IInputsChange) => {
    setFormDatas((prevState) => ({
      ...prevState,
      [InputName]: value,
    }));

    // Remove errors related to the specific input when the user types
    setSetIsError((prevError) => ({
      ...prevError,
      [InputName]: [],
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = () => {
    const { isValid, errors } = validateForm(formDatas);

    if (isValid) {
      console.log("Form Submitted");
    } else {
      setSetIsError(errors);
    }
  };
  return (
    <div className="flex justify-center pb-10">
      <div className="md:w-2/4 ">
        <h1 className="font-bold text-2xl text-gray-600">Create Account</h1>
        <RegistrationForm
          inputsValue={formDatas}
          valueChange={handleInputsChange}
          submitForm={handleSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
          passwordState={showPassword}
          errors={isError}
        />
        <div className="mt-10">
          <span className="text-xl text-gray-600 font-semibold">
            Already have an account?{" "}
            <button type="button" className="text-red-600">
              Log In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registration;

import { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { IUserForm } from "../interfaces/IUserForm";
import { IInputsChange } from "../interfaces/IInputsChange";
import { validateForm } from "../utils/validationInputs";
import { IErrors } from "../interfaces/IValidationResult";
import axios from "axios";
import { DEFAULT_API_URL } from "../utils/constants";

function Registration() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [formDatas, setFormDatas] = useState<IUserForm>({
    name: "",
    email: "",
    password: "",
    isAgreeTerm: false,
  });
  const [isError, setSetIsError] = useState<IErrors>();

  /**
   * Updates the form data when an input field changes.
   * Also removes the error message related to the specific input.
   * @param {IInputsChange} param0 - Object containing the input field name and its new value.
   */
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

  /**
   * Toggles the visibility of the password field (show/hide password).
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  /**
   * Validates the form data and, if valid, submits the registration form.
   * Sends a POST request to the server and handles the response or error.
   * Updates the form error state if validation fails.
   */
  const handleSubmit = async () => {
    const { isValid, errors } = validateForm(formDatas);
    if (isValid) {
      setIsRegistering(true);
      try {
        const response = await axios.post(DEFAULT_API_URL, formDatas);
        if (response.status == 201) {
          setIsRegistering(false);
          console.log(response.data);
          handleResetForm();
        }
      } catch (error) {
        console.log(error);
        setIsRegistering(false);
      }
    } else {
      setSetIsError(errors);
    }
  };

  /**
   * Resets the form to its initial state by clearing all input fields.
   */
  const handleResetForm = () => {
    setFormDatas({
      name: "",
      email: "",
      password: "",
      isAgreeTerm: false,
    });
  };

  return (
    <div className="flex justify-center pb-10">
      <div className="md:w-2/6 ">
        <h1 className="font-bold text-2xl text-gray-600">Create Account</h1>
        <RegistrationForm
          inputsValue={formDatas}
          valueChange={handleInputsChange}
          submitForm={handleSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
          passwordState={showPassword}
          errors={isError}
          isRegistering={isRegistering}
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

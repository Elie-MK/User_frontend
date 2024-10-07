import { IUserForm } from "../interfaces/IUserForm";
import { IValidationResult } from "../interfaces/IValidationResult";

export const validateForm = (formData: IUserForm): IValidationResult => {
  const { name, email, password, isAgreeTerm } = formData;
  const errors: IValidationResult["errors"] = {};

  // Validate Name
  if (!name) {
    errors.name = errors.name || [];
    errors.name.push("Name is mandatory.");
  } else if (name.length > 50) {
    errors.name = errors.name || [];
    errors.name.push("Name must not exceed 50 characters.");
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = errors.email || [];
    errors.email.push("Email is mandatory.");
  } else if (!emailPattern.test(email)) {
    errors.email = errors.email || [];
    errors.email.push("Email is not in a valid format.");
  }

  // Validate Password
  const passwordPattern = /^[a-zA-Z0-9]+$/; // Only alphabets and numbers
  if (!password) {
    errors.password = errors.password || [];
    errors.password.push("Password is mandatory.");
  } else if (password.length < 8) {
    errors.password = errors.password || [];
    errors.password.push("Password must be at least 8 characters long.");
  } else if (!passwordPattern.test(password)) {
    errors.password = errors.password || [];
    errors.password.push("Password must only contain alphabets and numbers.");
  }

  // Validate isAgreeTerm
  if (!isAgreeTerm) {
    errors.isAgreeTerm = errors.isAgreeTerm || [];
    errors.isAgreeTerm.push("You must agree to the terms and privacy.");
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
  };
};

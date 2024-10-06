export interface IValidationResult {
  isValid: boolean;
  errors: IErrors;
}

export interface IErrors {
  name?: string[];
  email?: string[];
  password?: string[];
}

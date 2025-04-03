//* Form Validation
export interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  message?: string;
  messageRequired?: string;
  messageLength?: string;
  messageInvalid?: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}
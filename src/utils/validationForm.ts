/**
 * Generic validation function
 * @param {Object} values - The form values to validate
 * @param {Object} rules - Validation rules for the form fields
 * @returns {Object} - Errors object with field names as keys and error messages as values
 */

import { ValidationRules } from "../types/rulesValidationForm";

export const validateForm = (
  values: Record<string, any>,
  rules: Record<string, ValidationRules>
): Record<string, string> => {
  const errors: Record<string, string> = {};

  for (const [field, rule] of Object.entries(rules)) {
    const value = values[field];

    console.log({ value });
    
    if (rule.required && !value) {
      console.log(`entered in required values`);
      
      errors[field] = rule.messageRequired || `El ${field} es requerido.`;
    }
    
    if (rule.pattern && value && !rule.pattern.test(value)) {
      
      errors[field] = rule.messageInvalid || `El ${field} es invalido`;
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] =
        rule.messageLength ||
        `El ${field} debe tener al menos ${rule.minLength} caracteres.`;
    }

    if (rule.maxLength && value && value.length > rule.maxLength) {
      errors[field] =
        rule.message ||
        `${field} debe tener máximo ${rule.maxLength} caracteres.`;
    }
    // if (rule.enum && !rule.enum.includes(value)) {
    //   errors[field] =
    //     rule.message || `${field} debe ser uno de estos: ${rule.enum.join(", ")}.`;
    // }
  }

  return errors;
};

import { reactive } from "@vue/reactivity";
import { useValidator } from "./useValidator";

const errors: Record<string, any> = reactive({});

export default function useFormValidation() {
  const { isEmpty, isNum, minLength, isEmail } = useValidator();

  const validateNameField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 4);
  };

  const validateEmailField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };

  const validatePhoneField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isNum(fieldName, fieldValue);
  };

  const validatePasswordField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 8);
  };

  return {
    errors,
    validateNameField,
    validateEmailField,
    validatePhoneField,
    validatePasswordField,
  };
}

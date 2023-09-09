import { reactive } from "@vue/reactivity";
import { useValidator } from "./useValidator";
const errors: Record<string, any> = reactive({});

export default function useFormValidation() {
  const { isEmpty, minLength, isEmail } = useValidator();
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
  return { errors, validateNameField, validateEmailField };
}

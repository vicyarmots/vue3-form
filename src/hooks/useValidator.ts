export const useValidator = () => {
  const isEmpty = (fieldName: string, fieldValue: string) => {
    return !fieldValue ? "The " + fieldName + " field is required" : "";
  };

  const isNum = (fieldName: string, fieldValue: string) => {
    let isNum = /^\d+$/.test(fieldValue);
    return !isNum ? "The " + fieldName + " field only have numbers" : "";
  };

  const minLength = (fieldName: string, fieldValue: string, min: number) => {
    return fieldValue.length < min
      ? `The ${fieldName} field must be atleast ${min} characters long`
      : "";
  };

  const isEmail = (fieldName: string, fieldValue: string) => {
    let reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !reg.test(fieldValue)
      ? "The input is not a valid " + fieldName + " address"
      : "";
  };
  return { isEmpty, isNum, minLength, isEmail };
};

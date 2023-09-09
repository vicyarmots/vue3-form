// input types
export interface InputProps {
  id?: string | number;
  type: "text" | "number" | "email" | "password" | "file" | "tel";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  autocomplete?: string;
  pattern?: string;
}

//button types
export interface ButtonProps {
  title: string;
  disabled?: boolean;
}

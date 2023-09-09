// input types
export interface InputProps {
  type: "text" | "number" | "email" | "password" | "file";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
}

//button types
export interface ButtonProps {
  title: string;
  disabled?: boolean;
}

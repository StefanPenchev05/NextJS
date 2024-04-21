export type Tooltip = {
  children: React.ReactNode;
  text: string;
  className?: string;
};

export type TextInput = {
  type: string;
  name: string;
  placeholder: string;
  value: string | undefined;
  setValue: (value: string) => void;
  error?: string;
  clearError?: () => void;
  inputStyle?: string;
  inputTitleStyle?: string;
};

export type Form = {
  children: React.ReactNode;
  onError: <T>(error: T) => void;
  onSuccess: <T>(data: T | undefined) => void;
  api: string;
  buttonStyle?: string;
  buttonPlaceholder: string;
};

export type SubmitButton = {
  placeholder: string;
  className?: string;
};

export type CheckBox = {
  option: string;
  name: string;
  checked: boolean;
  setCheck: (checked: boolean) => void;
  inputClassName?: string;
  labelClassName?: string;
  className?:string; 
};

import { useState, ChangeEvent, FocusEvent } from "react";

interface UseInputProps {
  required: boolean;
}

interface UseInputReturn {
  value: string;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const useInput = ({ required }: UseInputProps): UseInputReturn => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  return {
    value,
    onBlur: (e: FocusEvent<HTMLInputElement>) => {
      if (!e.target.value && required) setError("Required field");
      else setError('');
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    error,
  };
};

export default useInput;
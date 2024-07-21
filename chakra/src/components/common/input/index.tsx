import {
  Box,
  Input as ChakraInput,
  FormErrorMessage,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  name: string;
  placeholder: string;
  value?: string;
  error?: string;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input = ({
  children,
  name,
  value,
  placeholder,
  error,
  type,
  onChange,
}: Props) => {
  const Component = type === "textarea" ? Textarea : ChakraInput;

  console.log("error", error);
  return (
    <Box>
      <Component
        name={name}
        value={value}
        placeholder={placeholder}
        errorBorderColor={"error.500"}
        onChange={onChange}
        type={type}
      >
        {children}
      </Component>
      {!!error && (
        <Text color="error.500" mt={2}>
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Input;

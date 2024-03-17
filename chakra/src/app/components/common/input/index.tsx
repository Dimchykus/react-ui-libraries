import { Box, Text, Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Control, Path, useController } from "react-hook-form";

interface Props<T extends InputProps> {
  control?: Control<T, any, T>;
  name: Path<T>;
  error?: string;
  children?: ReactNode;
}

const Input = <T extends InputProps>({
  children,
  error,
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { value, onChange, ref, onBlur },
    fieldState: { error },
  } = useController<T>({ control, name });

  return (
    <Box>
      <ChakraInput
        {...rest}
        value={value}
        onChange={onChange}
        inputRef={ref}
        onBlur={onBlur}
        errorBorderColor={"error.500"}
      >
        {children}
      </ChakraInput>
      {error && (
        <Text mt={3} textStyle={"h6"} color={"error.500"}>
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Input;

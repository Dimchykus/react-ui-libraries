import { TextFieldProps, Box, TextField } from "@mui/material";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface Props<T extends FieldValues> extends Omit<TextFieldProps, "error"> {
  control?: Control<T, any, T>;
  name: Path<T>;
}

const Input = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { value, onChange, ref, onBlur },
    fieldState: { error },
  } = useController<T>({ control, name });

  return (
    <Box>
      <TextField
        value={value}
        onChange={onChange}
        inputRef={ref}
        onBlur={onBlur}
        helperText={error?.message}
        error={!!error?.message}
        {...rest}
      />
    </Box>
  );
};

export default Input;

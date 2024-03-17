import {
  Box,
  InputProps,
  Input as MantineInput,
  MantineSize,
  Textarea,
} from "@mantine/core";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface Props {
  placeholder: string;
  type?: string;
  size?: (string & {}) | MantineSize;
  value?: string;
  checked?: boolean;
  error?: string;
  onChange: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: React.FC<Props> = ({ error, ...props }) => {
  const Component = props.type === "textarea" ? Textarea : MantineInput;

  return (
    <Box>
      <Component {...props} />
      {error && <MantineInput.Error mt={8}>{error}</MantineInput.Error>}
    </Box>
  );
};

export default Input;

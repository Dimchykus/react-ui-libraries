import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import Input, { InputBaseStyles, InputSizes } from "./input";

console.log(Input);

const textareaBaseStyles = defineStyle({
  ...(InputBaseStyles.field && InputBaseStyles.field),
  minHeight: "8.75rem",
});

const Textarea = defineStyleConfig({
  baseStyle: textareaBaseStyles,
  sizes: {
    base: {
      px: 6,
      py: 4,
    },
  },
  defaultProps: {
    size: "base",
  },
});

export default Textarea;

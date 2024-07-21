import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import typography from "./typography";
import Heading from "./heading";

export const InputBaseStyles = defineStyle({
  field: {
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
    bg: "primary.white",
    color: "zinc.500",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "primary.black",
    width: "100%",
    outline: "none",
    ...Heading.sizes?.h6,
    fontWeight: "400",
    _hover: {
      bg: "zinc.100",
      borderColor: "primary.neutral",
      color: "primary.neutral",
    },
    _active: {
      bg: "zinc.100",
      borderColor: "primary.neutral",
      color: "primary.neutral",
    },
    _focus: {
      boxShadow:
        "0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.08)",
    },
    _disabled: {
      bg: "zinc.100",
      borderColor: "zinc.200",
      color: "zinc.300",
    },
    "&:not(:placeholder-shown)": {
      color: "primary.black",
      borderColor: "zinc.500",
    },
    "&[aria-invalid=true]": {
      borderColor: "error.500",
      color: "error.500",
    },
  },
});

export const InputSizes = defineStyle({
  base: {
    field: {
      px: "1.5rem",
      py: "1.125rem",
    },
  },
});

const Input = defineStyleConfig({
  baseStyle: InputBaseStyles,
  sizes: InputSizes,
  defaultProps: {
    size: "base",
  },
});

export default Input;

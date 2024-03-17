import { defineStyleConfig } from "@chakra-ui/react";

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: "4px",
      transition: "all 0.2s ease-in-out",
      bg: "primary.white",
      color: "zinc.500",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "primary.black",
      outline: "none",
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
  },
  sizes: {
    base: {
      field: {
        px: 6,
        py: 4,
      },
    },
  },
  defaultProps: {
    size: "base",
  },
});

export default Input;

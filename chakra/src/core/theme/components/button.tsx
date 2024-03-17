import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
    bg: "primary.black",
    color: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "primary.black",
    fontSize: "lg",
    _hover: {
      bg: "primary.neutral",
      borderColor: "primary.neutral",
    },
    _active: {
      bg: "primary.white",
      borderColor: "primary.neutral",
      color: "primary.black",
      path: {
        fill: "primary.black",
      },
    },
    ".chakra-button__icon": {
      marginLeft: 2,
      path: {
        fill: "primary.white",
      },
    },
  },
  sizes: {
    sm: {
      px: 4,
      py: 3,
    },
    md: {
      px: 5,
      py: 4,
    },
  },
  defaultProps: {
    size: "md",
  },
  variants: {
    contained: {
      bg: "primary.black",
      color: "white",
    },
    text: {
      bg: "none",
      color: "primary.black",
      p: 0,
      border: 0,
      h: "auto",
      _hover: {
        bg: "none",
        color: "primary.light",
        p: 0,
        border: 0,
        h: "auto",
      },
    },
  },
});

export default Button;

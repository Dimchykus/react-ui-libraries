import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  defaultProps: {
    size: "text",
  },
  sizes: {
    text: {
      fontSize: ["2xl", "6xl"],
      fontWeight: "400",
      lineHeight: "122",
      letterSpacing: "tight",
    },
    h1: {
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "122",
      letterSpacing: "tight",
    },
    h2: {
      fontSize: "3xl",
      fontWeight: "bold",
      lineHeight: "tall",
      letterSpacing: "tight",
    },
    h3: {
      fontSize: "2xl",
      fontWeight: "bold",
      lineHeight: "shorter",
      letterSpacing: "tight",
    },
    h4: {
      fontSize: "xl",
      fontWeight: "bold",
      lineHeight: "short",
      letterSpacing: "tight",
    },
    h5: {
      fontSize: "lg",
      fontWeight: "bold",
      lineHeight: "base",
      letterSpacing: "tight",
    },
    h6: {
      fontSize: "md",
      fontWeight: "bold",
      lineHeight: "tall",
      letterSpacing: "tight",
    },
  },
  variants: {
    outlined: {
      fontFamily: "sans-serif",
      "-webkit-text-fill-color": "white",
      "-webkit-text-stroke-width": "2px",
      "-webkit-text-stroke-color": "black",
    },
  },
});

export default Heading;

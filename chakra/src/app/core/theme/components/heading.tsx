import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    fontSize: ["28px", "48px"],
    fontWeight: "400",
    lineHeight: "122",
    letterSpacing: "-0.96px",
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

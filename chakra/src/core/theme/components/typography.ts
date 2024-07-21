import Heading from "./heading";

const typography = {
  paragraph1: {
    fontSize: "lg",
    fontWeight: "normal",
    lineHeight: "140",
    letterSpacing: "normal",
  },
  paragraph2: {
    fontSize: "md",
    fontWeight: "normal",
    lineHeight: "taller",
    letterSpacing: "normal",
  },
  paragraph3: {
    fontSize: "xs",
    fontWeight: "normal",
    lineHeight: "xl",
    letterSpacing: "normal",
  },
  button: {
    fontSize: "lg",
    fontWeight: "semibold",
    lineHeight: "base",
    letterSpacing: "normal",
  },
  button2: {
    fontSize: "md",
    fontWeight: "semibold",
    lineHeight: "tall",
    letterSpacing: "normal",
  },
  underlined: {
    fontSize: "lg",
    fontWeight: "normal",
    lineHeight: "base",
    letterSpacing: "tight",
    textDecoration: "underline",
  },
  ...Heading.sizes,
};

export default typography;

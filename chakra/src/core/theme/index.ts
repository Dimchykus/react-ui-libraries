import { extendBaseTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Heading from "./components/heading";
import Container from "./components/container";
import Input from "./components/input";
import Textarea from "./components/textarea";
import typography from "./components/typography";

const theme = extendBaseTheme({
  global: {
    body: {
      w: "100vw",
      mw: "100vw",
      overflowX: "hidden",
      bg: "primary.white",
    },
  },
  components: {
    Button: Button,
    Heading: Heading,
    Container: Container,
    Input: Input,
    Textarea: Textarea,
  },
  shadows: {
    md: "0 12px 42px -4px rgba(24, 39, 75, 0.12), 0 8px 18px -6px rgba(24, 39, 75, 0.12);",
  },
  colors: {
    primary: {
      black: "#000000",
      neutral: "#404040",
      light: "#919191",
      white: "#ffffff",
    },
    zinc: {
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      500: "#71717a",
      800: "#27272a",
    },
    error: {
      500: "#ef4444",
    },
  },
  space: {
    11: "2.75rem",
    15: "3.75rem",
    25: "6.25rem",
    27: "6.75rem",
  },
  breakpoints: {
    sm: "48rem",
    md: "62rem",
    lg: "80rem",
    xl: "90rem",
  },
  borders: {
    none: "0",
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  radius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  blur: {
    none: "0",
    sm: "4px",
    base: "8px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  textStyles: typography,
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.75rem",
    "3xl": "2rem",
    "4xl": "2.25rem",
    "5xl": "2.5rem",
    "6xl": "3rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.14,
    short: 1.16,
    "122": 1.22,
    base: 1.2,
    tall: 1.25,
    "140": 1.4,
    taller: 1.5,
    xl: 1.66,
  },
  letterSpacings: {
    tight: "-0.02em",
    normal: "0.02em",
    button: "0.02em",
  },
});

export default theme;

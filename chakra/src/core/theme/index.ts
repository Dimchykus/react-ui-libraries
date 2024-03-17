import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Text from "./components/text";
import Heading from "./components/heading";
import Container from "./components/container";
import Input from "./components/input";

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
    Text: Text,
    Heading: Heading,
    Container: Container,
    Input: Input,
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
    15: "3.75rem",
    25: "6.25rem",
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
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  border: {},
  textStyles: {
    h1: {
      fontSize: "4xl",
      fontWeight: "normal",
      lineHeight: "122",
      letterSpacing: "xl",
    },
    h2: {
      fontSize: "3xl",
      fontWeight: "normal",
      lineHeight: "tall",
      letterSpacing: "widest",
    },
    h3: {
      fontSize: "2xl",
      fontWeight: "normal",
      lineHeight: "shorter",
      letterSpacing: "wider",
    },
    h4: {
      fontSize: "xl",
      fontWeight: "normal",
      lineHeight: "short",
      letterSpacing: "wide",
    },
    h5: {
      fontSize: "lg",
      fontWeight: "normal",
      lineHeight: "base",
      letterSpacing: "normal",
    },
    h6: {
      fontSize: "md",
      fontWeight: "normal",
      lineHeight: "tall",
      letterSpacing: "tight",
    },
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
      letterSpacing: "tight",
    },
    paragraph3: {
      fontSize: "sm",
      fontWeight: "normal",
      lineHeight: "xl",
      letterSpacing: "tighter",
    },
    button: {
      fontSize: "lg",
      fontWeight: "normal",
      lineHeight: "shorter",
      letterSpacing: "normal",
    },
    button2: {
      fontSize: "md",
      fontWeight: "normal",
      lineHeight: "tall",
      letterSpacing: "tight",
    },
    underlined: {
      fontSize: "lg",
      fontWeight: "normal",
      lineHeight: "base",
      letterSpacing: "normal",
      textDecoration: "underline",
    },
    outlined: {
      fontSize: "lg",
      fontWeight: "normal",
      lineHeight: "base",
      letterSpacing: "normal",
      textDecoration: "underline",
    },
  },
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
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.015em", // 0.24
    tight: "-0.02em", //0.32
    normal: "-0.025em", //0.4
    wide: "-0.03em", // -0.48px
    wider: "-0.035em", //-0.56px
    widest: "-0.04em", //-0.64px
    xl: "-0.045em", //-0.72px
  },
});

export default theme;

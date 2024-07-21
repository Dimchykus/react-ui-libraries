import { createTheme } from "@mui/material";
import Button from "./components/button";
import Link from "./components/link";
import Container from "./components/container";
import COLORS from "./colors";
import typography from "./components/typography";
import breakpoints from "./breakpoints";
import Input from "./components/input";
import HelperText from "./components/helperText";
import Modal from "./components/modal";
import shadows from "./components/shadows";

export const remToPx = (value: string) => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        },
        img: {
          objectFit: "cover",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
    MuiButton: Button,
    MuiLink: Link,
    MuiContainer: Container,
    MuiTextField: Input,
    MuiFormHelperText: HelperText,
    MuiModal: Modal,
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          button: "span",
          button2: "span",
          paragraph1: "p",
          paragraph2: "p",
          paragraph3: "p",
          textM: "h2",
          outlined: "p",
          underlined: "p",
          subHeading: "p",
          text: "p",
        },
      },
    },
  },
  breakpoints,
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  shadows,
  typography,
  spacing: (factor: number) => `${0.25 * factor}rem`,
  palette: COLORS,
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

export default theme;

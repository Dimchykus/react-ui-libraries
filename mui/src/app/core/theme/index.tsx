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
  typography,
  spacing: (factor: number) => `${0.25 * factor}rem`,
  palette: COLORS,
});

export default theme;

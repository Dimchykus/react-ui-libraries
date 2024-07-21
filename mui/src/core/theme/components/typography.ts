import { createTheme } from "@mui/material";
import breakpoints from "../breakpoints";
import { Sora } from "next/font/google";
import {} from "@mui/material/styles";
// eslint-disable-next-line no-restricted-imports
import { TypographyOptions } from "@mui/material/styles/createTypography";
import COLORS from "../colors";

const sora = Sora({ subsets: ["latin"] });

const theme = createTheme({
  breakpoints,
});

const typography: TypographyOptions = {
  fontFamily: sora.style.fontFamily,
  fontSize: 16,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "2.25rem",
    fontWeight: "400",
    lineHeight: "122%",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "125%",
    letterSpacing: "-0.02em",
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "114%",
    letterSpacing: "-0.02em",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "116%",
    letterSpacing: "-0.02em",
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.02em",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "125%",
    letterSpacing: "-0.02em",
  },
  paragraph1: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "140%",
    letterSpacing: "0.02em",
  },
  paragraph2: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "0.02em",
  },
  paragraph3: {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "166%",
    letterSpacing: "0.02em",
  },
  button: {
    fontSize: "1.25rem",
    fontWeight: "600",
    lineHeight: "120%",
    letterSpacing: "0.02em",
  },
  button2: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "125%",
    letterSpacing: "0.02em",
  },
  underlined: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "0.02em",
    textDecoration: "underline",
  },
  textM: {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "114%",
    letterSpacing: "-0.02em",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: "122%",
    letterSpacing: "-0.96px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      letterSpacing: "-0.02em",
    },
  },
  outlined: {
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: "122%",
    letterSpacing: "-0.02em",
    fontFamily: "sans-serif",
    WebkitTextFillColor: COLORS.primary.white,
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: COLORS.primary.black,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      letterSpacing: "-0.02em",
    },
  },
};

export default typography;

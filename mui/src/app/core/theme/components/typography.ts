import { createTheme } from "@mui/material";
import breakpoints from "../breakpoints";

const theme = createTheme({
  breakpoints,
});

const typography = {
  h1: {
    fontSize: "2.25rem",
    fontWeight: "400",
    lineHeight: "122%",
    letterSpacing: "-0.72px",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "125%",
    letterSpacing: "-0.64px",
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "114%",
    letterSpacing: "-0.56px",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "116%",
    letterSpacing: "-0.48px",
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "125%",
    letterSpacing: "-0.32px",
  },
  paragraph1: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "140%",
    letterSpacing: "-0.4px",
  },
  paragraph2: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "-0.32px",
  },
  paragraph3: {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "166%",
    letterSpacing: "-0.24px",
  },
  button: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",
  },
  button2: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "125%",
    letterSpacing: "-0.32px",
  },
  underlined: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",
    textDecoration: "underline",
  },
  textM: {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "114%",
    letterSpacing: "-0.56px",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: "116%",
    letterSpacing: "-0.96px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      letterSpacing: "-0.56px",
    },
  },
  outlined: {
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",
    textDecoration: "underline",
    // "-webkit-text-stroke": "1px black",
    // "-webkit-text-fill-color": "transparent",
  },
};

export default typography;

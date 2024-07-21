import { Title, createTheme, rem } from "@mantine/core";
import { Sora } from "next/font/google";
import COLORS from "./colors";
import breakpoints from "./breakpoints";
import titleStyles from "./components/title.module.scss";
import radius from "./radius";
import TextStyles from "./components/text";
import ContainerStyles from "./components/container";
import InputStyles from "./components/input";
import ButtonStyles from "./components/button";
import TextareaStyles from "./components/textarea";

const sora = Sora({ subsets: ["latin"] });

const theme = createTheme({
  primaryColor: "black",
  fontFamily: sora.style.fontFamily,
  components: {
    Textarea: TextareaStyles,
    Input: InputStyles,
    Title: Title.extend({
      classNames: titleStyles,
    }),
    Text: TextStyles,
    Container: ContainerStyles,
    Button: ButtonStyles,
  },
  radius,
  breakpoints,
  colors: COLORS,
  spacing: {
    lg: "1.25rem",
    md: "7rem",
    sm: "0.75rem",
    xl: "2rem",
    xs: "0.5rem",
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
  lineHeights: {
    normal: "normal",
    none: "100%",
    shorter: "114%",
    short: "116%",
    "122": "122%",
    base: "120%",
    tall: "125%",
    "140": "140%",
    taller: "150%",
    xl: "166%",
  },
  shadows: {
    md: "0 12px 42px -4px rgba(24, 39, 75, 0.12), 0 8px 18px -6px rgba(24, 39, 75, 0.12);",
  },
  headings: {
    fontWeight: "400",
    sizes: {
      h1: {
        fontSize: "var(--mantine-font-size-4xl)",
        lineHeight: "var(--mantine-line-height-122)",
      },
      h2: {
        fontSize: "var(--mantine-font-size-3xl)",
        lineHeight: "var(--mantine-line-height-tall)",
      },
      h3: {
        fontSize: "var(--mantine-font-size-2xl)",
        lineHeight: "var(--mantine-line-height-shorter)",
      },
      h4: {
        fontSize: "var(--mantine-font-size-xl)",
        lineHeight: "var(--mantine-line-height-short)",
      },
      h5: {
        fontSize: "var(--mantine-font-size-lg)",
        lineHeight: "var(--mantine-line-height-base)",
      },
      h6: {
        fontSize: "var(--mantine-font-size-md)",
        lineHeight: "var(--mantine-line-height-tall)",
      },
    },
  },
});

export default theme;

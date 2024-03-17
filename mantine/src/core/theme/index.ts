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
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(16),
    xl: rem(20),
  },
  headings: {
    sizes: {
      h1: {
        fontWeight: "400",
        fontSize: rem(36),
        lineHeight: "122%",
      },
      h2: {
        fontWeight: "400",
        fontSize: rem(32),
        lineHeight: "125%",
      },
      h3: {
        fontWeight: "400",
        fontSize: rem(28),
        lineHeight: "114%",
      },
      h4: {
        fontWeight: "400",
        fontSize: rem(24),
        lineHeight: "116%",
      },
      h5: {
        fontWeight: "400",
        fontSize: rem(20),
        lineHeight: "120%",
      },
      h6: {
        fontWeight: "400",
        fontSize: rem(16),
        lineHeight: "125%",
      },
    },
  },
});

export default theme;

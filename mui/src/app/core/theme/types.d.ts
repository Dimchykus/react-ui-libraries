import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    text: CSSProperties;
    textM: CSSProperties;
    outlined: CSSProperties;
    subHeading: CSSProperties;
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h4: CSSProperties;
    h5: CSSProperties;
    h6: CSSProperties;
    paragraph1: CSSProperties;
    paragraph2: CSSProperties;
    paragraph3: CSSProperties;
    button: CSSProperties;
    button2: CSSProperties;
    underlined: CSSProperties;
  }

  interface TypographyVariantsOptions {
    text?: CSSProperties;
    textM?: CSSProperties;
    outlined?: CSSProperties;
    subHeading?: CSSProperties;
    h1?: CSSProperties;
    h2?: CSSProperties;
    h3?: CSSProperties;
    h4?: CSSProperties;
    h5?: CSSProperties;
    h6?: CSSProperties;
    paragraph1?: CSSProperties;
    paragraph2?: CSSProperties;
    paragraph3?: CSSProperties;
    button?: CSSProperties;
    button2?: CSSProperties;
    underlined?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text: true;
    textM: true;
    outlined: true;
    subHeading: true;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    paragraph1: true;
    paragraph2: true;
    paragraph3: true;
    button: true;
    button2: true;
    underlined: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    text: false;
    outlined: false;
    contained: true;
  }
  interface ButtonPropsSizeOverrides {
    small: true;
    medium: true;
    large: false;
  }
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    primary: SimplePaletteColorOptions;
    zinc: {
      100: string;
      200: string;
      300: string;
      500: string;
      800: string;
    };
    error: {
      500: string;
    };
  }

  interface Palette {
    primary: SimplePaletteColorOptions;
    zinc: {
      100: string;
      200: string;
      300: string;
      500: string;
      800: string;
    };
    error: {
      500: string;
    };
  }

  interface PaletteColor {
    black: string;
    white: string;
    neutral: string;
    main: string;
  }

  interface SimplePaletteColorOptions {
    black: string;
    white: string;
    neutral: string;
    main: string;
  }
}

import { Components } from "@mui/material";
import COLORS from "../colors";
import { Sora } from "next/font/google";
import typography from "./typography";
const sora = Sora({ subsets: ["latin"] });

const Button: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "4px",
      transition: "all 0.2s ease-in-out",
      background: COLORS.primary.black,
      color: COLORS.primary.white,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: COLORS.primary.black,
      textTransform: "none",
      minWidth: "auto",
      fontFamily: sora.style.fontFamily,
      "&:hover": {
        background: COLORS.primary.neutral,
        borderColor: COLORS.primary.neutral,
      },
      "&:active": {
        background: COLORS.primary.white,
        borderColor: COLORS.primary.neutral,
        color: COLORS.primary.black,
        path: {
          fill: COLORS.primary.black,
        },
      },
      "& .MuiButton-endIcon": {
        marginRight: "0",
        marginLeft: "0.5rem",
      },
    },
  },
  defaultProps: {
    variant: "contained",
    size: "medium",
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        ...typography.button2,
      },
    },
    {
      props: { size: "medium" },
      style: {
        paddingTop: "0.875rem",
        paddingBottom: "0.875rem",
        paddingLeft: "1.125rem",
        paddingRight: "1.125rem",
        ...typography.button,
      },
    },
  ],
};

export default Button;

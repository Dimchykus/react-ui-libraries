import { Components } from "@mui/material";
import COLORS from "../colors";
import typography from "./typography";
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

const Input: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      borderRadius: "4px",
      transition: "all 0.2s ease-in-out",
      background: COLORS.primary.white,
      color: COLORS.zinc[500],
      outline: "none",

      fieldset: {
        border: 0,
      },
      "& .Mui-disabled": {
        background: COLORS.zinc[100],
        borderColor: COLORS.zinc[200],
        color: COLORS.zinc[300],
      },
      "&:not(:placeholder-shown)": {
        color: COLORS.primary.black,
        borderColor: COLORS.zinc[500],
      },
      "&.MuiTextField-root": {
        width: "100%",
      },
      "& .Mui-focused": {
        boxShadow:
          "0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.08)",
        fieldset: {
          border: 0,
        },
      },
      "& .MuiInputBase-root": {
        fontFamily: sora.style.fontFamily,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: COLORS.primary.black,
        "&:hover": {
          background: COLORS.zinc[100],
          borderColor: COLORS.primary.neutral,
          color: COLORS.primary.neutral,
          fieldset: {
            border: 0,
          },
        },
        "&:active": {
          background: COLORS.zinc[100],
          borderColor: COLORS.primary.neutral,
          color: COLORS.primary.neutral,
          fieldset: {
            border: 0,
          },
        },
      },
      "& .MuiInputBase-input": {
        border: 0,
        paddingTop: "1.0625rem",
        paddingBottom: "1.0625rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        ...typography.h6,
        height: "auto",
        "&:hover": {
          border: 0,
        },
      },
    },
  },
  defaultProps: {},
  variants: [
    {
      props: { type: "textarea" },
      style: {
        "& .MuiInputBase-root": {
          minHeight: 140,
          alignItems: "flex-start",
          "& .MuiInputBase-input": {
            resize: "none",
          },
        },
      },
    },
  ],
};

export default Input;

import { Components } from "@mui/material";
import COLORS from "../colors";
import typography from "./typography";

const HelperText: Components["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      marginTop: "0.75rem",
      marginLeft: 0,
      marginRight: 0,
      ...typography.h6,
      color: COLORS.error[500],
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
  },
  defaultProps: {},
};

export default HelperText;

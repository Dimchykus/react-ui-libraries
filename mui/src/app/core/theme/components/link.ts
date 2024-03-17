import { Components } from "@mui/material";
import COLORS from "../colors";

const Link: Components["MuiLink"] = {
  styleOverrides: {
    root: {
      textDecoration: "none",
      color: COLORS.primary.black,
    },
  },
};

export default Link;

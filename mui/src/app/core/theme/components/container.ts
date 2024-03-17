import { Components } from "@mui/material";

const Container: Components["MuiContainer"] = {
  styleOverrides: {
    root: {},
  },
  defaultProps: {
    sx: () => ({
      maxWidth: "1920px !important",
      width: "100%",
      px: [4, 8, 28],
      margin: "0 auto",
      boxSizing: "border-box",
    }),
  },
};

export default Container;

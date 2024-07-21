import { Components } from "@mui/material";
import COLORS from "../colors";

const Modal: Components["MuiModal"] = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiBackdrop-root": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      },
    },
  },
};

export default Modal;

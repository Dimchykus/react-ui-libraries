import {
  ButtonProps,
  Box,
  Stack,
  Modal as MuiModal,
  Portal,
} from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({ open, children }) => {
  return (
    <Portal>
      <MuiModal open={open}>
        <Stack
          flexDirection={"column"}
          sx={{
            backgroundColor: "white",
            minWidth: 400,
            minHeight: 400,
            borderRadius: 3,
          }}
        >
          {children}
        </Stack>
      </MuiModal>
    </Portal>
  );
};

export default Modal;

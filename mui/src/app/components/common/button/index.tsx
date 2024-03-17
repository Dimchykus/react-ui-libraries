


import { ButtonProps, Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <MuiButton
      sx={{
        display: "flex",
        alignItems: "center",
        path: {
          fill: "white",
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

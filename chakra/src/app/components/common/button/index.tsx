import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      display="flex"
      gap={2}
      alignItems={"center"}
      sx={{
        path: {
          fill: "white",
        },
      }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;

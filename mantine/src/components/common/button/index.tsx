import {
  ButtonProps,
  Button as MantineButton,
  createPolymorphicComponent,
} from "@mantine/core";
import { ReactNode, forwardRef } from "react";

interface MyButtonProps extends ButtonProps {
  children: ReactNode;
}

const MyButton = createPolymorphicComponent<"button", MyButtonProps>(
  forwardRef<HTMLButtonElement, MyButtonProps>(function MyButton(
    { children, ...others },
    ref
  ) {
    return (
      <MantineButton component="button" {...others} ref={ref}>
        {children}
      </MantineButton>
    );
  })
);

MyButton.displayName = "MyButton";

export default MyButton;

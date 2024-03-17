import { Button, rem } from "@mantine/core";
import buttonStyles from "./button.module.scss";

const ButtonStyles = Button.extend({
  classNames: buttonStyles,
  defaultProps: {
    size: "medium",
  },
  vars: (theme, props) => {
    if (props.size === "medium") {
      return {
        root: {
          "--button-height": rem(56),
          "--button-width": "auto",
          "--button-padding-x": rem(19),
          "--button-fz": "1.25rem",
          "--button-fw": 400,
          "--button-lh": "120%",
          "--button-lts": "-0.4px",
          "--_button-padding-right": "var(--button-padding-x)",
        },
      };
    }

    if (props.size === "small") {
      return {
        root: {
          "--button-height": rem(48),
          "--button-width": "auto",
          "--button-padding-x": rem(15),
          "--button-fz": "1rem",
          "--button-fw": 400,
          "--button-lh": "125%",
          "--button-lts": "-0.32px",
          "--_button-padding-right": "var(--button-padding-x)",
          //other props
          // --button-height-xs: calc(1.875rem* var(--mantine-scale));
          // --button-height-sm: calc(2.25rem* var(--mantine-scale));
          // --button-height-md: calc(2.625rem* var(--mantine-scale));
          // --button-height-lg: calc(3.125rem* var(--mantine-scale));
          // --button-height-xl: calc(3.75rem* var(--mantine-scale));
          // --button-height-compact-xs: calc(1.375rem* var(--mantine-scale));
          // --button-height-compact-sm: calc(1.625rem* var(--mantine-scale));
          // --button-height-compact-md: calc(1.875rem* var(--mantine-scale));
          // --button-height-compact-lg: calc(2.125rem* var(--mantine-scale));
          // --button-height-compact-xl: calc(2.5rem* var(--mantine-scale));
          // --button-padding-x-xs: calc(0.875rem* var(--mantine-scale));
          // --button-padding-x-sm: calc(1.125rem* var(--mantine-scale));
          // --button-padding-x-md: calc(1.375rem* var(--mantine-scale));
          // --button-padding-x-lg: calc(1.625rem* var(--mantine-scale));
          // --button-padding-x-xl: calc(2rem* var(--mantine-scale));
          // --button-padding-x-compact-xs: calc(0.4375rem* var(--mantine-scale));
          // --button-padding-x-compact-sm: calc(0.5rem* var(--mantine-scale));
          // --button-padding-x-compact-md: calc(0.625rem* var(--mantine-scale));
          // --button-padding-x-compact-lg: calc(0.75rem* var(--mantine-scale));
          // --button-padding-x-compact-xl: calc(0.875rem* var(--mantine-scale));
          // --button-height: var(--button-height-sm);
          // --button-padding-x: var(--button-padding-x-sm);
          // --button-color: var(--mantine-color-white);
        },
      };
    }

    return { root: {} };
  },
});

export default ButtonStyles;

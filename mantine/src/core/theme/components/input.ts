import { Input, rem } from "@mantine/core";
import inputStyles from "./input.module.scss";

const InputStyles = Input.extend({
  classNames: inputStyles,
  vars: () => {
    return {
      wrapper: {
        "--_input-bg": "var(--mantine-color-white)",
        "--_input-color": "var(--mantine-color-text)",
        "--_input-radius": "var(--mantine-radius-sm)",
        "--_input-height": "var(--input-height-md)",
        "--_input-fz": "var(--mantine-font-size-sm)",
        "--_input-padding": rem(24),
        "--_input-padding-left": "var(--_input-padding)",
        "--_input-padding-right": "var(--_input-padding)",
        "--input-height-md": rem(60),
        "--input-height-lg": rem(140),
        "--input-padding-y-md": rem(18),
        "--input-padding-y": "var(--input-padding-y-md)",
        "--input-padding-y-lg": rem(16),
        // other props
        // --input-height-xs: calc(1.875rem* var(--mantine-scale));
        // --input-height-sm: calc(2.25rem* var(--mantine-scale));
        // --input-height-xl: calc(3.75rem* var(--mantine-scale));
        // --input-padding-y-xs: calc(0.3125rem* var(--mantine-scale));
        // --input-padding-y-sm: calc(0.375rem* var(--mantine-scale));
        // --input-padding-y-xl: calc(0.8125rem* var(--mantine-scale));
        // --_input-height: var(--input-height, var(--input-height-sm));
        // --_input-radius: var(--input-radius, var(--mantine-radius-default));
        // --_input-cursor: text;
        // --_input-text-align: left;
        // --_input-line-height: calc(var(--_input-height) - 0.125rem* var(--mantine-scale));
        // --_input-placeholder-color: var(--mantine-color-placeholder);
        // --_input-left-section-size: var(--input-left-section-width, calc(var(--_input-height) - 0.125rem* var(--mantine-scale)));
        // --_input-right-section-size: var(--input-right-section-width, calc(var(--_input-height) - 0.125rem* var(--mantine-scale)));
        // --_input-size: var(--_input-height);
      },
      root: {},
    };
  },
});

export default InputStyles;

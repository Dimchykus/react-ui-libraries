import { Textarea } from "@mantine/core";

const TextareaStyles = Textarea.extend({
  vars: () => {
    return {
      wrapper: {
        "--_input-height": "var(--input-height-lg)",
        "--_input-size": "var(--_input-height)",
        "--input-padding-y": "var(--input-padding-y-lg)",
      },
    };
  },
});

export default TextareaStyles;

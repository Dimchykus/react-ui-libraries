import { defineStyleConfig } from "@chakra-ui/react";

const Container = defineStyleConfig({
  defaultProps: {
    variant: "container",
  },
  variants: {
    container: {
      px: [4, 28],
      maxW: "1920px",
      margin: "0 auto",
    },
  },
});

export default Container;

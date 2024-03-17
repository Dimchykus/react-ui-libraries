import { Container } from "@mantine/core";
import containerStyles from "./container.module.scss";

const ContainerStyles = Container.extend({
  classNames: () => ({
    root: containerStyles.container,
  }),
  styles: {
    root: {
      "--container-size-xs": "calc(33.75rem*var(--mantine-scale))",
      "--container-size-sm": "calc(45rem*var(--mantine-scale))",
      "--container-size-md": "calc(60rem*var(--mantine-scale))",
      "--container-size-lg": "calc(71.25rem*var(--mantine-scale))",
      "--container-size-xl": "calc(120rem*var(--mantine-scale))",
    },
  },
  vars: () => {
    return {
      root: {
        "--container-size": "var(--container-size-xl)",
      },
    };
  },
});

export default ContainerStyles;

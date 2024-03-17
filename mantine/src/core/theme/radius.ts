import { MantineRadiusValues, rem } from "@mantine/core";

const radius: Partial<MantineRadiusValues> | undefined = {
  lg: rem("12px"),
  md: rem("8px"),
  sm: rem("4px"),
  xl: rem("16px"),
  xs: rem("2px"),
  // custom radius = var(--mantine-radius-18);
  18: rem("18px"),
};

export default radius;

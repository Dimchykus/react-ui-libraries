export * from "@mantine/core";
export { MantineTheme as MantineThemeOld } from "@mantine/core";

type ExtendedCustomColors =
  | "black"
  | "white"
  | "neutral"
  | "zinc"
  | "error"
  | (string & {}); // to allow get colors by key

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

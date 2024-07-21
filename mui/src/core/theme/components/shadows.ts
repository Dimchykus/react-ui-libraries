// eslint-disable-next-line no-restricted-imports
import { Shadows } from "@mui/material/styles/shadows";

const shadows: Shadows = [
  "none",
  "0 12px 42px -4px rgba(24, 39, 75, 0.12), 0 8px 18px -6px rgba(24, 39, 75, 0.12);",
  ...Array(24).fill("none"),
] as Shadows;

export default shadows;

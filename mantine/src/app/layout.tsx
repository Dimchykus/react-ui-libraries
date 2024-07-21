"use client";

import { Sora } from "next/font/google";
import theme from "@/core/theme";
import Header from "../components/common/header";
import { CSSVariablesResolver, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Footer from "@/components/common/footer";

const sora = Sora({ subsets: ["latin"] });

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-font-family": sora.style.fontFamily,
    "--mantine-color-text": "var(--mantine-color-deep-orange)",
    "--mantine-spacing-xs": "0.5rem",
    "--mantine-spacing-sm": "0.75rem",
    "--mantine-spacing-md": "1rem",
    "--mantine-spacing-lg": "1.25rem",
    "--mantine-spacing-xl": "2rem",
    "--mantine-z-index-header": "100",
    "--mantine-z-index-modal": "200",
    "--mantine-z-index-popover": "300",
    "--mantine-z-index-overlay": "400",
    "--mantine-z-index-max": "9999",
  },
  light: {
    "--mantine-color-black": "var(--mantine-primary-color-4)",
    "--mantine-color-black-text": "var(--mantine-primary-color-4)",
    "--mantine-color-white": "var(--mantine-color-white-4)",
    "--mantine-color-white-text": "var(--mantine-color-white-4)",
    "--mantine-color-white-filled": "var(--mantine-color-white-4)",
    "--mantine-color-zinc-text": "var(--mantine-color-zinc-2)",
  },
  dark: {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">
        <MantineProvider
          theme={theme}
          cssVariablesResolver={resolver}
          defaultColorScheme="light"
        >
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}

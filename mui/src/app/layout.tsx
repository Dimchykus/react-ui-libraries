"use client";

import { Sora } from "next/font/google";
import theme from "@/app/core/theme";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { CssBaseline, ThemeProvider } from "@mui/material";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

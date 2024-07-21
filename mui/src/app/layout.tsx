"use client";

import theme from "@/core/theme";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { CssBaseline, ThemeProvider } from "@mui/material";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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

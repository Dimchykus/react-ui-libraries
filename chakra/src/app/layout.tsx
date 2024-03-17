"use client";

import { Sora } from "next/font/google";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const inter = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraBaseProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ChakraBaseProvider>
      </body>
    </html>
  );
}

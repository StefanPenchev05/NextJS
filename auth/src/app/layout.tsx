import type { Metadata } from "next";
import { StrictMode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReduxProvider } from "services/redux/StoreProvider";
import Alert from "./_components/Alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Auth Page",
  description: "Made by Stefan Penchev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <StrictMode>
            {children}
            <Alert/>
          </StrictMode>
        </ReduxProvider>
      </body>
    </html>
  );
}

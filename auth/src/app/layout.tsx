import type { Metadata } from "next";
import { StrictMode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "services/stores/store";

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
        <Provider store={store}>
          <StrictMode>{children}</StrictMode>
        </Provider>
      </body>
    </html>
  );
}

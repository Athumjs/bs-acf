import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bíblia Sagrada ACF",
  description: "Bíblia Sagrada Almeida Corrigida Fiel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

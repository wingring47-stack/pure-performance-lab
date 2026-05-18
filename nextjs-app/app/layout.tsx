import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartWidget } from "@/components/cart/CartWidget";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Pure Performance Lab — Research-Grade Lipids",
  description: "Premium research-use lipids with verified COAs. BTC, ETH, Crypto payments accepted.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <CartWidget />
      </body>
    </html>
  );
}

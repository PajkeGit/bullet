import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProviderWrapper from "./ProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bullet Game",
  description: "Russian Roulette Telegram Bot",
  icons: {
    icon: "/gun.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={inter.className}>{children}</body>
      </ProviderWrapper>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alchemyst by GBMC",
  description: "Alchemyst Solana Token by GBMC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

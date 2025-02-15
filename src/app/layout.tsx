import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const plusJakartaSans = Plus_Jakarta_Sans({})

export const metadata: Metadata = {
  title: "Diagonal",
  description: "Diagonal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${plusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

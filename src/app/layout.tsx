import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const plusJakartaSans = Plus_Jakarta_Sans({subsets:["latin"]})

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
    <html lang="pt-br" className='scroll-smooth'>
      <body
        className={`${plusJakartaSans.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

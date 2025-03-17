import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const plusJakartaSans = Plus_Jakarta_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Diagonal - Marketing para Fitness & Wellness",
  description:
    "Movemos negócios e pessoas no Fitness & Wellness com estratégias que combinam branding e performance para academias, estúdios e clínicas.",
  keywords: [
    "marketing fitness",
    "marketing wellness",
    "academias",
    "estúdios",
    "clínicas",
    "branding",
    "performance",
    "tráfego pago",
    "SEO",
    "automação",
    "identidade visual",
    "conteúdo digital",
  ],
  authors: [{ name: "Diagonal", url: "https://diagonal.ag" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://diagonal.ag",
    title: "Diagonal - Marketing para Fitness & Wellness",
    description:
      "Movemos negócios e pessoas no Fitness & Wellness com estratégias que combinam criatividade e dados para atrair, engajar e converter.",
    images: [
      {
        url: "https://diagonal.ag/assets/movemos-resultados.png",
        width: 1200,
        height: 630,
        alt: "Diagonal - Marketing para Fitness & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagonal - Marketing para Fitness & Wellness",
    description:
      "Movemos negócios e pessoas no Fitness & Wellness com estratégias que combinam criatividade e dados para atrair, engajar e converter.",
    images: ["https://diagonal.ag/assets/movemos-resultados.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://diagonal.ag",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      
      <body className={`${plusJakartaSans.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

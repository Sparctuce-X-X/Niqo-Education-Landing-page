import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimisation: évite le FOIT (Flash of Invisible Text)
  preload: true,
});

// Viewport séparé pour de meilleures performances
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  title: "Niqo | Solutions sur mesure pour digitaliser vos processus",
  description: "Niqo conçoit des solutions sur mesure pour les entreprises et les écoles : digitalisation des processus, consulting et modules CRM selon vos besoins.",
  keywords: ["solutions sur mesure", "digitalisation", "consulting", "processus métier", "WhatsApp Business", "CRM", "Afrique"],
  authors: [{ name: "Niqo Education" }],
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Niqo | Solutions sur mesure et digitalisation des processus",
    description: "Solutions sur mesure, consulting et modules CRM selon les besoins des entreprises et des écoles",
    type: "website",
    locale: "fr_FR",
    siteName: "Niqo Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niqo | Solutions sur mesure et digitalisation des processus",
    description: "Solutions sur mesure, consulting et modules CRM selon les besoins des entreprises et des écoles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

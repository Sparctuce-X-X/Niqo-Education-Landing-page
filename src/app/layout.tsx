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
  title: "Niqo Education | Gestion scolaire simplifiée pour l'Afrique",
  description: "La plateforme de gestion scolaire tout-en-un qui connecte votre école aux parents via WhatsApp. Gérez élèves, présences, facturation et communication en un seul endroit.",
  keywords: ["gestion scolaire", "école privée", "Afrique", "WhatsApp", "facturation", "présences", "Côte d'Ivoire", "Sénégal", "Cameroun"],
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
    title: "Niqo Education | Gestion scolaire simplifiée",
    description: "La plateforme de gestion scolaire qui connecte votre école aux parents via WhatsApp",
    type: "website",
    locale: "fr_FR",
    siteName: "Niqo Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niqo Education | Gestion scolaire simplifiée",
    description: "La plateforme de gestion scolaire qui connecte votre école aux parents via WhatsApp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

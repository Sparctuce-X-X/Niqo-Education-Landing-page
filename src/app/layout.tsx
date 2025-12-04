import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niqo Education | Gestion scolaire simplifiée pour l'Afrique",
  description: "La plateforme de gestion scolaire tout-en-un qui connecte votre école aux parents via WhatsApp. Gérez élèves, présences, facturation et communication en un seul endroit.",
  keywords: ["gestion scolaire", "école privée", "Afrique", "WhatsApp", "facturation", "présences", "Côte d'Ivoire", "Sénégal", "Cameroun"],
  authors: [{ name: "Niqo Education" }],
  openGraph: {
    title: "Niqo Education | Gestion scolaire simplifiée",
    description: "La plateforme de gestion scolaire qui connecte votre école aux parents via WhatsApp",
    type: "website",
    locale: "fr_FR",
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

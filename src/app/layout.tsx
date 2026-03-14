import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "ProMax TV Player — IPTV 4K Sans Coupure | +8000 Chaînes & VOD",
  description:
    "ProMax TV Player : le meilleur service IPTV premium. +8 000 chaînes TV en direct, +80 000 VOD en 4K Ultra HD. Compatible Smart TV, Firestick, Android. Support WhatsApp 24/7.",
  keywords: [
    "IPTV", "IPTV premium", "ProMax TV Player", "abonnement IPTV", "IPTV 4K",
    "chaînes IPTV", "VOD IPTV", "Smart TV IPTV", "Firestick IPTV", "IPTV France",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://promax-tv-player.com" },
  openGraph: {
    title: "ProMax TV Player — IPTV 4K Sans Coupure",
    description: "+8 000 chaînes TV en direct & +80 000 VOD en 4K Ultra HD",
    url: "https://promax-tv-player.com",
    siteName: "ProMax TV Player",
    images: [{ url: "https://promax-tv-player.com/logo.png", width: 512, height: 512 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProMax TV Player — IPTV Premium 4K",
    description: "+8 000 chaînes TV & +80 000 VOD en 4K Ultra HD",
    images: ["https://promax-tv-player.com/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-gray-100 antialiased font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

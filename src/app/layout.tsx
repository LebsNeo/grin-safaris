import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grinsafaris.com"),
  title: "Grin Safaris — Electric Safaris in Kruger National Park",
  description:
    "Premium guided safari tours in Kruger National Park, powered by a fully electric converted safari van. Silent, emissions-free game viewing with a closer, calmer wildlife experience.",
  keywords: [
    "Kruger safari",
    "electric safari",
    "sustainable safari",
    "Kruger National Park tours",
    "green safari",
    "luxury safari South Africa",
  ],
  openGraph: {
    title: "Grin Safaris — Electric Safaris in Kruger",
    description:
      "Silent, emissions-free game viewing in Kruger National Park. Premium guided tours from R2,000 per person.",
    url: "https://grinsafaris.com",
    siteName: "Grin Safaris",
    images: [{ url: "/images/hero.png", width: 1536, height: 1024 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grin Safaris — Electric Safaris in Kruger",
    description:
      "Silent, emissions-free game viewing in Kruger National Park.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}

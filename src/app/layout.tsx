import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../../fonts/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
});

const futuraBold = localFont({
  src: "../../fonts/FuturaBold.ttf",
  variable: "--font-futura-bold",
});

const futuraBook = localFont({
  src: "../../fonts/FuturaBook.ttf",
  variable: "--font-futura-book",
});

export const metadata: Metadata = {
  title: "Swathy Moorthy | E-Commerce & Marketplace Strategist",
  description:
    "Official portfolio of Swathy Moorthy — E-Commerce & Marketplace Strategist with 3+ years of experience across 20+ global retail marketplaces including Amazon, Farfetch, Zalando, and Walmart. Based in Pondicherry & Paris.",
  keywords: [
    "Swathy Moorthy",
    "E-Commerce Strategist",
    "Marketplace Operations",
    "Digital Marketing",
    "Neteven",
    "Lectra Group",
    "Cognizant",
    "Walmart SBUs",
    "Paris E-Commerce",
    "Listing Optimization",
    "Catalog Management",
  ],
  authors: [{ name: "Swathy Moorthy" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${futuraBold.variable} ${futuraBook.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f8f9fe] text-slate-800 antialiased selection:bg-[#5B41C1]/15 selection:text-[#5B41C1]">
        {children}
      </body>
    </html>
  );
}

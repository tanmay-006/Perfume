import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MF Fregrance - Premium Perfume Brand | Luxury Fragrances",
  description: "Indulge in exclusive scents at unbeatable prices. Discover MF Fregrance's curated collection of premium fragrances crafted with 100% natural ingredients.",
  keywords: "premium perfume, luxury fragrance, designer scents, high-end perfume, exclusive fragrances, MF Fregrance perfume",
  openGraph: {
    title: "MF Fregrance - Premium Perfume Brand",
    description: "Indulge in exclusive scents at unbeatable prices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="loading">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

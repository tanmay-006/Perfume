'use client';

import { useState } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text`}
      >
        <Header theme={theme} onThemeToggle={toggleTheme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
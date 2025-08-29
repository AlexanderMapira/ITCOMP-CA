// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font';

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "KHODITECH - Professional Website & App Development",
  description:
    "Leading IT company in Binbrook, Ontario specializing in cutting-edge website and mobile application development. Transform your ideas into digital reality.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.className} dark`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4th Annual Future Banks Summit & Awards - KSA 2023",
  description: "Digital Innovations Transforming the Kingdom's Banking Landscape",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white gradient-bg min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
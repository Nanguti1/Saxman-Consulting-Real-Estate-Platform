import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saxman Consulting - Premium Real Estate in Kenya",
  description: "Discover luxury properties and premium real estate solutions in Kenya's most prestigious locations with Saxman Consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Providers>
          <ReactQueryProvider>
            <CursorGlow />
            {children}
          </ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import CursorGlow from "@/components/CursorGlow";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${syne.variable} h-full antialiased dark`}>
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

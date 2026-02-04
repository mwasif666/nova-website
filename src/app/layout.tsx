import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css"
import {Toaster} from "react-hot-toast"
import ClientLazyComponentsWrapper from "@/components/Wrapper/ClientsLazyComponentWrapper";

// new theme
const inter = Inter({
  weight: ["400", "500", "700"], // choose the weights you need
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Nova Crest",
  description: "Nova Crest is a next-gen Web3 platform offering services of crypto trading,coin transactions ,DEFI ,NFTs ,Web3 social media and consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased `}>
        {children}

        <Toaster/>
        <ClientLazyComponentsWrapper/>
      </body>
    </html>
  );
}


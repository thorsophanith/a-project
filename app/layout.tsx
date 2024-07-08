import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResponsiveNavbar } from "@/components/ResponsiveNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop food",
  description: "This app for buy food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ResponsiveNavbar />
        {children}
      
        </body>
    </html>
  );
}

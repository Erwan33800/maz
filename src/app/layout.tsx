import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import EntryAnimation from "@/components/animations/EntryAnimation";
import Footer from "@/components/layout/Footer";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Maz Festival",
  description: "Le festival de musique à ne pas manquer à Marmande.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable}`}>
      <body className="flex flex-col min-h-screen">
        <EntryAnimation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

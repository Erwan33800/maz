import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import EntryAnimation from "@/components/animations/EntryAnimation";
import { Analytics } from "@vercel/analytics/next";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "MAZ Festival 2025 - Musique Électronique & Ambiance Unique",
  description:
    "Découvrez la programmation du MAZ Festival 2025 à côté de Marmande : DJs, camping, foodtrucks et ambiance électro unique en France.",
  keywords: [
    "festival",
    "musique électronique",
    "techno",
    "house",
    "Marmande",
    "festival France",
    "DJ",
    "concert",
    "camping",
  ],
  authors: [{ name: "MAZ Festival Team" }],
  openGraph: {
    title: "MAZ Festival 2025 - Musique Électronique & Ambiance Unique",
    description:
      "Rejoignez 200 festivaliers à côté de Marmande pour le MAZ Festival 2025 : 4 jours de musique électro, DJs, camping et foodtrucks.",
    url: "https://mazfestival.fr",
    siteName: "MAZ Festival",
    images: [
      {
        url: "/assets/prog.JPG",
        width: 1200,
        height: 630,
        alt: "MAZ Festival 2025 - Programmation",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAZ Festival 2025",
    description:
      "Le festival électro incontournable à Marmande : DJs, camping, foodtrucks et ambiance unique.",
    images: ["/assets/prog.JPG"],
    creator: "@mazfestival",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mazfestival.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable}`}>
      <body className="min-h-screen">
        <EntryAnimation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

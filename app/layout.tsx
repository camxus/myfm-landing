import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "myFM — Your Music Taste, Documented",
  description: "Letterboxd for music. Log artists, write reviews, see what your friends are listening to.",
  openGraph: {
    title: "myFM — Your Music Taste, Documented",
    description: "Letterboxd for music. Log artists, write reviews, see what your friends are listening to.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
      >
        {/* Paper grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Foooter";
import WhatsAppButton from "./Components/WhatsAppButton";
import IceAnimation from "./Components/IceAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "ColdFix | Air Conditioning & Refrigeration Services in London",
  description:
    "ColdFix provides fast, reliable AC installation, repair, and commercial refrigeration services across London. Experts in cold rooms and emergency HVAC support.",
  keywords: [
    "Cold Fix",
    "coldfix.co.uk",
    "AC repair London",
    "Air conditioning installation",
    "Refrigeration services",
    "Cold room maintenance",
    "Emergency HVAC London",
    "Commercial refrigeration",
    "London cooling services",
  ],
  metadataBase: new URL("https://coldfix.co.uk"),
  authors: [{ name: "Cold Fix Team", url: "https://coldfix.co.uk" }],
  openGraph: {
    title: "Cold Fix | Expert Air Conditioning & Refrigeration Services",
    description:
      "Trusted by restaurants and businesses across London, ColdFix specialises in AC repair, installation, and refrigeration services.",
    url: "https://coldfix.co.uk",
    siteName: "Cold Fix",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ColdFix – AC & Refrigeration",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Fix | AC & Refrigeration Experts in London",
    description:
      "Fast, affordable air conditioning and refrigeration services for homes and businesses in London.",
    images: ["/ice-og.svg"],
  },
  icons: {
    icon: "/favicon.ico",   
    apple: "/apple-touch-icon.png", 
    shortcut: "/favicon-32x32.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.className}`}
    >
      <body>
        <Navbar />
        <IceAnimation />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}

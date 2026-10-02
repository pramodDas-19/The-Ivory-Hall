import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theivoryhall.com"),
  title: "The Ivory Hall | Premium Event Venue",
  description:
    "The Ivory Hall is a refined event venue designed for weddings, celebrations, corporate gatherings and unforgettable occasions.",
  keywords: [
    "luxury event venue",
    "wedding venue Goa",
    "grand ballroom",
    "corporate galas",
    "private celebrations",
    "luxury destination wedding",
    "The Ivory Hall",
  ],
  authors: [{ name: "The Ivory Hall" }],
  openGraph: {
    title: "The Ivory Hall | A Space for Moments That Matter",
    description:
      "A refined event venue designed for weddings, celebrations, corporate gatherings and unforgettable occasions.",
    url: "https://theivoryhall.com",
    siteName: "The Ivory Hall",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 600,
        alt: "The Ivory Hall - Luxury Event Venue",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} font-sans bg-[#FAF9F6] text-[#1C1C1A] antialiased selection:bg-[#E8E4DC] selection:text-[#1C1C1A]`}
      >
        {children}
      </body>
    </html>
  );
}

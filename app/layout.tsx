import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LV Interiors | Premium Interior & Painting Services",
  description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
  keywords: "interior design, painting services, wood polish, PU coating, renovation, home improvement",
  icons: {
    icon: "/Logo1.png",
  },
  openGraph: {
    title: "LV Interiors | Premium Interior & Painting Services",
    description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
    images: [
      { url: "/Logo1.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Interiors | Premium Interior & Painting Services",
    description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
    images: [
      { url: "/Logo1.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

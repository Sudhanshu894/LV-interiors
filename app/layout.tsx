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

// Get the base URL for absolute image URLs (required for WhatsApp)
// Set NEXT_PUBLIC_SITE_URL environment variable to your deployed URL
// Example: NEXT_PUBLIC_SITE_URL=https://lv-interiors.vercel.app
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

// Construct absolute URLs for images
const logoUrl = `${baseUrl}/LVLogo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "LV Interiors | Premium Interior & Painting Services",
  description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
  keywords: "interior design, painting services, wood polish, PU coating, renovation, home improvement",
  icons: {
    icon: "/LVLogo.png",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "LV Interiors",
    title: "LV Interiors | Premium Interior & Painting Services",
    description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
    images: [
      { 
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "LV Interiors Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Interiors | Premium Interior & Painting Services",
    description: "Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses.",
    images: [
      { url: logoUrl },
    ],
  },
  alternates: {
    canonical: baseUrl,
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

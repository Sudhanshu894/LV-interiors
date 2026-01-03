import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lv.interiors.works';

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
  other: {
    // Additional explicit meta tags for WhatsApp compatibility
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'LV Interiors Logo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Explicit meta tags for WhatsApp - These are in addition to Next.js metadata API */}
        <meta property="og:title" content="LV Interiors | Premium Interior & Painting Services" />
        <meta property="og:description" content="Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses." />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LV Interiors Logo" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LV Interiors" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LV Interiors | Premium Interior & Painting Services" />
        <meta name="twitter:description" content="Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses." />
        <meta name="twitter:image" content={logoUrl} />
        <link rel="canonical" href={baseUrl} />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

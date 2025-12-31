export default function MetaTagsServer() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lv.interiors.works';
  const logoUrl = `${baseUrl}/LVLogo.png`;

  return (
    <>
      {/* Explicit meta tags for WhatsApp compatibility - Server-rendered */}
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
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="LV Interiors | Premium Interior & Painting Services" />
      <meta name="twitter:description" content="Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses." />
      <meta name="twitter:image" content={logoUrl} />
      
      {/* Additional meta tags */}
      <meta name="description" content="Transform your space with LV Interiors. Expert painting, wood finishing, and renovation services. Quality craftsmanship for homes and businesses." />
      <link rel="canonical" href={baseUrl} />
    </>
  );
}


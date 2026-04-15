"use client";

import { COMPANY, SERVICES } from "@/lib/data";

export default function JSONLD() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "alternateName": COMPANY.shortName,
    "description": "Web Dummy and Digital Solutions providing integrated digital systems and industrial web architecture services.",
    "url": "https://ciptadigitalutama.id",
    "telephone": COMPANY.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address.line1,
      "addressLocality": COMPANY.address.city,
      "addressRegion": COMPANY.address.province,
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.5892, // Approximate for Petisah Tengah, Medan
      "longitude": 98.6733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "image": "https://agriprimaindotama.co.id/og-image.jpg"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "url": "https://ciptadigitalutama.id",
    "logo": "https://ciptadigitalutama.id/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phone,
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["English", "Indonesian"]
    }
  };

  // Main services schema
  const serviceSchema = SERVICES.map(srv => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": srv.title,
    "description": srv.shortDesc,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {serviceSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

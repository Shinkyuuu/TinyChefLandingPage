import { faq } from "@/content/faq";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.operator,
      url: site.url,
      email: site.contactEmail,
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: site.name,
      description: site.description,
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      publisher: { "@type": "Organization", name: site.operator },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

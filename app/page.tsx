import { JsonLd } from "@/components/JsonLd";
import { DietaryBadges } from "@/components/sections/DietaryBadges";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Safety } from "@/components/sections/Safety";
import { TaglineReveal } from "@/components/sections/TaglineReveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <DietaryBadges />
      <TaglineReveal />
      <HowItWorks />
      <Safety />
      <Faq />
      <FinalCta />
      <JsonLd />
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import WhyChooseUs from "@/components/WhyChooseUsSection";
import PackagingExcellence from "@/components/PackagingExcellence";
import HowWeDeliverSection from "@/components/HowWeDeliverSection";
import TeamSection from "@/components/TeamSection";
import WhatOurClientsSaySection from "@/components/WhatOurClientsSaySection";
import OurClientsSection from "@/components/OurClientsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Packaging Solutions Section */}
      <PackagesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Packaging Excellence Section */}
      <PackagingExcellence />

      {/* How we deliver Section */}
      <HowWeDeliverSection />

      {/* Team Section */}
      <TeamSection />

      {/* What our clients say Section */}
      <WhatOurClientsSaySection />

      {/* Our clients section */}
      <OurClientsSection />

      {/* FAQs Section */}
      <FAQSection />
    </>
  );
}

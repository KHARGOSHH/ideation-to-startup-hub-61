
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ImpactMotive } from "@/components/ImpactMotive";
import { GlobalCollaborations } from "@/components/GlobalCollaborations";
import { TrustedByLeaders } from "@/components/TrustedByLeaders";
import { CommunityConnect } from "@/components/CommunityConnect";
import { HowItWorks } from "@/components/HowItWorks";
import { UpcomingPhase } from "@/components/UpcomingPhase";
import { WhatWeProvide } from "@/components/WhatWeProvide";
import { SustainableSection } from "@/components/SustainableSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <Hero />
      <FeaturedProducts />
      <SustainableSection />
      <ImpactMotive />
      <GlobalCollaborations />
      <TrustedByLeaders />
      <CommunityConnect />
      <HowItWorks />
      <UpcomingPhase />
      <WhatWeProvide />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

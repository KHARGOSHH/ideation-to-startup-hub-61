
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Lightbulb, TrendingUp, Star, ChevronRight, Rocket, Target, Network } from "lucide-react";
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
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <Hero />
      <FeaturedProducts />
      <ImpactMotive />
      <GlobalCollaborations />
      <TrustedByLeaders />
      <CommunityConnect />
      <HowItWorks />
      <UpcomingPhase />
      <WhatWeProvide />
      <Footer />
    </div>
  );
};

export default Index;

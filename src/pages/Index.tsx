
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Lightbulb, TrendingUp, Star, ChevronRight, Rocket, Target, Network } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { FeatureSection } from "@/components/FeatureSection";
import { StartupSupport } from "@/components/StartupSupport";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <Hero />
      <ProjectShowcase />
      <FeatureSection />
      <StartupSupport />
      <Footer />
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to AMOGH
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Connecting{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            Worldwide
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join a global community of innovators, entrepreneurs, and changemakers. 
            Discover opportunities, collaborate on projects, and create lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4">
              <Users className="mr-2 w-5 h-5" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100 text-lg px-8 py-4">
              <TrendingUp className="mr-2 w-5 h-5" />
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

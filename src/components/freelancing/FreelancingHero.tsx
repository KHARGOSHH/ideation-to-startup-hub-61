
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, DollarSign, Clock, ArrowRight, Briefcase } from "lucide-react";

export const FreelancingHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-pulse">
            <Briefcase className="w-4 h-4 mr-2" />
            Global Freelance Network
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Connect with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Top Talent
            </span>{" "}
            Worldwide
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access a global network of skilled freelancers, innovative students, and expert professionals. 
            Find the perfect talent for your next breakthrough project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              <Users className="mr-2 w-5 h-5" />
              Find Freelancers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4">
              <Briefcase className="mr-2 w-5 h-5" />
              Post a Project
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-gray-400 text-sm">Active Freelancers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">$2.5M+</div>
              <div className="text-gray-400 text-sm">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">48hr</div>
              <div className="text-gray-400 text-sm">Avg Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

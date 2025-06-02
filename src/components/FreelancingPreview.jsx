
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FreelancingPreview = () => {
  const freelancers = [
    {
      name: "Sarah Chen",
      skill: "AI/ML Engineer",
      rating: 4.9,
      projects: 47,
      hourlyRate: "$85",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9b02ba3?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      skill: "Full Stack Developer",
      rating: 4.8,
      projects: 32,
      hourlyRate: "$65",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Aisha Patel",
      skill: "UX/UI Designer",
      rating: 5.0,
      projects: 58,
      hourlyRate: "$75",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            Freelance Network
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Connect with <span className="text-purple-600">Top Talent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find skilled freelancers to bring your projects to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {freelancers.map((freelancer, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <img 
                  src={freelancer.avatar} 
                  alt={freelancer.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold text-lg mb-1">{freelancer.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{freelancer.skill}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{freelancer.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{freelancer.projects}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-3">
                  {freelancer.hourlyRate}<span className="text-sm text-gray-500">/hr</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
            <Link to="/freelancing">
              Explore All Freelancers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

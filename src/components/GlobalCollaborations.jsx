
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ArrowRight } from "lucide-react";

export const GlobalCollaborations = () => {
  const collaborations = [
    {
      region: "Asia Pacific",
      projects: 150,
      participants: "25K+",
      description: "Leading innovation in technology and sustainability",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f"
    },
    {
      region: "Europe",
      projects: 120,
      participants: "18K+",
      description: "Pioneering green technology and social impact",
      image: "https://images.unsplash.com/photo-1467987506553-8f3916508521"
    },
    {
      region: "Americas",
      projects: 200,
      participants: "30K+",
      description: "Driving healthcare and education innovations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            Global Network
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Worldwide <span className="text-blue-600">Collaborations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with innovators from every corner of the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={collab.image} 
                  alt={collab.region}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{collab.region}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{collab.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{collab.projects} Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="font-medium">{collab.participants}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group">
                  Explore Region
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Building2, GraduationCap, Users, ArrowRight, ExternalLink } from "lucide-react";

export const GlobalCollaborations = () => {
  const collaborations = [
    {
      name: "Stanford University",
      type: "Academic Partner",
      logo: "🏛️",
      description: "Leading AI and quantum research collaborations",
      projects: 45,
      country: "USA",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Microsoft",
      type: "Technology Partner",
      logo: "🏢",
      description: "Cloud infrastructure and AI platform support",
      projects: 78,
      country: "Global",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cambridge University",
      type: "Research Partner",
      logo: "🎓",
      description: "Biotechnology and sustainable development research",
      projects: 32,
      country: "UK",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Toyota Innovation Hub",
      type: "Industry Partner",
      logo: "🚗",
      description: "Mobility and automotive technology innovation",
      projects: 28,
      country: "Japan",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "IIT Bombay",
      type: "Academic Partner",
      logo: "🏛️",
      description: "Engineering innovation and startup incubation",
      projects: 56,
      country: "India",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "UN Sustainability Goals",
      type: "Global Initiative",
      logo: "🌍",
      description: "Sustainable development project alignment",
      projects: 89,
      country: "Global",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const stats = [
    { label: "Partner Universities", value: "150+", icon: GraduationCap },
    { label: "Corporate Partners", value: "200+", icon: Building2 },
    { label: "Countries", value: "50+", icon: Globe },
    { label: "Active Collaborations", value: "500+", icon: Users }
  ];

  return (
    <section id="collaborations" className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white animate-pulse">
            <Globe className="w-3 h-3 mr-1" />
            Global Network
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Worldwide{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Collaborations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges across continents to create a truly global innovation ecosystem
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {collaborations.map((partner, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <Badge variant="outline" className="text-xs mb-2">
                      {partner.type}
                    </Badge>
                    <div className="text-sm text-gray-500 mb-2">{partner.country}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    <span className="font-semibold text-blue-600">{partner.projects}</span> Active Projects
                  </span>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Globe className="mr-2 w-5 h-5" />
            Join Our Global Network
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

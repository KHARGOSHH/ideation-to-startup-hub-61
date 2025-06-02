
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Clock, Star, ArrowRight } from "lucide-react";

export const UpcomingPhase = () => {
  const phases = [
    {
      phase: "Phase 2.0",
      title: "AI-Powered Matching",
      description: "Advanced algorithms to connect you with perfect project partners",
      timeline: "Q2 2024",
      status: "In Development"
    },
    {
      phase: "Phase 3.0",
      title: "Virtual Reality Collaboration",
      description: "Immersive VR spaces for remote team collaboration",
      timeline: "Q3 2024",
      status: "Planning"
    },
    {
      phase: "Phase 4.0",
      title: "Blockchain Integration",
      description: "Secure, transparent project funding and IP protection",
      timeline: "Q4 2024",
      status: "Research"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Rocket className="w-3 h-3 mr-1" />
            Coming Soon
          </Badge>
          <h2 className="text-3xl font-bold text-white mb-4">
            Upcoming <span className="text-purple-400">Innovations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exciting new features and capabilities coming to the AMOGH platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-300">
                    {phase.phase}
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{phase.timeline}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <div className="flex items-center justify-between">
                  <Badge className={`${
                    phase.status === 'In Development' ? 'bg-green-600' :
                    phase.status === 'Planning' ? 'bg-yellow-600' : 'bg-blue-600'
                  }`}>
                    {phase.status}
                  </Badge>
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white">
            Stay Updated
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

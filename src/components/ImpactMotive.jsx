
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Lightbulb, Target } from "lucide-react";

export const ImpactMotive = () => {
  const impacts = [
    {
      icon: Globe,
      title: "Global Reach",
      value: "50+",
      description: "Countries connected through our platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Active Community",
      value: "100K+",
      description: "Innovators collaborating worldwide",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Projects Launched",
      value: "2.5K+",
      description: "Successful innovations brought to life",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Success Rate",
      value: "94%",
      description: "Project completion rate",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Our Impact
          </Badge>
          <h2 className="text-3xl font-bold text-white mb-4">
            Making a <span className="text-cyan-400">Difference</span> Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how our community is creating positive change across the globe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${impact.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <impact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{impact.value}</div>
                <div className="text-sm font-medium text-cyan-400 mb-2">{impact.title}</div>
                <div className="text-xs text-gray-400">{impact.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

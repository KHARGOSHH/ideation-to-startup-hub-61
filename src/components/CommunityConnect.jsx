
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export const CommunityConnect = () => {
  const features = [
    {
      icon: Users,
      title: "Join Communities",
      description: "Connect with like-minded innovators in your field of interest",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations and share knowledge",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Participate in virtual and physical networking events",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            Community
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Connect & <span className="text-cyan-600">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build meaningful relationships with innovators, entrepreneurs, and changemakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            Join Our Community
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

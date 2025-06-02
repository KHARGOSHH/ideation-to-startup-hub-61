
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Globe, Users, Lightbulb, Target } from "lucide-react";

export const WhatWeProvide = () => {
  const services = [
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Get your projects up and running quickly with our streamlined tools",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your intellectual property",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect with talent and opportunities from around the world",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to mentors, advisors, and industry experts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Tools",
      description: "Cutting-edge tools for ideation, prototyping, and development",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Success Tracking",
      description: "Analytics and insights to measure and optimize your impact",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We <span className="text-emerald-600">Provide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to turn your innovative ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Sun, Droplets, Wind, Globe } from "lucide-react";

const Sustainable = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Carbon Neutral Platform",
      description: "Our platform operates on 100% renewable energy",
      impact: "50% reduction in CO2",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Recycle,
      title: "Circular Economy Projects",
      description: "Supporting projects that promote reuse and recycling",
      impact: "1M+ items recycled",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sun,
      title: "Solar Innovation Hub",
      description: "Connecting solar energy innovators worldwide",
      impact: "500MW+ clean energy",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse">
            <Leaf className="w-4 h-4 mr-2" />
            Sustainability Focus
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Building a{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Sustainable
            </span>{" "}
            Future
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join our mission to create innovative solutions for environmental challenges 
            and build a more sustainable world for future generations.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            <Globe className="mr-2 w-5 h-5" />
            Explore Green Projects
          </Button>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Green Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading by example in environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <Badge className="bg-green-100 text-green-800">
                    {initiative.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Sustainable;

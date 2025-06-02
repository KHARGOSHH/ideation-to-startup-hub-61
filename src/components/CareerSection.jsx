
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp, Users, ArrowRight } from "lucide-react";

export const CareerSection = () => {
  const careers = [
    {
      title: "Software Engineer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Join our team to build innovative solutions that impact millions of users worldwide."
    },
    {
      title: "Product Manager",
      company: "InnovateLab",
      location: "San Francisco",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Lead product strategy and development for our cutting-edge platform."
    },
    {
      title: "UX Designer",
      company: "DesignStudio",
      location: "New York",
      type: "Contract",
      salary: "$70k - $100k",
      description: "Create beautiful and intuitive user experiences for our global audience."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            <Briefcase className="w-3 h-3 mr-1" />
            Career Opportunities
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Launch Your <span className="text-cyan-600">Career</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities with innovative companies in our network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {careers.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{career.type}</Badge>
                  <span className="text-sm text-gray-500">{career.location}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{career.title}</h3>
                <p className="text-cyan-600 font-medium mb-2">{career.company}</p>
                <p className="text-gray-600 text-sm mb-4">{career.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{career.salary}</span>
                  <Button size="sm" variant="outline">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            View All Opportunities
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

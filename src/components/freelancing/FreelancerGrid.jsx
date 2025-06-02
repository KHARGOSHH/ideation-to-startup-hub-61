
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, MapPin, Clock } from "lucide-react";

export const FreelancerGrid = () => {
  const freelancers = [
    {
      id: 1,
      name: "Alex Thompson",
      title: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "Python"],
      responseTime: "1 hour",
      completedProjects: 89
    },
    {
      id: 2,
      name: "Maria Garcia",
      title: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9b02ba3?w=100&h=100&fit=crop&crop=face",
      rating: 5.0,
      reviews: 95,
      hourlyRate: 75,
      location: "Barcelona, Spain",
      skills: ["Figma", "Sketch", "Adobe XD"],
      responseTime: "30 mins",
      completedProjects: 67
    },
    {
      id: 3,
      name: "David Kim",
      title: "Data Scientist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 84,
      hourlyRate: 95,
      location: "Seoul, South Korea",
      skills: ["Python", "TensorFlow", "R"],
      responseTime: "2 hours",
      completedProjects: 45
    },
    {
      id: 4,
      name: "Sophie Laurent",
      title: "Mobile App Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 80,
      location: "Paris, France",
      skills: ["React Native", "Flutter", "Swift"],
      responseTime: "45 mins",
      completedProjects: 112
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      title: "DevOps Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      reviews: 73,
      hourlyRate: 90,
      location: "Dubai, UAE",
      skills: ["AWS", "Docker", "Kubernetes"],
      responseTime: "1.5 hours",
      completedProjects: 38
    },
    {
      id: 6,
      name: "Emma Wilson",
      title: "Content Strategist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 102,
      hourlyRate: 65,
      location: "London, UK",
      skills: ["SEO", "Content Marketing", "Copywriting"],
      responseTime: "20 mins",
      completedProjects: 78
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured <span className="text-purple-600">Freelancers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with top-rated professionals ready to bring your projects to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer) => (
            <Card key={freelancer.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={freelancer.avatar} 
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{freelancer.name}</h3>
                    <p className="text-purple-600 font-medium">{freelancer.title}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center gap-1 mr-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-gray-500 text-sm">({freelancer.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{freelancer.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-600">Response time</span>
                    </div>
                    <span className="font-medium">{freelancer.responseTime}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-600">Projects</span>
                    </div>
                    <span className="font-medium">{freelancer.completedProjects}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-600">
                    ${freelancer.hourlyRate}
                    <span className="text-sm text-gray-500 font-normal">/hr</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Hire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

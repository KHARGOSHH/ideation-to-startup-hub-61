
import { Badge } from "@/components/ui/badge";

export const TrustedByLeaders = () => {
  const leaders = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=50&fit=crop" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=50&fit=crop" },
    { name: "FutureWorks", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=50&fit=crop" },
    { name: "GlobalTech", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=50&fit=crop" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop" },
    { name: "SmartSolutions", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=50&fit=crop" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            Trusted Partners
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-purple-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the companies and organizations already leveraging our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={leader.logo} 
                alt={leader.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "AI Health Monitor",
      description: "Revolutionary health tracking using AI and IoT sensors",
      price: "$299",
      rating: 4.8,
      users: "2.5K+",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
    },
    {
      id: 2,
      title: "EcoSmart Solutions",
      description: "Sustainable technology for environmental monitoring",
      price: "$199",
      rating: 4.9,
      users: "1.8K+",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 3,
      title: "EdTech Platform",
      description: "Next-generation learning management system",
      price: "$99",
      rating: 4.7,
      users: "5K+",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover innovative solutions created by our global community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <span className="font-bold text-lg text-blue-600">{product.price}</span>
                </div>
                <CardTitle className="mb-2">{product.title}</CardTitle>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{product.users}</span>
                  </div>
                </div>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

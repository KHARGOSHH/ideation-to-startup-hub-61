
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, ShoppingCart } from "lucide-react";

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "EcoTrack Pro",
      description: "Advanced carbon footprint tracking for businesses",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 127,
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "AI Health Assistant",
      description: "Personal health monitoring with AI recommendations",
      price: 199,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      title: "Smart Learning Platform",
      description: "Personalized education with adaptive learning",
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 234,
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      badge: "Popular"
    },
    {
      id: 4,
      title: "FinTech Dashboard",
      description: "Complete financial management solution",
      price: 399,
      originalPrice: null,
      rating: 4.8,
      reviews: 156,
      category: "Finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      badge: "Premium"
    },
    {
      id: 5,
      title: "IoT Smart Home Kit",
      description: "Complete home automation solution",
      price: 599,
      originalPrice: 799,
      rating: 4.6,
      reviews: 98,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      badge: "Sale"
    },
    {
      id: 6,
      title: "Social Impact Tracker",
      description: "Measure and optimize your social impact",
      price: 99,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      category: "Social Good",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      badge: "Featured"
    }
  ];

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <select className="px-4 py-2 border rounded-lg bg-white">
          <option>Sort by: Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <CardHeader className="p-0 relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {product.badge && (
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.badge === 'Sale' ? 'bg-red-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Best Seller' ? 'bg-purple-500' :
                    'bg-blue-500'
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{product.reviews}</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

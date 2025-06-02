
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";

export const FilterSidebar = () => {
  const categories = [
    { name: "Technology", count: 45 },
    { name: "Healthcare", count: 32 },
    { name: "Education", count: 28 },
    { name: "Sustainability", count: 24 },
    { name: "Finance", count: 19 },
    { name: "Social Good", count: 15 }
  ];

  const ratings = [
    { stars: 5, count: 89 },
    { stars: 4, count: 156 },
    { stars: 3, count: 67 },
    { stars: 2, count: 23 },
    { stars: 1, count: 8 }
  ];

  return (
    <div className="w-80 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                className="mb-3"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`category-${index}`} />
                  <label 
                    htmlFor={`category-${index}`} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                  >
                    {category.name}
                  </label>
                  <Badge variant="outline" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${index}`} />
                  <label 
                    htmlFor={`rating-${index}`} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                  >
                    {rating.stars} stars & up
                  </label>
                  <span className="text-xs text-gray-500">({rating.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Actions */}
          <div className="space-y-2 pt-4 border-t">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Apply Filters
            </Button>
            <Button variant="outline" className="w-full">
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

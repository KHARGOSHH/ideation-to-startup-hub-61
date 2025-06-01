
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AMOGH
              </span>
              <span className="text-xs text-gray-400 -mt-1">ever useful</span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex animate-pulse bg-gray-700 text-gray-200">Beta</Badge>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-300 hover:text-blue-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Marketplace
            </Link>
            <Link to="/freelancing" className="text-gray-300 hover:text-purple-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Freelancing
            </Link>
            <Link to="/sustainable" className="text-gray-300 hover:text-green-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Sustainable
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-pink-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Community
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/admin">
                <User className="w-4 h-4 mr-2" />
                Admin
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" asChild>
              <Link to="/signup">Join AMOGH</Link>
            </Button>
          </div>

          <button
            className="md:hidden transform transition-all duration-300 hover:scale-110 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/marketplace" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Marketplace
              </Link>
              <Link to="/freelancing" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                Freelancing
              </Link>
              <Link to="/sustainable" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                Sustainable
              </Link>
              <Link to="/community" className="text-gray-300 hover:text-pink-400 transition-colors font-medium">
                Community
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white justify-start">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white justify-start" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white justify-start" asChild>
                  <Link to="/admin">
                    <User className="w-4 h-4 mr-2" />
                    Admin
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link to="/signup">Join AMOGH</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AMOGH
              </span>
              <span className="text-xs text-gray-500 -mt-1">ever useful</span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex animate-pulse">Beta</Badge>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-gray-600 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
              Featured
            </a>
            <a href="#impact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium hover:scale-105 transform duration-200">
              Impact
            </a>
            <a href="#collaborations" className="text-gray-600 hover:text-green-600 transition-colors font-medium hover:scale-105 transform duration-200">
              Collaborations
            </a>
            <a href="#community" className="text-gray-600 hover:text-pink-600 transition-colors font-medium hover:scale-105 transform duration-200">
              Community
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium hover:scale-105 transform duration-200">
              How It Works
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="hover:scale-105 transition-all duration-300" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" asChild>
              <Link to="/signup">Join AMOGH</Link>
            </Button>
          </div>

          <button
            className="md:hidden transform transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#featured" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Featured
              </a>
              <a href="#impact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Impact
              </a>
              <a href="#collaborations" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Collaborations
              </a>
              <a href="#community" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">
                Community
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                How It Works
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" asChild>
                  <Link to="/signin">Sign In</Link>
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

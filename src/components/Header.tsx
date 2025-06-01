
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                AMOGH
              </span>
              <span className="text-xs text-slate-400 -mt-1">ever useful</span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex animate-pulse bg-slate-800 text-emerald-300 border-emerald-500/20">Beta</Badge>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Market
            </Link>
            <Link to="/freelancing" className="text-slate-300 hover:text-teal-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Work
            </Link>
            <Link to="/sustainable" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Green
            </Link>
            <Link to="/community" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium hover:scale-105 transform duration-200">
              Connect
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/80 hover:scale-105 transition-all duration-300">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/80 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/80 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/admin">
                <User className="w-4 h-4 mr-2" />
                Admin
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white" asChild>
              <Link to="/signup">Join</Link>
            </Button>
          </div>

          <button
            className="md:hidden transform transition-all duration-300 hover:scale-110 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/marketplace" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                Market
              </Link>
              <Link to="/freelancing" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
                Work
              </Link>
              <Link to="/sustainable" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">
                Green
              </Link>
              <Link to="/community" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Connect
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart
                </Button>
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start" asChild>
                  <Link to="/admin">
                    <User className="w-4 h-4 mr-2" />
                    Admin
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
                  <Link to="/signup">Join</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

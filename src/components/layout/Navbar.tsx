
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, BarChart3, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  // Close mobile menu
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ESGInsightify</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-8">
            <Link 
              to="/features" 
              className={`text-sm font-medium ${isActive('/features') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium ${isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium ${isActive('/about') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className={`text-sm font-medium ${isActive('/features') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`text-sm font-medium ${isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium ${isActive('/about') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/signin" 
                className="text-sm font-medium text-muted-foreground"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

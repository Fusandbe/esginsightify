
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronRight, 
  BarChart3, 
  Menu, 
  X, 
  Sparkles, 
  LogIn, 
  Rocket 
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  // Close mobile menu
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Add scroll detection for enhanced navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'border-b bg-background/80 backdrop-blur-md shadow-sm' 
        : 'bg-background border-b'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
            <div className="rounded-md bg-gradient-to-r from-primary to-primary/80 p-1.5 shadow-sm">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ESGInsightify</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-8">
            <Link 
              to="/features" 
              className={`relative text-sm font-medium ${
                isActive('/features') 
                  ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`relative text-sm font-medium ${
                isActive('/pricing') 
                  ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className={`relative text-sm font-medium ${
                isActive('/blog') 
                  ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`relative text-sm font-medium ${
                isActive('/about') 
                  ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-muted-foreground hover:text-foreground'
              } transition-colors`}
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-1">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-1">
                <Rocket className="h-4 w-4" />
                Request Demo
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
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
        <div className="border-b bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className={`text-sm font-medium flex items-center gap-2 ${isActive('/features') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                <Sparkles className="h-4 w-4" />
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`text-sm font-medium flex items-center gap-2 ${isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                <Sparkles className="h-4 w-4" />
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium flex items-center gap-2 ${isActive('/blog') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                <Sparkles className="h-4 w-4" />
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium flex items-center gap-2 ${isActive('/about') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                <Sparkles className="h-4 w-4" />
                About
              </Link>
              <Link 
                to="/demo" 
                className={`text-sm font-medium flex items-center gap-2 ${isActive('/demo') ? 'text-foreground' : 'text-muted-foreground'}`}
                onClick={closeMobileMenu}
              >
                <Rocket className="h-4 w-4" />
                Request Demo
              </Link>
              <Link 
                to="/signin" 
                className="text-sm font-medium text-muted-foreground flex items-center gap-2"
                onClick={closeMobileMenu}
              >
                <LogIn className="h-4 w-4" />
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

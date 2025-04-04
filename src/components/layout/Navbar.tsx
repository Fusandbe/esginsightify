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
  Rocket,
  Crown,
  BookOpen,
  Users,
  Diamond
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const closeMobileMenu = () => setMobileMenuOpen(false);

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
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled 
        ? 'py-2 border-b bg-background/80 backdrop-blur-xl shadow-sm' 
        : 'py-4 bg-transparent'
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-1.5 shadow-sm">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">EcoVest</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-8">
            <Link 
              to="/features" 
              className={cn(
                "relative text-sm font-medium group",
                isActive('/features') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Diamond className={cn(
                  "h-3.5 w-3.5 transition-colors duration-300",
                  isActive('/features') ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                Features
              </span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary transform origin-left transition-transform duration-300",
                isActive('/features') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/pricing" 
              className={cn(
                "relative text-sm font-medium group",
                isActive('/pricing') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Crown className={cn(
                  "h-3.5 w-3.5 transition-colors duration-300",
                  isActive('/pricing') ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                Pricing
              </span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary transform origin-left transition-transform duration-300",
                isActive('/pricing') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/blog" 
              className={cn(
                "relative text-sm font-medium group",
                isActive('/blog') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <BookOpen className={cn(
                  "h-3.5 w-3.5 transition-colors duration-300",
                  isActive('/blog') ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                Blog
              </span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary transform origin-left transition-transform duration-300",
                isActive('/blog') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "relative text-sm font-medium group",
                isActive('/about') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Users className={cn(
                  "h-3.5 w-3.5 transition-colors duration-300",
                  isActive('/about') ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                About
              </span>
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary transform origin-left transition-transform duration-300",
                isActive('/about') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-1.5 transition-all duration-300 hover:bg-primary/10">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-1.5 border-primary/20 bg-gradient-to-r from-background to-muted/50 hover:bg-accent/10 transition-all duration-300">
                <Rocket className="h-4 w-4 text-primary" />
                Request Demo
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-md hover:opacity-90 transition-all duration-300 group">
                Get Started <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full w-8 h-8" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b bg-background/95 backdrop-blur-xl md:hidden shadow-lg">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/features') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <Diamond className="h-4 w-4 text-primary" />
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/pricing') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <Crown className="h-4 w-4 text-primary" />
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/blog') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <BookOpen className="h-4 w-4 text-primary" />
                Blog
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/about') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <Users className="h-4 w-4 text-primary" />
                About
              </Link>
              <Link 
                to="/demo" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/demo') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <Rocket className="h-4 w-4 text-primary" />
                Request Demo
              </Link>
              <Link 
                to="/signin" 
                className={cn(
                  "text-sm font-medium flex items-center gap-2.5 p-2.5 rounded-lg transition-colors",
                  isActive('/signin') 
                    ? 'bg-primary/10 text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'
                )}
                onClick={closeMobileMenu}
              >
                <LogIn className="h-4 w-4 text-primary" />
                Sign In
              </Link>
              <div className="flex justify-center pt-2 pb-1">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

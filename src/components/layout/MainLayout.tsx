
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sparkles } from "lucide-react";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="esg-theme">
      <div className="flex min-h-screen flex-col relative overflow-hidden">
        {/* Premium background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-esg-green-500/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none animate-pulse"></div>
        
        <Navbar />
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
        <Footer />
        
        {/* Floating Theme Toggle for Mobile */}
        <div className="fixed bottom-4 right-4 md:hidden z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 shadow-lg border border-primary/20 backdrop-blur-xl bg-background/80 hover:bg-primary/10 transition-all duration-300"
              >
                <ThemeToggle variant="toggle" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-fit rounded-t-xl backdrop-blur-xl bg-background/90 border-t border-primary/10 shadow-2xl">
              <div className="py-6 flex justify-center">
                <ThemeToggle variant="button" />
              </div>
              <div className="text-center text-sm text-muted-foreground pb-4 flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-esg-amber-400" />
                <span>Change your visual experience</span>
                <Sparkles className="h-3.5 w-3.5 text-esg-amber-400" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;

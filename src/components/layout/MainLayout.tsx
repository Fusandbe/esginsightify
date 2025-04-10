
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeColorPicker } from "@/components/ui/theme-color-picker";
import { Sparkles } from "lucide-react";
import { CursorEffect } from "@/components/ui/cursor-effect";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" defaultColorTheme="default" storageKey="esg-theme">
      <div className="flex min-h-screen flex-col relative overflow-hidden">
        {/* Custom cursor effect */}
        <CursorEffect />
        
        {/* Luxury background decorations */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/3 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-esg-gold-500/3 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-[24rem] h-[24rem] bg-esg-burgundy-500/3 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none animate-pulse-slow"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-[15%] right-[20%] w-1 h-20 bg-primary/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-[25%] right-[15%] w-1 h-10 bg-primary/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-[35%] right-[25%] w-1 h-40 bg-primary/10 rounded-full pointer-events-none"></div>
        
        <div className="absolute bottom-[20%] left-[15%] w-1 h-24 bg-primary/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[30%] left-[20%] w-1 h-16 bg-primary/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[40%] left-[25%] w-1 h-32 bg-primary/10 rounded-full pointer-events-none"></div>
        
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
                className="rounded-full h-10 w-10 shadow-lg border border-primary/20 backdrop-blur-xl bg-background/80 hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
              >
                <ThemeToggle variant="toggle" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-fit rounded-t-xl backdrop-blur-xl bg-background/90 border-t border-primary/10 shadow-2xl">
              <div className="py-6 flex justify-center">
                <ThemeToggle variant="button" />
              </div>
              <div className="text-center text-sm text-muted-foreground pb-4 flex items-center justify-center gap-1.5 font-serif italic">
                <Sparkles className="h-3.5 w-3.5 text-esg-gold-400" />
                <span>Changer votre expérience visuelle</span>
                <Sparkles className="h-3.5 w-3.5 text-esg-gold-400" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Theme Color Picker */}
        <ThemeColorPicker />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;


import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="esg-theme">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        
        {/* Floating Theme Toggle for Mobile */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <ThemeToggle variant="toggle" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-fit rounded-t-xl">
              <div className="py-4 flex justify-center">
                <ThemeToggle variant="button" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;

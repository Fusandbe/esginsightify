
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="esg-theme">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;

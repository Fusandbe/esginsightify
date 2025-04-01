
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Menu, 
  X, 
  Home, 
  PieChart, 
  FileText, 
  Upload, 
  Users, 
  Settings,
  Bell,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
};

const NavItem = ({ icon, label, href, active, onClick }: NavItemProps) => (
  <Link
    to={href}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground"
        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="esg-theme">
      <div className="flex min-h-screen">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 transform border-r border-sidebar-border bg-sidebar transition-transform md:translate-x-0 md:static md:z-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
            <div className="rounded-md bg-sidebar-primary p-1">
              <BarChart3 className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">ESGInsightify</span>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-3 md:hidden"
              onClick={closeSidebar}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="py-4">
            <nav className="space-y-1 px-2">
              <NavItem
                icon={<Home className="h-4 w-4" />}
                label="Dashboard"
                href="/dashboard"
                active
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Users className="h-4 w-4" />}
                label="Portfolio"
                href="/dashboard/portfolio"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<PieChart className="h-4 w-4" />}
                label="ESG Analysis"
                href="/dashboard/esg-analysis"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<FileText className="h-4 w-4" />}
                label="Reports"
                href="/dashboard/reports"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Upload className="h-4 w-4" />}
                label="Documents"
                href="/dashboard/documents"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Settings className="h-4 w-4" />}
                label="Settings"
                href="/dashboard/settings"
                onClick={closeSidebar}
              />
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="ml-auto flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 rounded-full bg-muted pl-8"
                  />
                </div>
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;

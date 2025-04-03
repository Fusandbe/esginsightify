
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
  Search,
  Diamond,
  Crown,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

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
      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-all duration-200 group",
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    )}
  >
    <div className={cn(
      "flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary/10 transition-all duration-200",
      active ? "bg-sidebar-primary/20" : "group-hover:bg-sidebar-primary/15"
    )}>
      {icon}
    </div>
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
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-md md:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-72 transform border-r border-sidebar-border bg-sidebar transition-transform md:translate-x-0 md:static md:z-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
            <div className="rounded-xl bg-sidebar-primary p-1.5">
              <BarChart3 className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">ESGInsightify</span>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-3 rounded-full p-0 w-8 h-8 md:hidden"
              onClick={closeSidebar}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-sidebar-foreground/50" />
              <Input
                type="search"
                placeholder="Search..."
                className="border-sidebar-border bg-sidebar-accent/30 w-full pl-9 py-2 text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus-visible:ring-sidebar-primary/30"
              />
            </div>
          </div>
          
          <div className="py-4">
            <div className="px-4 mb-2">
              <p className="text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider mb-2 px-3">
                Main
              </p>
            </div>
            <nav className="space-y-1 px-2">
              <NavItem
                icon={<Home className="h-5 w-5 text-sidebar-primary" />}
                label="Dashboard"
                href="/dashboard"
                active
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Users className="h-5 w-5 text-sidebar-foreground/80" />}
                label="Portfolio"
                href="/dashboard/portfolio"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<PieChart className="h-5 w-5 text-sidebar-foreground/80" />}
                label="ESG Analysis"
                href="/dashboard/esg-analysis"
                onClick={closeSidebar}
              />
            </nav>
            
            <div className="px-4 my-4">
              <p className="text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider mb-2 px-3">
                Resources
              </p>
            </div>
            <nav className="space-y-1 px-2">
              <NavItem
                icon={<FileText className="h-5 w-5 text-sidebar-foreground/80" />}
                label="Reports"
                href="/dashboard/reports"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Upload className="h-5 w-5 text-sidebar-foreground/80" />}
                label="Documents"
                href="/dashboard/documents"
                onClick={closeSidebar}
              />
              <NavItem
                icon={<Settings className="h-5 w-5 text-sidebar-foreground/80" />}
                label="Settings"
                href="/dashboard/settings"
                onClick={closeSidebar}
              />
            </nav>
            
            <div className="absolute bottom-8 left-0 right-0 px-4">
              <div className="rounded-xl bg-sidebar-primary/10 p-4 mx-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-sidebar-primary/20 p-2">
                    <Crown className="h-5 w-5 text-sidebar-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-sidebar-foreground">Upgrade to Pro</h4>
                    <p className="text-xs text-sidebar-foreground/70 mt-0.5">Unlock all premium features</p>
                  </div>
                </div>
                <Button className="w-full mt-3 bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground">
                  <Diamond className="mr-2 h-4 w-4" />
                  Upgrade
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full w-9 h-9"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="ml-auto flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-64 rounded-full bg-muted pl-9 py-2"
                  />
                </div>
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="relative rounded-full w-9 h-9">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 rounded-full overflow-hidden flex gap-2 items-center pr-2">
                      <Avatar className="h-9 w-9 border border-primary/10">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block font-medium text-sm">John Doe</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 backdrop-blur-md bg-background/95 border-primary/10">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bell className="mr-2 h-4 w-4" />
                        <span>Notifications</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-6 md:p-8 relative overflow-hidden">
            {/* Premium background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full -translate-x-1/4 translate-y-1/3 blur-3xl pointer-events-none"></div>
            
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;

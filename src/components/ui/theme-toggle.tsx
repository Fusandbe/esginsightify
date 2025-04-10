
import { Moon, Sun, LaptopIcon } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({ variant = "button" }: { variant?: "button" | "toggle" }) {
  const { theme, setTheme } = useTheme();

  if (variant === "toggle") {
    return (
      <Toggle
        aria-label="Toggle theme"
        pressed={theme === "dark"}
        onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="data-[state=on]:bg-muted rounded-full w-9 h-9 p-0 flex items-center justify-center"
      >
        {theme === "dark" ? 
          <Moon className="h-4 w-4 transition-all duration-300 rotate-0" /> : 
          <Sun className="h-4 w-4 transition-all duration-300 rotate-90" />
        }
      </Toggle>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="luxury"
          size="icon"
          className="focus-visible:ring-primary/30 relative overflow-hidden group rounded-full w-9 h-9 border border-primary/20 hover:border-primary/40"
          aria-label="Toggle theme"
        >
          <Sun className="h-[18px] w-[18px] transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-primary" />
          <Moon className="absolute h-[18px] w-[18px] transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-primary" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="backdrop-blur-xl bg-background/95 border-primary/10 shadow-luxury rounded-xl">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 cursor-pointer focus:bg-accent/5">
          <Sun className="h-4 w-4 text-esg-gold-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 cursor-pointer focus:bg-accent/5">
          <Moon className="h-4 w-4 text-primary" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 cursor-pointer focus:bg-accent/5">
          <LaptopIcon className="h-4 w-4 text-esg-blue-500" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

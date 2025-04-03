
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
        className="data-[state=on]:bg-muted"
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Toggle>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="focus-visible:ring-primary/30 relative overflow-hidden group"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 transition-transform scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
          <Moon className="absolute h-5 w-5 transition-transform scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="backdrop-blur-sm bg-background/95 border-primary/20">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 cursor-pointer">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 cursor-pointer">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 cursor-pointer">
          <LaptopIcon className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

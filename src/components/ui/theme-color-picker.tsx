
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

type ColorOption = {
  name: string;
  value: "default" | "purple" | "charcoal" | "navy" | "emerald" | "ruby";
  color: string;
  description: string;
};

const colorOptions: ColorOption[] = [
  {
    name: "Default",
    value: "default",
    color: "bg-[#16a34a]",
    description: "Classic green accent"
  },
  {
    name: "Purple",
    value: "purple",
    color: "bg-[#7c3aed]",
    description: "Rich purple accent"
  },
  {
    name: "Charcoal",
    value: "charcoal",
    color: "bg-[#334155]",
    description: "Deep charcoal accent"
  },
  {
    name: "Navy",
    value: "navy",
    color: "bg-[#1e40af]",
    description: "Bold navy accent"
  },
  {
    name: "Emerald",
    value: "emerald",
    color: "bg-[#059669]",
    description: "Vibrant emerald accent"
  },
  {
    name: "Ruby",
    value: "ruby",
    color: "bg-[#b91c1c]",
    description: "Elegant ruby accent"
  }
];

export function ThemeColorPicker() {
  const { colorTheme, setColorTheme } = useTheme();

  return (
    <div className="fixed bottom-16 right-4 z-50">
      <div className="relative group">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-10 w-10 shadow-lg border border-primary/20 backdrop-blur-xl bg-background/80 hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
          aria-label="Change color theme"
        >
          <Palette className="h-4 w-4 text-primary" />
        </Button>
        
        {/* Color Picker Popup */}
        <div className="absolute bottom-full mb-2 right-0 origin-bottom-right scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          <div className="p-4 rounded-xl backdrop-blur-xl bg-background/90 border border-primary/10 shadow-xl min-w-48">
            <div className="text-center mb-3 text-sm font-medium">Theme Colors</div>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setColorTheme(option.value)}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg transition-all duration-300 border hover:border-primary/30 hover:bg-primary/5",
                    colorTheme === option.value ? "border-primary/50 bg-primary/10" : "border-transparent"
                  )}
                  title={option.description}
                >
                  <span className={cn(
                    "w-6 h-6 rounded-full mb-1",
                    option.color
                  )} />
                  <span className="text-xs">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
type ColorTheme = "default" | "purple" | "charcoal" | "navy" | "emerald" | "ruby";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
  colorStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  colorTheme: "default",
  setTheme: () => null,
  setColorTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultColorTheme = "default",
  storageKey = "esg-theme",
  colorStorageKey = "esg-color-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () => (localStorage.getItem(colorStorageKey) as ColorTheme) || defaultColorTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("light", "dark");
    
    // Apply light/dark mode
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    // Remove all color theme classes
    root.classList.remove("theme-default", "theme-purple", "theme-charcoal", "theme-navy", "theme-emerald", "theme-ruby");
    
    // Apply color theme
    root.classList.add(`theme-${colorTheme}`);
    
    // Store preferences
    localStorage.setItem(storageKey, theme);
    localStorage.setItem(colorStorageKey, colorTheme);
  }, [theme, colorTheme, storageKey, colorStorageKey]);

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => setTheme(theme),
    setColorTheme: (colorTheme: ColorTheme) => setColorTheme(colorTheme),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

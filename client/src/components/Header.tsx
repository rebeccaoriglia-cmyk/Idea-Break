import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-4">
          <svg width="42" height="42" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path 
              d="M10 46 C18 52, 26 52, 34 46 C42 40, 50 40, 58 46" 
              stroke="hsl(var(--primary))" 
              strokeWidth="3" 
              fill="none"
            />
            <path 
              d="M20 46 L32 24 L44 46 Z" 
              stroke="hsl(var(--primary) / 0.6)" 
              fill="none" 
              strokeWidth="3"
            />
          </svg>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Creative Break
          </h1>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Attiva modalità scura" : "Attiva modalità chiara"}
          data-testid="button-theme-toggle"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}

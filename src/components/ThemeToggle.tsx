
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full transition-colors duration-200 ease-in-out hover:bg-accent"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-200 ease-in-out dark:rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-200 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

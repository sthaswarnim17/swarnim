
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="rounded-full transition-all duration-300 ease-in-out hover:bg-accent hover:scale-110 relative overflow-hidden"
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
        theme === "dark" 
          ? "rotate-90 scale-0 opacity-0" 
          : "rotate-0 scale-100 opacity-100"
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
        theme === "dark" 
          ? "rotate-0 scale-100 opacity-100" 
          : "-rotate-90 scale-0 opacity-0"
      }`} />
    </Button>
  );
}

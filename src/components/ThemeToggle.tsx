
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely show the button
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-gray-800 transition-all" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-300 transition-all" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;

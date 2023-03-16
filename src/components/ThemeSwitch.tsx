import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  //Avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // set default theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="absolute top-20">
      <button
        onClick={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {currentTheme === "dark" ? (
          <SunIcon className="w-20 text-yellow-200" />
        ) : (
          <MoonIcon className="w-20 text-indigo-500" />
        )}
      </button>
    </div>
  );
}

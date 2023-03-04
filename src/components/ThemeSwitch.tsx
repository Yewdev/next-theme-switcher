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
        className="flex items-center gap-2 rounded-3xl border-2 border-gray-600 py-2 px-4 text-black dark:border-gray-300 dark:text-white"
      >
        {currentTheme === "dark" ? (
          <SunIcon className="w-12 text-yellow-200" />
        ) : (
          <MoonIcon className="w-12 text-indigo-800" />
        )}
        <span className=" uppercase ">
          {theme === "dark" ? "switch to light mode" : "switch to dark mode"}
        </span>
      </button>
    </div>
  );
}

// src/components/ThemeToggle.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // optional icons

const ThemeToggle: React.FC = () => {
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;

  return (
    <button
      onClick={themeCtx.toggleTheme}
      className="flex rounded-full px-6 bg-gray-200 dark:bg-gray-700 p-2 transition"
    >
      {themeCtx.theme === "light" ? (
        <>
          <Moon size={18} /> 
        </>
      ) : (
        <>
          <Sun size={18} /> 
        </>
      )}
    </button>
  );
};

export default ThemeToggle;

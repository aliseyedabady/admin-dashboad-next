"use client";

import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();

  return {
    theme,
    setTheme,
    systemTheme,
    toggleTheme: () => {
      setTheme(theme === "dark" ? "light" : "dark");
    },
  };
}

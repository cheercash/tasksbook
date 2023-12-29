import { useEffect } from "react";
import { Theme } from "../api/type";

const switchHandler = (currentTheme: Theme) => {
  const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = darkThemeQuery.matches;

  if (currentTheme === "DARK") {
    document.documentElement.classList.add("dark");
  } else if (currentTheme === "LIGHT") {
    document.documentElement.classList.remove("dark");
  } else {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
};

export const useTheme = (currentTheme: Theme) => {
  useEffect(() => {
    switchHandler(currentTheme);

    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const lightThemeQuery = window.matchMedia("(prefers-color-scheme: light)");

    darkThemeQuery.addEventListener("change", () =>
      switchHandler(currentTheme),
    );
    lightThemeQuery.addEventListener("change", () =>
      switchHandler(currentTheme),
    );

    return () => {
      darkThemeQuery.removeEventListener("change", () =>
        switchHandler(currentTheme),
      );
      lightThemeQuery.removeEventListener("change", () =>
        switchHandler(currentTheme),
      );
    };
  }, [currentTheme]);
};

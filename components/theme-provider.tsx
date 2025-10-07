"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { useTheme } from "next-themes";
import {
  applyColorScheme,
  applyDarkModeColors,
  getColorScheme,
  getCurrentColorScheme,
} from "@/lib/colors";

// Component to handle dark mode color updates
function DarkModeHandler() {
  const { theme, resolvedTheme } = useTheme();
  const [currentScheme, setCurrentScheme] = React.useState<string>("premium");

  React.useEffect(() => {
    // Always use premium theme
    const scheme = "premium";
    setCurrentScheme(scheme);
    // Apply initial colors
    applyColorScheme(scheme as any);
  }, []);

  React.useEffect(() => {
    if (currentScheme) {
      const themeConfig = getColorScheme(currentScheme as any);

      // Use requestAnimationFrame to ensure DOM updates are processed
      requestAnimationFrame(() => {
        if (resolvedTheme === "dark") {
          applyDarkModeColors(themeConfig);
        } else {
          // Apply light mode colors when not in dark mode
          applyColorScheme(currentScheme as any);
        }
      });
    }
  }, [resolvedTheme, currentScheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <DarkModeHandler />
      {children}
    </NextThemesProvider>
  );
}

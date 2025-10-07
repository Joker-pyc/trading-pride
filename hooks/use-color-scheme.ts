"use client";

import { useState, useEffect } from 'react';
import { ColorScheme, applyColorScheme, getCurrentColorScheme, DEFAULT_COLOR_SCHEME, applyDarkModeColors, getColorScheme } from '@/lib/colors';
import { useTheme } from 'next-themes';

export function useColorScheme() {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>('premium');
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Always apply premium theme
    setCurrentScheme('premium');
    applyColorScheme('premium');
  }, []);

  // Handle dark mode changes
  useEffect(() => {
    if (mounted) {
      if (resolvedTheme === 'dark') {
        const themeConfig = getColorScheme('premium');
        applyDarkModeColors(themeConfig);
      } else {
        applyColorScheme('premium');
      }
    }
  }, [resolvedTheme, mounted]);

  const changeColorScheme = (scheme: ColorScheme) => {
    // Only allow premium theme
    setCurrentScheme('premium');
    applyColorScheme('premium');
  };

  return {
    currentScheme: 'premium',
    changeColorScheme,
    mounted,
  };
}

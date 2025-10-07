// Unified Color System for Trading Pride
// This file contains all color schemes and allows instant theme switching

export type ColorScheme = 'premium';

export interface ColorTheme {
  name: string;
  description: string;
  primary: {
    light: string;
    dark: string;
  };
  accent: {
    light: string;
    dark: string;
  };
  background: {
    light: string;
    dark: string;
  };
  surface: {
    light: string;
    dark: string;
  };
  text: {
    light: string;
    dark: string;
  };
  border: {
    light: string;
    dark: string;
  };
  shadow: {
    light: string;
    dark: string;
  };
}

export const colorThemes: Record<ColorScheme, ColorTheme> = {
  premium: {
    name: 'Premium Navy & Gold',
    description: 'Luxurious navy blue and gold theme for premium trading experience',
    primary: {
      light: 'oklch(0.4 0.15 240)', // Rich navy blue
      dark: 'oklch(0.5 0.18 240)', // Brighter navy for dark mode
    },
    accent: {
      light: 'oklch(0.55 0.12 240)', // Rich blue accent
      dark: 'oklch(0.6 0.14 240)', // Bright blue accent
    },
    background: {
      light: 'oklch(0.99 0.005 240)', // Very light navy-tinted white
      dark: 'oklch(0.08 0.02 240)', // Very dark navy
    },
    surface: {
      light: 'oklch(1 0.005 240)', // Pure white with navy tint
      dark: 'oklch(0.12 0.02 240)', // Dark navy surface
    },
    text: {
      light: 'oklch(0.15 0.02 240)', // Very dark navy text
      dark: 'oklch(0.95 0.01 240)', // Light blue-tinted text
    },
    border: {
      light: 'oklch(0.85 0.01 240)', // Light navy borders
      dark: 'oklch(0.25 0.03 240)', // Blue-tinted borders
    },
    shadow: {
      light: 'oklch(0.4 0.15 240 / 0.1)', // Navy shadow
      dark: 'oklch(0.5 0.18 240 / 0.2)', // Brighter navy shadow
    },
  },
};

// Default color scheme
export const DEFAULT_COLOR_SCHEME: ColorScheme = 'premium';

// Utility functions for color management
export const getColorScheme = (scheme: ColorScheme): ColorTheme => {
  return colorThemes[scheme];
};

export const applyColorScheme = (scheme: ColorScheme) => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const theme = getColorScheme(scheme);
  const root = document.documentElement;

  // Apply ALL base Tailwind variables for light mode
  root.style.setProperty('--background', theme.background.light);
  root.style.setProperty('--foreground', theme.text.light);
  root.style.setProperty('--card', theme.surface.light);
  root.style.setProperty('--card-foreground', theme.text.light);
  root.style.setProperty('--popover', theme.surface.light);
  root.style.setProperty('--popover-foreground', theme.text.light);
  root.style.setProperty('--primary', theme.primary.light);
  root.style.setProperty('--primary-foreground', theme.background.light);
  root.style.setProperty('--secondary', theme.surface.light);
  root.style.setProperty('--secondary-foreground', theme.text.light);
  root.style.setProperty('--muted', theme.surface.light);
  root.style.setProperty('--muted-foreground', theme.text.light);
  root.style.setProperty('--accent', theme.accent.light);
  root.style.setProperty('--accent-foreground', theme.text.light);
  root.style.setProperty('--border', theme.border.light);
  root.style.setProperty('--input', theme.border.light);
  root.style.setProperty('--ring', theme.primary.light);
  root.style.setProperty('--chart-1', theme.primary.light);
  root.style.setProperty('--chart-2', theme.accent.light);
  root.style.setProperty('--chart-3', theme.primary.light);
  root.style.setProperty('--chart-4', theme.accent.light);
  root.style.setProperty('--chart-5', theme.primary.light);
  root.style.setProperty('--sidebar', theme.surface.light);
  root.style.setProperty('--sidebar-foreground', theme.text.light);
  root.style.setProperty('--sidebar-primary', theme.primary.light);
  root.style.setProperty('--sidebar-primary-foreground', theme.background.light);
  root.style.setProperty('--sidebar-accent', theme.surface.light);
  root.style.setProperty('--sidebar-accent-foreground', theme.text.light);
  root.style.setProperty('--sidebar-border', theme.border.light);
  root.style.setProperty('--sidebar-ring', theme.primary.light);

  // Update unified color variables for light mode
  root.style.setProperty('--color-primary', theme.primary.light);
  root.style.setProperty('--color-accent', theme.accent.light);
  root.style.setProperty('--color-background', theme.background.light);
  root.style.setProperty('--color-surface', theme.surface.light);
  root.style.setProperty('--color-text', theme.text.light);
  root.style.setProperty('--color-border', theme.border.light);
  root.style.setProperty('--color-shadow', theme.shadow.light);
  root.style.setProperty('--color-shadow-hover', theme.shadow.dark);
  root.style.setProperty('--color-gradient-start', theme.shadow.light);
  root.style.setProperty('--color-gradient-end', theme.shadow.dark);

  // Store current scheme for dark mode switching
  root.setAttribute('data-color-scheme', scheme);
};

// Helper function to apply dark mode colors
export const applyDarkModeColors = (theme: ColorTheme) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;

  // Apply ALL base Tailwind variables for dark mode
  root.style.setProperty('--background', theme.background.dark);
  root.style.setProperty('--foreground', theme.text.dark);
  root.style.setProperty('--card', theme.surface.dark);
  root.style.setProperty('--card-foreground', theme.text.dark);
  root.style.setProperty('--popover', theme.surface.dark);
  root.style.setProperty('--popover-foreground', theme.text.dark);
  root.style.setProperty('--primary', theme.primary.dark);
  root.style.setProperty('--primary-foreground', theme.background.dark);
  root.style.setProperty('--secondary', theme.surface.dark);
  root.style.setProperty('--secondary-foreground', theme.text.dark);
  root.style.setProperty('--muted', theme.surface.dark);
  root.style.setProperty('--muted-foreground', theme.text.dark);
  root.style.setProperty('--accent', theme.accent.dark);
  root.style.setProperty('--accent-foreground', theme.text.dark);
  root.style.setProperty('--border', theme.border.dark);
  root.style.setProperty('--input', theme.border.dark);
  root.style.setProperty('--ring', theme.primary.dark);
  root.style.setProperty('--chart-1', theme.primary.dark);
  root.style.setProperty('--chart-2', theme.accent.dark);
  root.style.setProperty('--chart-3', theme.primary.dark);
  root.style.setProperty('--chart-4', theme.accent.dark);
  root.style.setProperty('--chart-5', theme.primary.dark);
  root.style.setProperty('--sidebar', theme.surface.dark);
  root.style.setProperty('--sidebar-foreground', theme.text.dark);
  root.style.setProperty('--sidebar-primary', theme.primary.dark);
  root.style.setProperty('--sidebar-primary-foreground', theme.background.dark);
  root.style.setProperty('--sidebar-accent', theme.surface.dark);
  root.style.setProperty('--sidebar-accent-foreground', theme.text.dark);
  root.style.setProperty('--sidebar-border', theme.border.dark);
  root.style.setProperty('--sidebar-ring', theme.primary.dark);

  // Update unified color variables for dark mode
  root.style.setProperty('--color-primary', theme.primary.dark);
  root.style.setProperty('--color-accent', theme.accent.dark);
  root.style.setProperty('--color-background', theme.background.dark);
  root.style.setProperty('--color-surface', theme.surface.dark);
  root.style.setProperty('--color-text', theme.text.dark);
  root.style.setProperty('--color-border', theme.border.dark);
  root.style.setProperty('--color-shadow', theme.shadow.dark);
  root.style.setProperty('--color-shadow-hover', theme.shadow.light);
  root.style.setProperty('--color-gradient-start', theme.shadow.dark);
  root.style.setProperty('--color-gradient-end', theme.shadow.light);
};

export const getCurrentColorScheme = (): ColorScheme => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return DEFAULT_COLOR_SCHEME;
  }

  const root = document.documentElement;
  return (root.getAttribute('data-color-scheme') as ColorScheme) || DEFAULT_COLOR_SCHEME;
};

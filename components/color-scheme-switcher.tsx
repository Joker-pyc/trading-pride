"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ColorSchemeSwitcher() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-xl transition-all duration-500 hover:bg-accent hover:scale-105"
      style={{
        boxShadow:
          "3px 3px 8px var(--color-shadow), -3px -3px 8px var(--color-surface)",
      }}
      title="Premium Navy & Gold Theme"
    >
      <Sparkles className="h-4 w-4" />
      <span className="sr-only">Premium Navy & Gold Theme</span>
    </Button>
  );
}

"use client";

import { startThemeCircleTransition } from "@/lib/theme-transition";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      title="Toggle theme"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        startThemeCircleTransition(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }}
    >
      🌓
    </button>
  );
}

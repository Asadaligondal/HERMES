"use client";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      title="Toggle theme"
      onClick={() => {
        const isLight = document.documentElement.classList.toggle("light");
        localStorage.setItem("hermes-theme", isLight ? "light" : "dark");
      }}
    >
      🌓
    </button>
  );
}

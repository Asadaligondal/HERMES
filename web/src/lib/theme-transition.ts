const DARK_OVERRIDE = `
  ::view-transition-old(root) {
    z-index: 2 !important;
    animation: theme-circle-collapse 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
  }
  ::view-transition-new(root) { z-index: 1 !important; animation: none !important; }
`;

/**
 * Toggles our existing `.light` class on <html> (same mechanism as before —
 * no color/class-scheme changes), wrapped in a View Transition so the switch
 * animates as a circle expanding/collapsing from the click point instead of
 * an instant flip. Falls back to the old instant toggle where unsupported.
 */
export function startThemeCircleTransition(clientX: number, clientY: number) {
  const root = document.documentElement;
  const goingToLight = !root.classList.contains("light");

  const applyTheme = () => {
    root.classList.toggle("light", goingToLight);
    localStorage.setItem("hermes-theme", goingToLight ? "light" : "dark");
  };

  root.style.setProperty("--vt-x", `${clientX}px`);
  root.style.setProperty("--vt-y", `${clientY}px`);

  const startViewTransition = (document as Document & {
    startViewTransition?: (callback: () => void) => { finished: Promise<void> };
  }).startViewTransition;

  if (typeof startViewTransition !== "function") {
    applyTheme();
    return;
  }

  let override: HTMLStyleElement | null = null;
  if (!goingToLight) {
    override = document.createElement("style");
    override.textContent = DARK_OVERRIDE;
    document.head.appendChild(override);
  }

  const transition = startViewTransition.call(document, applyTheme);
  transition.finished.finally(() => override?.remove());
}

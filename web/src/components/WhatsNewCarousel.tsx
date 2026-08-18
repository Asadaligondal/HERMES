"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const ENTRIES = [
  {
    date: "Aug 17",
    title: "Redesigned login & signup",
    desc: "A new split-panel design with a real Slack sign-in button, a glass card, and an animated gradient.",
    preview: <LoginPreview />,
  },
  {
    date: "Aug 16",
    title: "Circle-reveal theme toggle",
    desc: "Switching between light and dark now animates as a circle expanding from the toggle button.",
    preview: <ThemePreview />,
  },
  {
    date: "Aug 16",
    title: "Tightened up the layout",
    desc: "Narrower centered content column across every page, and less visual clutter in the page headers.",
    preview: <LayoutPreview />,
  },
];

function LoginPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0f0907" }}>
      <div
        style={{
          position: "absolute",
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#f97316,#fbbf24)",
          filter: "blur(22px)",
          opacity: 0.65,
          top: -20,
          left: -20,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#dc2626,#f97316)",
          filter: "blur(20px)",
          opacity: 0.6,
          bottom: -15,
          right: -10,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "22px 18px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 12,
          backdropFilter: "blur(6px)",
        }}
      />
    </div>
  );
}

function ThemePreview() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
      <div style={{ flex: 1, background: "#18181b" }} />
      <div style={{ flex: 1, background: "#fafafa" }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#d1c2f4",
          border: "2px solid #fff",
        }}
      />
    </div>
  );
}

function LayoutPreview() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "var(--color-secondary)", display: "flex", justifyContent: "center", padding: "14px 26px" }}>
      <div style={{ width: "100%", background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: 8, padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ height: 8, width: "60%", background: "var(--color-highlight)", borderRadius: 4, opacity: 0.7 }} />
        <div style={{ height: 20, background: "var(--color-secondary)", borderRadius: 4 }} />
        <div style={{ height: 20, background: "var(--color-secondary)", borderRadius: 4 }} />
      </div>
    </div>
  );
}

export function WhatsNewCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ENTRIES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const entry = ENTRIES[index];

  return (
    <>
      <div className="whatsnew-header-row">
        <div>
          <h2 className="dash-section-title">Recently shipped</h2>
          <div className="dash-section-desc" style={{ margin: "4px 0 0" }}>
            New features, improvements, and fixes shipped to Hermes.
          </div>
        </div>
        <div className="whatsnew-nav">
          <button
            className="icon-btn"
            type="button"
            title="Previous"
            onClick={() => setIndex((i) => (i - 1 + ENTRIES.length) % ENTRIES.length)}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="icon-btn"
            type="button"
            title="Next"
            onClick={() => setIndex((i) => (i + 1) % ENTRIES.length)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="whatsnew-card">
        <div className="whatsnew-preview">{entry.preview}</div>
        <div className="whatsnew-body">
          <div className="whatsnew-date">{entry.date}</div>
          <div className="whatsnew-title">{entry.title}</div>
          <div className="whatsnew-desc">{entry.desc}</div>
        </div>
      </div>

      <div className="whatsnew-dots">
        {ENTRIES.map((e, i) => (
          <button
            key={e.title}
            type="button"
            className={`whatsnew-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            title={e.title}
          />
        ))}
      </div>
    </>
  );
}

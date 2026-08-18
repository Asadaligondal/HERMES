"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CloseIcon, ZapIcon } from "@/components/icons";

type Automation = {
  title: string;
  desc: string;
  detail: string;
  logos: string[];
  more: number;
};

const AUTOMATIONS: Automation[] = [
  {
    title: "Daily standup digest",
    desc: "Summarize yesterday's activity across Slack, Notion, and Linear each morning.",
    detail:
      "Every weekday morning, Hermes checks Notion and Linear for what changed since yesterday and posts a short standup-ready summary to Slack — updated tickets, new docs, and anything blocking the team. Skips posting on days with no activity.",
    logos: ["slack", "notion", "linear"],
    more: 2,
  },
  {
    title: "Meeting prep brief",
    desc: "Pull relevant docs and context from your tools before your next meeting.",
    detail:
      "Before each meeting on your calendar, Hermes gathers related docs from Drive and Notion plus recent email threads, and posts a short prep brief 15 minutes ahead of time — no more scrambling for context right before a call.",
    logos: ["googledrive", "notion", "gmail"],
    more: 2,
  },
  {
    title: "Weekly integration digest",
    desc: "Turn a week of activity across your tools into one Slack summary.",
    detail:
      "Every Friday afternoon, Hermes rolls up the week's activity across Slack, GitHub, and Linear into one digest — merged PRs, closed issues, and key discussion threads — posted straight to your team channel.",
    logos: ["slack", "github", "linear"],
    more: 1,
  },
];

export function AutomationsSection() {
  const router = useRouter();
  const [open, setOpen] = useState<Automation | null>(null);

  return (
    <>
      <div className="grid grid-3">
        {AUTOMATIONS.map((automation) => (
          <button
            key={automation.title}
            type="button"
            className="automation-card-clickable"
            onClick={() => setOpen(automation)}
          >
            <div className="card">
              <div className="automation-card-title">
                <span className="row-title">{automation.title}</span>
                <span className="badge badge-icon">
                  <ZapIcon /> Works with your tools
                </span>
              </div>
              <div className="automation-desc">{automation.desc}</div>
              <div className="automation-tools">
                {automation.logos.map((slug) => (
                  <img key={slug} src={`/logos/${slug}.svg`} alt="" width={22} height={22} style={{ borderRadius: 4 }} />
                ))}
                {automation.more > 0 && <span className="automation-tools-more">+{automation.more} more</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn modal-close" type="button" onClick={() => setOpen(null)} title="Close">
              <CloseIcon />
            </button>
            <div className="modal-eyebrow">Task template</div>
            <div className="modal-logos">
              {open.logos.map((slug) => (
                <div className="logo-badge" key={slug}>
                  <img src={`/logos/${slug}.svg`} alt="" />
                </div>
              ))}
            </div>
            <h2 className="modal-title">{open.title}</h2>
            <p className="modal-desc">{open.detail}</p>
            <button
              className="btn btn-primary btn-block"
              type="button"
              onClick={() => router.push("/tasks")}
            >
              Set up task
            </button>
          </div>
        </div>
      )}
    </>
  );
}

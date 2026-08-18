"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CheckIcon } from "@/components/icons";

const TOOL_LOGOS = ["slack", "notion", "linear", "github", "figma"];

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSlackContinue() {
    setLoading(true);
    // No real Slack OAuth — reuses our existing sign-in stub with a placeholder identity.
    await signIn("credentials", { name: "Slack User", email: "you@slack-workspace.test", redirect: false });
    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <div className="auth-split">
      <div className="auth-panel-brand">
        <div className="sidebar-brand">HERMES</div>

        <div className="auth-glow" />
        <div className="auth-blob auth-blob-1" />
        <div className="auth-blob auth-blob-2" />
        <div className="auth-blob auth-blob-3" />

        <div className="glass-card">
          <p className="glass-quote">
            An AI teammate connected to all your tools, right inside Slack — a low-friction way to get
            the whole team working with AI.
          </p>
          <div className="glass-checklist">
            <div className="glass-checklist-item">
              <CheckIcon />
              <span>
                Add Hermes to Slack
                <span className="glass-tool-icons">
                  <img src="/logos/slack.svg" alt="" />
                </span>{" "}
                — no card, live in minutes
              </span>
            </div>
            <div className="glass-checklist-item">
              <CheckIcon />
              <span>
                Hermes connects your tools
                <span className="glass-tool-icons">
                  {TOOL_LOGOS.map((slug) => (
                    <img key={slug} src={`/logos/${slug}.svg`} alt="" />
                  ))}
                </span>{" "}
                and onboards itself
              </span>
            </div>
            <div className="glass-checklist-item">
              <CheckIcon />
              <span>Then Hermes gets it done</span>
            </div>
          </div>
        </div>

        <div className="brand-footer-tag">Nous Research</div>
      </div>

      <div className="auth-panel-form">
        <div className="auth-panel-form-top">
          <ThemeToggle />
        </div>
        <div className="auth-panel-form-body">
          <h1 className="auth-heading">Get started with Hermes.</h1>

          <button className="auth-cta" type="button" onClick={handleSlackContinue} disabled={loading}>
            <img src="/logos/slack.svg" alt="" />
            {loading ? "Continuing…" : "Continue with Slack"}
          </button>

          <div className="auth-divider">or</div>

          <button className="auth-cta" type="button">
            Book a demo
          </button>

          <div className="auth-divider">No credit card required</div>

          <div className="auth-footer-link" style={{ marginTop: 0 }}>
            Already have an account? <Link href="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

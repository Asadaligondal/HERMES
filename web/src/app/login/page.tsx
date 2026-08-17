"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CheckIcon } from "@/components/icons";

const TOOL_LOGOS = ["slack", "notion", "linear", "github", "figma"];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [slackLoading, setSlackLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", { email, password, redirect: false });

    setLoading(false);
    if (res?.error) {
      setError("Incorrect email or password.");
      return;
    }
    router.push("/dashboard");
  }

  async function handleSlackContinue() {
    setSlackLoading(true);
    await signIn("credentials", { name: "Slack User", email: "you@slack-workspace.test", redirect: false });
    setSlackLoading(false);
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

        <div className="brand-footer-tag">Nous Research · Messenger of the Digital Gods</div>
      </div>

      <div className="auth-panel-form">
        <div className="auth-panel-form-top">
          <ThemeToggle />
        </div>
        <div className="auth-panel-form-body">
          <h1 className="auth-heading">Welcome back.</h1>

          <button className="auth-cta" type="button" onClick={handleSlackContinue} disabled={slackLoading}>
            <img src="/logos/slack.svg" alt="" />
            {slackLoading ? "Continuing…" : "Continue with Slack"}
          </button>

          <div className="auth-divider">or</div>

          {error && <div className="form-error" style={{ maxWidth: 380, width: "100%" }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 380, textAlign: "left" }}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? "Logging in…" : "Log in with email"}
            </button>
          </form>

          <div className="auth-footer-link">
            Don&apos;t have an account? <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

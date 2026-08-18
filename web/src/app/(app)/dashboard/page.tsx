import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { AutomationsSection } from "@/components/AutomationsSection";
import { WhatsNewCarousel } from "@/components/WhatsNewCarousel";
import { ActivityIcon, CalendarIcon, CpuIcon, PlugIcon, ToolIcon } from "@/components/icons";

function TasksDoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 0-4 4v1.5A2.5 2.5 0 0 0 5.5 10 2.5 2.5 0 0 0 8 12.5V14a4 4 0 0 0 8 0v-1.5A2.5 2.5 0 0 0 18.5 10 2.5 2.5 0 0 0 16 7.5V6a4 4 0 0 0-4-4z" />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <div className="main">
      <PageHeader title="Dashboard">
        <ThemeToggle />
      </PageHeader>
      <div className="content">
        <div className="content-inner">
          <div className="grid grid-4" style={{ marginBottom: 20 }}>
            <div className="card">
              <div className="metric-card-top">
                <div className="metric-label">Active Sessions</div>
                <span className="metric-icon">
                  <ActivityIcon />
                </span>
              </div>
              <div className="metric-value">1</div>
            </div>
            <div className="card">
              <div className="metric-card-top">
                <div className="metric-label">Models Used</div>
                <span className="metric-icon">
                  <CpuIcon />
                </span>
              </div>
              <div className="metric-value">1</div>
            </div>
            <div className="card">
              <div className="metric-card-top">
                <div className="metric-label">Integrations Connected</div>
                <span className="metric-icon">
                  <PlugIcon />
                </span>
              </div>
              <div className="metric-value">0 / 38</div>
            </div>
            <div className="card">
              <div className="metric-card-top">
                <div className="metric-label">Skills Installed</div>
                <span className="metric-icon">
                  <ToolIcon />
                </span>
              </div>
              <div className="metric-value">72</div>
            </div>
          </div>

          <div className="card">
            <div className="setup-card-header">
              <div>
                <div className="setup-card-title">Get Hermes up to speed</div>
                <div className="setup-card-desc">
                  Complete the core setup steps so Hermes is fully ready for your workspace.
                </div>
              </div>
              <div className="setup-progress-count">
                <TasksDoneIcon />1 / 3 tasks done
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "33%" }} />
            </div>

            <div className="setup-row">
              <div className="setup-thumb" style={{ background: "linear-gradient(135deg,#a78bfa,#f472b6)" }}>
                <PlugIcon />
              </div>
              <div className="setup-row-body">
                <div className="setup-row-title">
                  Connect your first channel <span className="badge">0 / 5 integrations</span>
                </div>
                <div className="setup-row-desc">Slack, Discord, Telegram, WhatsApp…</div>
              </div>
              <a className="btn btn-primary" href="/integrations">
                Connect
              </a>
            </div>

            <div className="setup-row">
              <div className="setup-thumb" style={{ background: "linear-gradient(135deg,#34d399,#22d3ee)" }}>
                <CpuIcon />
              </div>
              <div className="setup-row-body">
                <div className="setup-row-title">Set a default model</div>
                <div className="setup-row-desc">solar-pro4:free is currently active</div>
              </div>
              <span className="badge on">done</span>
            </div>

            <div className="setup-row">
              <div className="setup-thumb" style={{ background: "linear-gradient(135deg,#fb923c,#fbbf24)" }}>
                <CalendarIcon />
              </div>
              <div className="setup-row-body">
                <div className="setup-row-title">
                  Schedule your first task <span className="badge">0 / 1 tasks</span>
                </div>
                <div className="setup-row-desc">Recurring jobs run on their own</div>
              </div>
              <a className="btn btn-primary" href="/tasks">
                Create
              </a>
            </div>
          </div>

          <div className="dash-section-header">
            <h2 className="dash-section-title">Recommended automations</h2>
            <a className="dash-section-link" href="/tasks">
              View all
            </a>
          </div>
          <div className="dash-section-desc">Automate your workspace by running repeatable tasks on schedule.</div>
          <AutomationsSection />

          <WhatsNewCarousel />
        </div>
      </div>
    </div>
  );
}

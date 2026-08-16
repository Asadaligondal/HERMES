import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLinkIcon, RefreshIcon, ShieldIcon } from "@/components/icons";

type Provider = {
  name: string;
  connected: boolean;
  tags: string[];
  detail: string;
  cli?: string;
};

const PROVIDERS: Provider[] = [
  {
    name: "Nous Portal",
    connected: true,
    tags: ["Device code", "Connected", "expires in 9h"],
    detail: "token _3Gujnw · https://portal.nousresearch.com",
  },
  {
    name: "ChatGPT or Codex Subscription",
    connected: false,
    tags: ["Device code"],
    detail: "Not connected. Use Login when available, or run in a terminal.",
    cli: "hermes auth add openai-codex",
  },
  {
    name: "Qwen (via Qwen CLI)",
    connected: false,
    tags: ["External CLI"],
    detail: "Not connected. Use Login when available, or run in a terminal.",
    cli: "hermes auth add qwen-oauth",
  },
  {
    name: "Anthropic API Key",
    connected: false,
    tags: ["Browser login (PKCE)"],
    detail: "Not connected. Use Login when available, or run in a terminal.",
    cli: "hermes auth add anthropic",
  },
];

export default function KeysPage() {
  return (
    <div className="main">
      <PageHeader title="Keys">
        <div className="pills" style={{ marginBottom: 0 }}>
          <div className="pill active">OAuth</div>
          <div className="pill">Providers</div>
          <div className="pill">Tools</div>
          <div className="pill">Gateway</div>
          <div className="pill">Settings</div>
        </div>
        <ThemeToggle />
      </PageHeader>

      <div className="content">
        <div className="content-inner">
          <div style={{ marginBottom: 20 }}>
            <div className="row-title" style={{ fontWeight: 400 }}>
              Manage API keys and secrets stored in <span className="cli-chip">~/.hermes/.env</span>
            </div>
            <div className="row-sub" style={{ marginTop: 6 }}>
              Changes are saved to disk immediately. Active sessions pick up new keys automatically.
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ShieldIcon />
                <div className="setup-card-title">Provider logins (OAuth)</div>
              </div>
              <button className="icon-btn" title="Refresh">
                <RefreshIcon />
              </button>
            </div>
            <div className="setup-card-desc" style={{ marginBottom: 4 }}>
              2 of 8 OAuth providers connected. Use Login for dashboard-supported flows; CLI commands
              remain available for external or fallback setup.
            </div>

            {PROVIDERS.map((provider) => (
              <div className="provider-row" key={provider.name}>
                <div className="provider-left">
                  <span className={`provider-icon${provider.connected ? " connected" : ""}`}>
                    <ShieldIcon />
                  </span>
                  <div>
                    <div className="provider-name-row">
                      <span className="row-title">{provider.name}</span>
                      {provider.tags.map((tag) => (
                        <span className={`badge${tag === "Connected" ? " on" : ""}`} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="provider-desc">{provider.detail}</div>
                    {provider.cli && <div className="cli-chip">{provider.cli}</div>}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <button className="icon-btn" title="Open">
                    <ExternalLinkIcon />
                  </button>
                  {provider.connected ? (
                    <button className="btn">Disconnect</button>
                  ) : (
                    <button className="btn btn-primary">Login</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="section-title">LLM Providers</div>
          <div className="row-sub" style={{ marginBottom: 12 }}>
            0 of 16 providers configured
          </div>
        </div>
      </div>
    </div>
  );
}

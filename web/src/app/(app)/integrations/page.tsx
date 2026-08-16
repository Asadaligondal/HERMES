import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { BrandLogo } from "@/components/BrandLogo";

function TelegramLogo() {
  return (
    <div className="logo-badge" style={{ background: "#229ED9" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12.5 19 6l-2.3 13c-.15.85-.9 1.05-1.45.65l-4-3-2 1.9-.4-3.5L16 8.8 8.5 13l-4.2-1.3c-.9-.3-.9-1 .2-1.2z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function DiscordLogo() {
  return (
    <div className="logo-badge" style={{ background: "#5865F2" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="6" fill="#fff" />
        <circle cx="9.5" cy="12" r="1.6" fill="#5865F2" />
        <circle cx="14.5" cy="12" r="1.6" fill="#5865F2" />
      </svg>
    </div>
  );
}

function ComfyLogo() {
  return (
    <div className="logo-badge" style={{ background: "#7C3AED" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6} strokeLinecap="round">
        <circle cx="6" cy="7" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="14" r="2" />
        <circle cx="18" cy="19" r="2" />
        <line x1="7.5" y1="8.3" x2="10.5" y2="12.5" />
        <line x1="16.5" y1="7.3" x2="13.3" y2="12.5" />
        <line x1="13" y1="15.8" x2="16.7" y2="17.8" />
      </svg>
    </div>
  );
}

function BrowserLogo({ background }: { background: string }) {
  return (
    <div className="logo-badge" style={{ background }}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <circle cx="6" cy="6.5" r="0.6" fill="#fff" stroke="none" />
        <circle cx="8.5" cy="6.5" r="0.6" fill="#fff" stroke="none" />
      </svg>
    </div>
  );
}

function FirecrawlLogo() {
  return (
    <div className="logo-badge" style={{ background: "#F97316" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.5-2-1-2.5 2 1 3 3.5 3 5.5a6 6 0 1 1-12 0c0-4 3-5 3-8 0-1 .5-1.5 1-2z" />
      </svg>
    </div>
  );
}

function IntegrationCard({
  logo,
  name,
  desc,
  action,
}: {
  logo: React.ReactNode;
  name: string;
  desc: string;
  action: React.ReactNode;
}) {
  return (
    <div className="card">
      <div className="card-header">
        {logo}
        <div className="row-title">{name}</div>
      </div>
      <div
        className="row-sub"
        style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-muted)", marginTop: 6 }}
      >
        {desc}
      </div>
      <div style={{ marginTop: 12 }}>{action}</div>
    </div>
  );
}

const CONNECT_BTN = <button className="btn btn-primary">Connect</button>;

const APPS = [
  { slug: "figma", name: "Figma", desc: "Read design files, comments, and prototypes via the Figma API." },
  { slug: "github", name: "GitHub", desc: "Read issues, PRs, and repo activity; open and comment on PRs." },
  { slug: "gmail", name: "Gmail", desc: "Read, draft, and send email through your connected Gmail account." },
  { slug: "googleads", name: "Google Ads", desc: "Pull campaign performance and manage ad groups." },
  { slug: "googledrive", name: "Google Drive", desc: "Search, read, and organize files and folders in Drive." },
  { slug: "hubspot", name: "HubSpot", desc: "Look up contacts, deals, and pipeline activity." },
  { slug: "intercom", name: "Intercom", desc: "Read and reply to customer conversations." },
  { slug: "linear", name: "Linear", desc: "Find, create, and update issues, projects, and comments." },
  { slug: "meta", name: "Meta", desc: "Manage and report on Meta (Facebook/Instagram) ad campaigns." },
  { slug: "notion", name: "Notion", desc: "Search and edit pages and databases in your workspace." },
  { slug: "quickbooks", name: "QuickBooks", desc: "Read invoices, expenses, and account balances." },
  { slug: "salesforce", name: "Salesforce", desc: "Look up and update leads, contacts, and opportunities." },
  { slug: "shopify", name: "Shopify", desc: "Read orders, inventory, and customer activity." },
  { slug: "stripe", name: "Stripe", desc: "Look up payments, subscriptions, and customer billing." },
  { slug: "vercel", name: "Vercel", desc: "Check deployments, logs, and project status." },
  { slug: "zendesk", name: "Zendesk", desc: "Read and respond to support tickets." },
];

export default function IntegrationsPage() {
  return (
    <div className="main">
      <PageHeader title="Integrations">
        <ThemeToggle />
        <button className="btn">+ Add custom</button>
      </PageHeader>
      <div className="content">
        <div className="content-inner">
          <div className="search" style={{ maxWidth: 320, marginBottom: 8 }}>
            🔍 <input placeholder="Search integrations…" />
          </div>
          <div className="pills">
            <div className="pill active">All</div>
            <div className="pill">Channels</div>
            <div className="pill">Apps</div>
            <div className="pill">MCP Servers</div>
            <div className="pill">Plugins</div>
          </div>

          <div className="section-title">Channels</div>
          <div className="grid grid-3">
            <IntegrationCard
              logo={<TelegramLogo />}
              name="Telegram"
              desc="Run Hermes from Telegram DMs, groups, and topics."
              action={<span className="badge off">Disabled</span>}
            />
            <IntegrationCard
              logo={<BrandLogo slug="slack" />}
              name="Slack"
              desc="Use Hermes from Slack via Socket Mode."
              action={<span className="badge off">Disabled</span>}
            />
            <IntegrationCard
              logo={<DiscordLogo />}
              name="Discord"
              desc="Connect Hermes to Discord DMs, channels, and threads."
              action={<span className="badge off">Disabled</span>}
            />
          </div>

          <div className="section-title">Apps</div>
          <div className="grid grid-3">
            {APPS.map((app) => (
              <IntegrationCard
                key={app.slug}
                logo={<BrandLogo slug={app.slug} />}
                name={app.name}
                desc={app.desc}
                action={CONNECT_BTN}
              />
            ))}
          </div>

          <div className="section-title">MCP Servers</div>
          <div className="grid grid-3">
            <IntegrationCard
              logo={<ComfyLogo />}
              name="comfy-cloud"
              desc="Generate images, video, and 3D on Comfy Cloud."
              action={<button className="btn btn-primary">Install</button>}
            />
          </div>

          <div className="section-title">Plugins</div>
          <div className="grid grid-3">
            <IntegrationCard
              logo={<BrowserLogo background="#18181b" />}
              name="browser-use"
              desc="Browser Use cloud browser backend."
              action={<span className="badge off">Inactive</span>}
            />
            <IntegrationCard
              logo={<BrowserLogo background="#0EA5E9" />}
              name="browserbase"
              desc="Stealth, proxies, keep-alive sessions."
              action={<span className="badge off">Inactive</span>}
            />
            <IntegrationCard
              logo={<FirecrawlLogo />}
              name="firecrawl"
              desc="Firecrawl web scraping backend."
              action={<span className="badge off">Inactive</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

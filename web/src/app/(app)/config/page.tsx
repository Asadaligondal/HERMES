import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { CodeIcon, DownloadIcon, ResetIcon, SearchIcon, UploadIcon } from "@/components/icons";

const SECTIONS = [
  { name: "General", count: 22, active: true },
  { name: "Agent", count: 80 },
  { name: "Terminal", count: 28 },
  { name: "Display", count: 79 },
  { name: "Delegation", count: 14 },
  { name: "Memory", count: 5 },
  { name: "Compression", count: 29 },
  { name: "Security", count: 28 },
  { name: "Browser", count: 19 },
  { name: "Voice", count: 13 },
  { name: "Logging", count: 3 },
  { name: "Gateway", count: 18 },
  { name: "Database", count: 3 },
];

const GENERAL_FIELDS = [
  { label: "Model", desc: "Default model (e.g. anthropic/claude-sonnet-4.6)", value: "upstage/solar-pro4:free" },
  { label: "Model Context Length", desc: "Context window override (0 = auto-detect from model metadata)", value: "0" },
  { label: "Toolsets", desc: "Toolsets", value: "hermes-cli" },
  { label: "Max Live Sessions", desc: "Max Live Sessions", value: "16" },
  { label: "File Read Max Chars", desc: "File Read Max Chars", value: "100000" },
];

export default function ConfigPage() {
  return (
    <div className="main">
      <PageHeader title="Config">
        <div className="search" style={{ maxWidth: 220 }}>
          <SearchIcon />
          <input placeholder="Search…" />
        </div>
        <ThemeToggle />
      </PageHeader>

      <div className="content">
        <div className="content-inner">
          <div className="path-bar">
            <input type="text" readOnly defaultValue="C:\Users\victus\AppData\Local\hermes\config.yaml" />
            <button className="icon-btn" title="Download">
              <DownloadIcon />
            </button>
            <button className="icon-btn" title="Upload">
              <UploadIcon />
            </button>
            <button className="icon-btn" title="Reset">
              <ResetIcon />
            </button>
            <button className="btn">
              <CodeIcon /> YAML
            </button>
            <button className="btn btn-primary">Save</button>
          </div>

          <div className="config-layout">
            <div className="filter-list">
              <div className="chat-side-label">Sections</div>
              {SECTIONS.map((section) => (
                <div className={`filter-item${section.active ? " active" : ""}`} key={section.name}>
                  {section.name}
                  <span className="count">{section.count}</span>
                </div>
              ))}
            </div>

            <div className="config-fields">
              <div className="card">
                <div className="setup-card-title" style={{ marginBottom: 18 }}>
                  General
                </div>
                {GENERAL_FIELDS.map((field) => (
                  <div className="config-field" key={field.label}>
                    <div className="config-field-label">{field.label}</div>
                    <div className="config-field-desc">{field.desc}</div>
                    <input type="text" defaultValue={field.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

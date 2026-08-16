import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { BrandLogo } from "@/components/BrandLogo";

const SKILLS = [
  { name: "airtable", desc: "Airtable REST API via curl. Records CRUD, filters, upserts.", logo: "airtable" },
  { name: "claude-code", desc: "Delegate coding to Claude Code CLI (features, PRs)." },
  { name: "codebase-inspection", desc: "Inspect codebases w/ pygount: LOC, languages, ratios." },
  { name: "blogwatcher", desc: "Monitor blogs and RSS/Atom feeds via blogwatcher-cli tool." },
  { name: "architecture-diagram", desc: "Dark-themed SVG architecture/cloud/infra diagrams as HTML." },
  { name: "arxiv", desc: "Search arXiv papers by keyword, author, category, or ID." },
];

export default function SkillsPage() {
  return (
    <div className="main">
      <PageHeader
        title={
          <>
            Skills <span className="badge" style={{ marginLeft: 8 }}>72/72 enabled</span>
          </>
        }
      >
        <ThemeToggle />
        <button className="btn">✦ Learn a skill</button>
        <button className="btn btn-primary">+ New skill</button>
      </PageHeader>
      <div className="content">
        <div className="content-inner">
          <div className="search" style={{ maxWidth: 320, marginBottom: 18 }}>
            🔍 <input placeholder="Search skills…" />
          </div>
          <div className="pills">
            <div className="pill active">All (72)</div>
            <div className="pill">Productivity (17)</div>
            <div className="pill">Software Development (10)</div>
            <div className="pill">Creative (16)</div>
            <div className="pill">Research (6)</div>
            <div className="pill">Github (7)</div>
          </div>

          <div className="grid grid-3">
            {SKILLS.map((skill) => (
              <div className="card" key={skill.name}>
                {skill.logo ? (
                  <div className="card-header">
                    <BrandLogo slug={skill.logo} />
                    <div className="row-title">{skill.name}</div>
                  </div>
                ) : (
                  <div className="row-title">{skill.name}</div>
                )}
                <div
                  className="row-sub"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-muted)", marginTop: 6 }}
                >
                  {skill.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";

export default function SessionsPage() {
  return (
    <div className="main">
      <PageHeader title="Sessions">
        <ThemeToggle />
        <button className="btn">⤒ Import sessions</button>
      </PageHeader>
      <div className="content">
        <div className="content-inner">
          <div className="grid grid-4" style={{ marginBottom: 22 }}>
            <div className="card">
              <div className="metric-label">Total</div>
              <div className="metric-value">1</div>
            </div>
            <div className="card">
              <div className="metric-label">Active in store</div>
              <div className="metric-value">1</div>
            </div>
            <div className="card">
              <div className="metric-label">Archived</div>
              <div className="metric-value">0</div>
            </div>
            <div className="card">
              <div className="metric-label">Messages</div>
              <div className="metric-value">2</div>
            </div>
          </div>

          <div className="pills">
            <div className="pill active">Chats</div>
            <div className="pill">Automation</div>
            <div className="pill">All</div>
          </div>

          <div className="search" style={{ maxWidth: 320, marginBottom: 16 }}>
            🔍 <input placeholder="Search message content…" />
          </div>

          <div className="row-list">
            <div className="row">
              <div>
                <div className="row-title">Friendly greeting</div>
                <div className="row-sub">solar-pro4:free · 2 msgs · 2m ago</div>
              </div>
              <span className="badge on">live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

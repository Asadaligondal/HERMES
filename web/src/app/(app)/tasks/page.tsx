import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";

export default function TasksPage() {
  return (
    <div className="main">
      <PageHeader title="Tasks">
        <ThemeToggle />
        <button className="btn btn-primary">+ New task</button>
      </PageHeader>
      <div className="content">
        <div className="content-inner">
          <div className="pills">
            <div className="pill active">Jobs</div>
            <div className="pill">Blueprints</div>
          </div>
          <div className="empty-state">
            <div style={{ fontSize: 28 }}>◷</div>
            <div>
              <div className="row-title">No tasks scheduled yet</div>
              <div className="row-sub" style={{ marginTop: 6 }}>
                Recurring jobs run automatically on their own cadence.
              </div>
            </div>
            <button className="btn btn-primary">+ New task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

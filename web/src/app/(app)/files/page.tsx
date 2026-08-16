import { ThemeToggle } from "@/components/ThemeToggle";
import { PageHeader } from "@/components/PageHeader";
import { FolderIcon, RefreshIcon, TrashIcon, UploadIcon } from "@/components/icons";

const CURRENT_PATH = "C:\\Users\\victus";

const ENTRIES = [
  { name: ".claude", modified: "16 Aug 2026, 14:05" },
  { name: ".config", modified: "2 May 2026, 04:57" },
  { name: ".cursor", modified: "21 Jun 2026, 12:18" },
  { name: ".docker", modified: "16 Aug 2026, 14:03" },
  { name: ".hermes", modified: "2 Aug 2026, 02:27" },
  { name: ".hermes_backup", modified: "1 Aug 2026, 21:19" },
  { name: "Downloads", modified: "15 Aug 2026, 20:30" },
  { name: "Desktop", modified: "10 Aug 2026, 09:12" },
];

export default function FilesPage() {
  return (
    <div className="main">
      <PageHeader
        title={
          <>
            Files <span className="badge" style={{ marginLeft: 8, fontWeight: 400 }}>{CURRENT_PATH}</span>
          </>
        }
      >
        <ThemeToggle />
        <button className="icon-btn" title="Refresh">
          <RefreshIcon />
        </button>
      </PageHeader>

      <div className="content">
        <div className="content-inner">
          <div className="path-bar">
            <input type="text" defaultValue={CURRENT_PATH} />
            <button className="btn">GO</button>
            <button className="btn">
              <UploadIcon /> Upload
            </button>
            <button className="btn btn-primary">+ Create</button>
          </div>

          <div className="dropzone">
            <div className="dropzone-left">
              <div className="dropzone-icon">
                <UploadIcon />
              </div>
              <div>
                <div className="dropzone-title">Drop files here</div>
                <div className="dropzone-sub">{CURRENT_PATH}</div>
              </div>
            </div>
            <button className="btn">Choose files</button>
          </div>

          <div className="file-table">
            <div className="file-table-head">
              <div>Name</div>
              <div>Size</div>
              <div>Modified</div>
              <div>Actions</div>
            </div>
            <div className="file-row">
              <div className="file-name">↑ ..</div>
              <div className="file-meta" />
              <div className="file-meta" />
              <div />
            </div>
            {ENTRIES.map((entry) => (
              <div className="file-row" key={entry.name}>
                <div className="file-name">
                  <FolderIcon />
                  {entry.name}
                </div>
                <div className="file-meta">—</div>
                <div className="file-meta">{entry.modified}</div>
                <div className="file-actions">
                  <button className="icon-btn" title="Delete">
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

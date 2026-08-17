import { LogoutButton } from "@/components/LogoutButton";

export function PageHeader({ title, children }: { title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <h1>{title}</h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {children}
          {/* Temporary — easy way back to login/signup while testing */}
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

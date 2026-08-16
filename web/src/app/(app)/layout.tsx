import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Sidebar } from "@/components/Sidebar";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  // No DB right now — derive a stand-in workspace name instead of looking one up.
  const displayName = session.user.name || session.user.email || "You";
  const workspaceName = `${displayName}'s Workspace`;

  return (
    <div className="shell">
      <Sidebar workspaceName={workspaceName} userName={session.user.name ?? ""} userEmail={session.user.email ?? ""} />
      {children}
    </div>
  );
}

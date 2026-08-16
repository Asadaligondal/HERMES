import { prisma } from "@/lib/prisma";

function slugify(base: string) {
  return `${base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

/** Creates a fresh workspace for a brand-new user and makes them its OWNER. */
export async function createWorkspaceForUser(userId: string, displayName: string) {
  const name = `${displayName}'s Workspace`;
  return prisma.workspace.create({
    data: {
      name,
      slug: slugify(displayName || "workspace"),
      members: {
        create: { userId, role: "OWNER", status: "ACTIVE" },
      },
    },
  });
}

/**
 * Returns the first active workspace a user belongs to. Single-workspace-per-user
 * for now — the workspace switcher UI is stubbed until multi-workspace is needed.
 */
export async function getActiveWorkspace(userId: string) {
  const membership = await prisma.workspaceMember.findFirst({
    where: { userId, status: "ACTIVE" },
    include: { workspace: true },
    orderBy: { createdAt: "asc" },
  });
  return membership?.workspace ?? null;
}

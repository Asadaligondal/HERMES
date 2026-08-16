"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChatIcon,
  CalendarIcon,
  FolderIcon,
  GearIcon,
  HomeIcon,
  KeyIcon,
  ListIcon,
  PlugIcon,
  SearchIcon,
  ToolIcon,
} from "@/components/icons";
import { AccountMenu } from "@/components/AccountMenu";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/chat", label: "Chat", icon: ChatIcon },
  { href: "/sessions", label: "Sessions", icon: ListIcon },
  { href: "/files", label: "Files", icon: FolderIcon },
  { href: "/tasks", label: "Tasks", icon: CalendarIcon },
  { href: "/skills", label: "Skills", icon: ToolIcon },
  { href: "/integrations", label: "Integrations", icon: PlugIcon },
  { href: "/config", label: "Config", icon: GearIcon },
  { href: "/keys", label: "Keys", icon: KeyIcon },
];

export function Sidebar({
  workspaceName,
  userName,
  userEmail,
}: {
  workspaceName: string;
  userName: string;
  userEmail: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand-row">
        <div className="sidebar-brand">HERMES</div>
        <button className="icon-btn" title="Search" type="button">
          <SearchIcon />
        </button>
      </div>

      <nav className="nav-group">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link key={href} href={href} className={`nav-item${active ? " active" : ""}`}>
              <span className="icon">
                <Icon />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>

      <AccountMenu workspaceName={workspaceName} userName={userName} userEmail={userEmail} />
    </aside>
  );
}

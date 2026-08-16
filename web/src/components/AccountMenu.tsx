"use client";

import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";

export function AccountMenu({
  workspaceName,
  userName,
  userEmail,
}: {
  workspaceName: string;
  userName: string;
  userEmail: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const initial = (userName || userEmail || "H").charAt(0).toUpperCase();

  return (
    <div className="sidebar-footer" ref={ref}>
      {open && (
        <div className="account-menu">
          <div className="account-menu-workspace">{workspaceName}</div>
          <button type="button" className="account-menu-item disabled" disabled>
            Switch workspace (only one for now)
          </button>
          <button type="button" className="account-menu-item">
            Profile
          </button>
          <button
            type="button"
            className="account-menu-item danger"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Sign out
          </button>
        </div>
      )}
      <button type="button" className="profile-row" onClick={() => setOpen((v) => !v)}>
        <div className="profile-avatar">{initial}</div>
        <div>
          <div className="profile-name">{userName || userEmail}</div>
          <div className="profile-sub">{workspaceName}</div>
        </div>
      </button>
    </div>
  );
}

"use client";

import { signOut } from "next-auth/react";

// Temporary — just for easily getting back to the login/signup pages while testing.
export function LogoutButton() {
  return (
    <button type="button" className="btn" onClick={() => signOut({ callbackUrl: "/login" })}>
      Log out
    </button>
  );
}

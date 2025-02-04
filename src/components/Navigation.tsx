"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function Navigation() {
  const [user] = useAuthState(auth);
  const pathname = usePathname();

  const navItems = [
    { href: "/board", label: "Board" },
    { href: "/members", label: "Members" },
    { href: "/labels", label: "Labels" },
  ];

  return (
    <nav className="flex flex-col gap-4 p-4 border-r border-border-primary sm:w-48">
      <h2 className="text-xl font-semibold text-heading">TaskFlow</h2>

      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 text-sm rounded-lg ${
              pathname.startsWith(item.href)
                ? "bg-accent-primary/10 text-accent-primary"
                : "text-text-body hover:bg-card-hover"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-border-primary">
        {user ? (
          <div className="flex items-center gap-2 p-2 text-sm text-text-body">
            <span className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center">
              👤
            </span>
            <span className="truncate">{user.email}</span>
          </div>
        ) : (
          <Link
            href="/signin"
            className="flex items-center gap-2 p-2 text-sm text-text-body hover:bg-card-hover rounded-lg"
          >
            <span className="w-6 h-6 rounded-full bg-accent-primary/10 flex items-center justify-center">
              🔒
            </span>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

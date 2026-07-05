"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, BarChart2, TrendingUp, BookOpen } from "lucide-react";

const nav = [
  { href: "/routines",  label: "Daily Routines",  icon: Calendar },
  { href: "/portfolios",label: "Portfolios",       icon: BarChart2 },
  { href: "/analyst",   label: "Analyst",          icon: TrendingUp },
  { href: "/logger",    label: "Logger",           icon: BookOpen },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside
      className="w-56 flex-shrink-0 flex flex-col py-6 px-3 border-r"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      <div className="px-3 mb-8">
        <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
          Fred Dashboard
        </span>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>LLM Wiki</p>
      </div>

      <nav className="flex flex-col gap-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = path.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                backgroundColor: active ? "rgba(99,102,241,0.15)" : "transparent",
                color: active ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

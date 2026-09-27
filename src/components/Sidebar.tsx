"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHome, FaUser, FaBriefcase, FaTrophy, FaFolder } from "react-icons/fa";
import { Moon, Globe, ChevronDown } from "lucide-react";

type NavLink = { href: string; label: string; icon: typeof FaHome };
type NavParent = { label: string; icon: typeof FaHome; children: { href: string; label: string }[] };
type NavItem = NavLink | NavParent;

const NAV: NavItem[] = [
  { href: "/", label: "Beranda", icon: FaHome },
  { href: "/tentang", label: "Tentang", icon: FaUser },
  { href: "/portofolio", label: "Portofolio", icon: FaBriefcase },
  {
    label: "Resources",
    icon: FaFolder,
    children: [
      { href: "/resources", label: "Overview" },
      { href: "/resources/snippets", label: "Snippets" },
      { href: "/resources/templates", label: "Templates" },
      { href: "/resources/tools", label: "Tools" },
    ],
  },
  { href: "/sertifikat", label: "Sertifikat", icon: FaTrophy },
  { href: "/kontak", label: "Kontak", icon: FaEnvelope },
];

const SOCIAL = [
  { href: "https://github.com/satrialfata", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/satrianuralfatapanca", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://instagram.com/satrialfata", icon: FaInstagram, label: "Instagram" },
  { href: "mailto:satriadev@gmail.com", icon: FaEnvelope, label: "Email" },
];

/* ─── Design tokens ─── */
const C = {
  sidebar: "var(--sidebar)",
  border: "var(--border)",
  text: "var(--text)",
  muted: "var(--muted)",
  hover: "var(--hover)",
  active: "var(--active)",
  activeTxt: "var(--activeTxt)",
  accent: "var(--accent)",
};

function SidebarContent({ pathname, mounted, isDark, onThemeToggle, expanded, onToggleResources }: { pathname: string; mounted: boolean; isDark: boolean; onThemeToggle: () => void; expanded: boolean; onToggleResources: () => void }) {
  return (
    <div
      className="flex flex-col h-full animate-sidebar-enter"
      style={{ backgroundColor: C.sidebar }}
    >
      {/* Profile */}
      <div className="flex flex-col items-center px-5 pt-8 pb-6 animate-fade-in">
        <div
          className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 mb-4"
          style={{ borderColor: C.border }}
        >
          <img
            src="/img/profile.jpeg"
            alt="Satria Alfata"
            className="w-full h-full object-cover"
          />
        </div>

        <h2
          className="text-base font-bold"
          style={{ color: C.text }}
        >
          Satria Alfata
        </h2>

        <p
          className="text-sm mb-4"
          style={{ color: C.muted }}
        >
          Data Science Enthusiast
        </p>

        {mounted && (
          <div
            className="flex items-center w-full rounded-full border"
            style={{ borderColor: C.border }}
          >
            <button
              onClick={onThemeToggle}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-opacity duration-300 hover:opacity-70"
              style={{ color: C.text }}
            >
              <Moon size={16} />
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="w-px h-5" style={{ backgroundColor: C.border }} />

            <div className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium" style={{ color: C.text }}>
              <Globe size={16} />
              <span>Indonesia</span>
              <ChevronDown size={14} />
            </div>
          </div>
        )}
      </div>

      <div
        className="mx-4 h-px mb-4"
        style={{ backgroundColor: C.border }}
      />

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {NAV.map((item, idx) => {
            const Icon = item.icon;
            if ("children" in item) {
              const active = pathname.startsWith("/resources");
              return (
                <li key={item.label} className={`animate-slide-in-left stagger-${idx + 1}`}>
                  <button
                    onClick={onToggleResources}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 hover:translate-x-1 w-full text-left"
                    style={{
                      backgroundColor: active || expanded ? C.active : "transparent",
                      color: active || expanded ? C.activeTxt : C.text,
                    }}
                  >
                    <Icon className="text-lg" />
                    {item.label}
                    <ChevronDown size={12} className={`ml-auto transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <ul className="mt-1 space-y-0.5 pl-2 animate-fade-in">
                      {item.children.map((child, childIdx) => {
                        const childActive = child.href === "/resources"
                          ? pathname === "/resources"
                          : pathname.startsWith(child.href);
                        return (
                          <li key={child.href} className={`animate-slide-in-left stagger-${childIdx + 1}`}>
                            <Link
                              href={child.href}
                              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-300 hover:translate-x-0.5"
                              style={{
                                backgroundColor: childActive ? C.active : "transparent",
                                color: childActive ? C.activeTxt : C.muted,
                              }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href} className={`animate-slide-in-left stagger-${idx + 1}`}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 hover:translate-x-1"
                  style={{
                    backgroundColor: active ? C.active : "transparent",
                    color: active ? C.activeTxt : C.text,
                  }}
                >
                  <Icon className="text-lg" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className="mx-4 h-px my-4"
        style={{ backgroundColor: C.border }}
      />

      {/* Social + Theme */}
      <div className="px-4 mb-4 flex justify-center gap-2">
        {SOCIAL.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-lg transition-opacity duration-300 hover:opacity-70"
            style={{ color: C.muted }}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Footer */}
      <p
        className="text-center text-xs pb-4"
        style={{ color: C.muted }}
      >
        Made with ♥ by satrialfata
      </p>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [manualExpanded, setManualExpanded] = useState(false);

  const expanded = pathname.startsWith("/resources") || manualExpanded;

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const isDark = mounted && resolvedTheme === "dark";

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-4 md:hidden backdrop-blur-md transition-all duration-300" style={{ backgroundColor: "var(--sidebar)" }}>
        <span className="font-bold" style={{ color: C.text }}>
          Satria
        </span>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          className="text-xl transition-opacity duration-300 hover:opacity-70"
          style={{ color: C.text }}
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden transition-opacity duration-300 animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[240px] z-50 transition-transform duration-300 ease-out md:translate-x-0 ${open
          ? "translate-x-0"
          : "-translate-x-full"
          }`}
      >
        <SidebarContent pathname={pathname} mounted={mounted} isDark={isDark} onThemeToggle={handleThemeToggle} expanded={expanded} onToggleResources={() => setManualExpanded((v) => !v)} />
      </aside>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHome, FaUser, FaBriefcase, FaTrophy } from "react-icons/fa";

const NAV = [
  { href: "/", label: "Beranda", icon: FaHome },
  { href: "/tentang", label: "Tentang", icon: FaUser },
  { href: "/portofolio", label: "Portofolio", icon: FaBriefcase },
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
  green: "var(--green)",
};

function SidebarContent({ pathname, mounted, isDark, onThemeToggle }: { pathname: string; mounted: boolean; isDark: boolean; onThemeToggle: () => void }) {
  return (
    <div
      className="flex flex-col h-full animate-sidebar-enter"
      style={{ backgroundColor: C.sidebar }}
    >
      {/* Profile */}
      <div className="flex flex-col items-center px-5 pt-8 pb-6 animate-fade-in">
        <div
          className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 mb-4 transition-transform duration-300 hover:scale-110"
          style={{ borderColor: C.border }}
        >
          <img
            src="/img/profile.jpeg"
            alt="Satria Alfata"
            className="w-full h-full object-cover"
          />

          <span
            className="absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 animate-pulse"
            style={{
              backgroundColor: C.green,
              borderColor: C.sidebar,
            }}
          />
        </div>

        <h2
          className="text-sm font-bold"
          style={{ color: C.text }}
        >
          Satria Alfata
        </h2>

        <p
          className="text-xs mb-3"
          style={{ color: C.muted }}
        >
          AI & Security Enthusiast
        </p>

        {mounted && (
          <button
            onClick={onThemeToggle}
            className="group text-xs px-3 py-1.5 rounded-full border transition-all duration-300 mt-1 font-medium hover:scale-105 hover:shadow-md"
            style={{
              color: C.text,
              borderColor: C.border,
              backgroundColor: "transparent"
            }}
          >
            <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
              {isDark ? "☀️" : "🌙"}
            </span>
            {" "}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        )}
      </div>

      <div
        className="mx-4 h-px mb-4"
        style={{ backgroundColor: C.border }}
      />

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {NAV.map(({ href, label, icon: Icon }, idx) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href} className={`animate-slide-in-left stagger-${idx + 1}`}>
                <Link
                  href={href}
                  className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-300 hover:translate-x-1 hover:shadow-sm"
                  style={{
                    backgroundColor: active
                      ? C.active
                      : "transparent",
                    color: active
                      ? C.activeTxt
                      : C.text,
                  }}
                >
                  <Icon className="text-lg transition-all duration-300 group-hover:scale-110" />
                  {label}
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
            className="p-2 rounded-lg transition-all duration-300 hover:scale-125 hover:-translate-y-0.5"
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
        © 2025 Satria Alfata
      </p>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const isDark = mounted && resolvedTheme === "dark";

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-4 md:hidden backdrop-blur-md transition-all duration-300" style={{ backgroundColor: "var(--sidebar)" }}>
        <span className="font-bold transition-all duration-300 hover:scale-110" style={{ color: C.text }}>
          Satria
        </span>

        <button 
          onClick={() => setOpen(!open)}
          className="text-xl transition-all duration-300 hover:scale-125 hover:rotate-90"
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
        <SidebarContent pathname={pathname} mounted={mounted} isDark={isDark} onThemeToggle={handleThemeToggle} />
      </aside>
    </>
  );
}
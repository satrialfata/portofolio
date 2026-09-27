"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TOOL_CATEGORIES, tools } from "@/data/tools";
import { useTranslation } from "@/contexts/LanguageContext";

export default function ToolsPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = tools.filter(
      (tool) =>
        q === "" ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
    );
    return TOOL_CATEGORIES.map((category) => ({
      category,
      items: filtered.filter((tool) => tool.category === category),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <section className="py-4 space-y-8">
      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          {t.toolsPage.sectionLabel}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {t.toolsPage.title}
        </h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          {t.toolsPage.subtitle}
        </p>
      </div>

      {/* Search */}
      <div className="relative animate-fade-up">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "var(--muted)" }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.toolsPage.searchPlaceholder}
          aria-label={t.toolsPage.searchPlaceholder}
          className="w-full rounded-xl border pl-10 pr-10 py-2.5 text-sm transition-all duration-200"
          style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--text)" }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)" }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Groups */}
      {grouped.length === 0 ? (
        <div
          className="rounded-2xl border p-8 text-center text-sm"
          style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--muted)" }}
        >
          {t.toolsPage.empty}
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                  {group.category}
                </h2>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {group.items.length} {t.toolsPage.toolsCount}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.items.map((tool, idx) => (
                  <ScrollReveal key={tool.name} delay={idx * 50}>
                    <div
                      className="flex flex-col h-full rounded-2xl border p-5 card-hover"
                      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                    >
                      {tool.logo && (
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                          style={{ backgroundColor: "var(--logo-bg)", border: "1px solid var(--border)" }}
                        >
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              const tile = e.currentTarget.closest("div");
                              if (tile instanceof HTMLElement) tile.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>
                        {tool.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                          style={{ backgroundColor: "transparent", borderColor: "var(--border)", color: "var(--text)" }}
                        >
                          {t.toolsPage.officialWebsite}
                          <ExternalLink size={11} />
                        </a>
                        {tool.docs && (
                          <a
                            href={tool.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                            style={{ backgroundColor: "transparent", borderColor: "var(--border)", color: "var(--text)" }}
                          >
                            {t.toolsPage.documentation}
                            <ExternalLink size={11} />
                          </a>
                        )}
                        {tool.download && (
                          <a
                            href={tool.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
                          >
                            {t.toolsPage.download}
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

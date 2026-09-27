"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Search, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CodeBlock from "@/components/CodeBlock";
import { LANGUAGE_ORDER, SNIPPET_LANGUAGES, snippets } from "@/data/snippets";
import { useTranslation } from "@/contexts/LanguageContext";

export default function SnippetsPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("All");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = snippets.filter((snippet) => {
      const matchLanguage = language === "All" || snippet.language === language;
      const matchQuery =
        q === "" ||
        snippet.title.toLowerCase().includes(q) ||
        snippet.description.toLowerCase().includes(q) ||
        snippet.section.toLowerCase().includes(q) ||
        snippet.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchLanguage && matchQuery;
    });

    return LANGUAGE_ORDER.map((lang) => ({
      language: lang,
      items: filtered
        .filter((snippet) => snippet.language === lang)
        .sort((a, b) => a.step - b.step),
    })).filter((group) => group.items.length > 0);
  }, [query, language]);

  const totalResults = groups.reduce((sum, group) => sum + group.items.length, 0);

  const handleCopy = async (snippet: (typeof snippets)[number]) => {
    try {
      await navigator.clipboard.writeText(snippet.code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = snippet.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedSlug(snippet.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <section className="py-4 space-y-8">
      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          {t.snippets.sectionLabel}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {t.snippets.title}
        </h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          {t.snippets.subtitle}
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
          placeholder={t.snippets.searchPlaceholder}
          aria-label={t.snippets.searchPlaceholder}
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

      {/* Language filter */}
      <div className="flex flex-wrap gap-2 animate-fade-up">
        {SNIPPET_LANGUAGES.map((lang) => {
          const active = language === lang;
          return (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className="px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: active ? "var(--accent)" : "var(--card)",
                borderColor: active ? "var(--accent)" : "var(--border)",
                color: active ? "var(--bg)" : "var(--muted)",
              }}
            >
              {lang}
            </button>
          );
        })}
      </div>

      {/* Results */}
      {totalResults === 0 ? (
        <div
          className="rounded-2xl border p-8 text-center text-sm"
          style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--muted)" }}
        >
          {t.snippets.empty}
        </div>
      ) : (
        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.language} className="space-y-4">
              {/* Group header */}
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                  {group.language}
                </h2>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {group.items.length} {t.snippets.snippetsCount}
                </span>
              </div>

              {/* Sequential cards */}
              <div className="space-y-4">
                {group.items.map((snippet, idx) => (
                  <ScrollReveal key={snippet.slug} delay={idx * 40}>
                    <article
                      className="rounded-2xl border overflow-hidden card-hover"
                      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                    >
                      <div className="p-5">
                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="inline-flex items-center justify-center min-w-[26px] h-[26px] px-1.5 rounded-lg text-[11px] font-bold border"
                            style={{
                              backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
                              borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                              color: "var(--accent)",
                            }}
                          >
                            {String(snippet.step).padStart(2, "0")}
                          </span>
                          {snippet.section && (
                            <span
                              className="px-2.5 py-1 text-[11px] font-medium rounded-lg border"
                              style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                            >
                              {snippet.section}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>
                          {snippet.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                          {snippet.description}
                        </p>

                        {/* Code block with syntax highlighting */}
                        <CodeBlock code={snippet.code} language={snippet.lang} />

                        <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
                          <div className="flex flex-wrap gap-1.5">
                            {snippet.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[11px] rounded-md border"
                                style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleCopy(snippet)}
                            aria-label={`Copy code for ${snippet.title}`}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              backgroundColor: copiedSlug === snippet.slug ? "var(--green)" : "transparent",
                              borderColor: copiedSlug === snippet.slug ? "var(--green)" : "var(--border)",
                              color: copiedSlug === snippet.slug ? "#0D0D0D" : "var(--text)",
                            }}
                          >
                            {copiedSlug === snippet.slug ? (
                              <>
                                <Check size={13} /> {t.snippets.copied}
                              </>
                            ) : (
                              <>
                                <Copy size={13} /> {t.snippets.copyCode}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
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

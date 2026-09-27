"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Code, Layout, Wrench } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export default function ResourcesPage() {
  const { t } = useTranslation();

  const resourceCards = [
    {
      title: "Snippets",
      description: t.resources.snippetsDesc,
      action: t.resources.snippetsAction,
      href: "/resources/snippets",
      icon: Code,
    },
    {
      title: "Templates",
      description: t.resources.templatesDesc,
      action: t.resources.templatesAction,
      href: "/resources/templates",
      icon: Layout,
    },
    {
      title: "Tools",
      description: t.resources.toolsDesc,
      action: t.resources.toolsAction,
      href: "/resources/tools",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-4 space-y-8">
      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          {t.resources.sectionLabel}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {t.resources.title}
        </h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          {t.resources.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resourceCards.map((resource, idx) => (
          <ScrollReveal key={resource.href} delay={idx * 80}>
            <Link href={resource.href}>
              <div
                className="group flex flex-col rounded-2xl border card-hover overflow-hidden cursor-pointer h-full"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="p-5 flex-1">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                  >
                    <resource.icon size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
                    {resource.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {resource.description}
                  </p>
                </div>
                <div
                  className="px-5 py-4 border-t flex items-center justify-between"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1 flex items-center gap-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {resource.action} →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

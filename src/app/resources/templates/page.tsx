"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Download, FileText, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTranslation } from "@/contexts/LanguageContext";

export default function TemplatesPage() {
  const { t } = useTranslation();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  useEffect(() => {
    if (!pdfOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPdfOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [pdfOpen]);

  const templateStructure = t.templates.templateStructure;

  return (
    <section className="py-4 space-y-8">
      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          {t.templates.sectionLabel}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {t.templates.title}
        </h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          {t.templates.subtitle}
        </p>
      </div>

      {/* Template card */}
      <ScrollReveal>
        <article
          className="rounded-2xl border card-hover overflow-hidden"
          style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl"
                style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
              >
                <FileText size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
                  {t.templates.templateTitle}
                </h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                  {t.templates.templateDesc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["DOCX", "PDF Preview", "Editable", "Version 1.0"].map((meta) => (
                    <span
                      key={meta}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg border"
                      style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                    >
                      {meta}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview toggle */}
            <button
              onClick={() => setPreviewOpen((v) => !v)}
              aria-expanded={previewOpen}
              className="mt-5 w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200"
              style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              {t.templates.previewStructure}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${previewOpen ? "rotate-180" : ""}`}
                style={{ color: "var(--muted)" }}
              />
            </button>

            {previewOpen && (
              <ul
                className="mt-3 rounded-xl border divide-y animate-fade-in"
                style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
              >
                {templateStructure.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm"
                    style={{ color: "var(--text)", borderColor: "var(--border)" }}
                  >
                    <span className="text-xs w-5" style={{ color: "var(--muted)" }}>
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/templates/laporan-praktikum.docx"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
              >
                <Download size={15} />
                {t.templates.downloadDocx}
              </a>
              <button
                onClick={() => setPdfOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: "transparent", borderColor: "var(--border)", color: "var(--text)" }}
              >
                <FileText size={15} />
                {t.templates.preview}
              </button>
            </div>
          </div>
        </article>
      </ScrollReveal>

      {/* PDF Preview Modal */}
      {pdfOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setPdfOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.templates.previewTitle}
            className="relative w-full max-w-4xl h-[85vh] rounded-2xl border shadow-2xl animate-scale-in overflow-hidden flex flex-col"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between gap-3 px-5 py-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={16} style={{ color: "var(--accent)" }} />
                <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                  {t.templates.previewTitle}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="/templates/laporan-praktikum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {t.templates.openInNewTab}
                </a>
                <button
                  onClick={() => setPdfOpen(false)}
                  aria-label={t.templates.closePreview}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-opacity duration-300 hover:opacity-70"
                  style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <iframe
              src="/templates/laporan-praktikum.pdf"
              title={t.templates.previewTitle}
              className="flex-1 w-full"
              style={{ border: "none", backgroundColor: "var(--bg)" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

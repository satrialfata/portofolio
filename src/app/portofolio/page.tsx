"use client";

import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { projects } from "@/data/projects";
import { getTechIcon } from "@/utils/techIcons";

export default function PortofolioPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center" style="color: var(--muted)"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`;
    }
  };

  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>Portofolio</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Proyek saya</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Kumpulan proyek di bidang machine learning, analisis data, dan keamanan siber.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.slug} delay={idx * 80}>
            <Link href={`/portofolio/${project.slug}`}>
              <div
                className="group flex flex-col rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden" style={{ backgroundColor: "var(--sidebar)" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, var(--card) 0%, transparent 60%)" }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <span
                    className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border mb-3 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
                  >
                    {project.category}
                  </span>

                  <h2 className="text-sm font-bold mb-2 group-hover:underline" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h2>
                  <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--muted)" }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => {
                      const TechIcon = getTechIcon(tag);
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs rounded-lg border transition-all duration-300"
                          style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                        >
                          <TechIcon size={12} className="flex-shrink-0" />
                          {tag}
                        </span>
                      );
                    })}
                    {project.tags.length > 4 && (
                      <span
                        className="px-2 py-0.5 text-xs rounded-lg border"
                        style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                      >
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Year */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {project.year}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-medium transition-all duration-300 group-hover:translate-x-1" style={{ color: "var(--accent)" }}>
                      Lihat detail
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

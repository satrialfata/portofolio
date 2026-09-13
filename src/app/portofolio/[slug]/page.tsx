"use client";

import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getTechIcon } from "@/utils/techIcons";
import { useState, use } from "react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-4 space-y-8">
      {/* Back Navigation */}
      <Link
        href="/portofolio"
        className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:opacity-70 hover:-translate-x-1"
        style={{ color: "var(--muted)" }}
      >
        <ArrowLeft size={16} />
        Kembali ke Portofolio
      </Link>

      {/* Hero Section */}
      <div className="space-y-6 animate-fade-up">
        {/* Category Badge */}
        <span
          className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border"
          style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "var(--text)" }}>
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-base leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.category}</span>
          {project.role && (
            <>
              <span>•</span>
              <span>{project.role}</span>
            </>
          )}
        </div>

        {/* Hero Image */}
        <div
          className="w-full rounded-2xl overflow-hidden border"
          style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="w-full h-64 flex items-center justify-center" style="color: var(--muted)"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`;
              }
            }}
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="space-y-4 animate-fade-up stagger-1">
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          Overview
        </h2>
        <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
          {project.overview}
        </p>
      </div>

      {/* Features Section */}
      <div className="space-y-4 animate-fade-up stagger-2">
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          Features
        </h2>
        <ul className="space-y-2 max-w-3xl">
          {project.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div className="space-y-4 animate-fade-up stagger-3">
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tech) => {
            const TechIcon = getTechIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--text)" }}
              >
                <TechIcon size={18} className="flex-shrink-0" />
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Implementation Section */}
      {project.implementation && (
        <div className="space-y-4 animate-fade-up stagger-4">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Implementation
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {project.implementation}
          </p>
        </div>
      )}

      {/* Challenges Section */}
      {project.challenges && (
        <div className="space-y-4 animate-fade-up stagger-5">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Challenges
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {project.challenges}
          </p>
        </div>
      )}

      {/* Outcome Section */}
      {project.outcome && (
        <div className="space-y-4 animate-fade-up stagger-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Outcome
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
            {project.outcome}
          </p>
        </div>
      )}

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="space-y-4 animate-fade-up stagger-7">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
                onClick={() => setSelectedImage(screenshot)}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links Section */}
      <div className="space-y-4 animate-fade-up stagger-8">
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          Links
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              <GitBranch size={16} />
              View Source Code
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--accent)", borderColor: "var(--accent)", color: "var(--bg)" }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:rotate-90"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--text)" }}
            aria-label="Close image"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Project screenshot"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

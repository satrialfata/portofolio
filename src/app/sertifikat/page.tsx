"use client";

import { ExternalLink, CheckCircle2, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credential: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  { 
    title: "Junior Website Developer", 
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", 
    date: "2025", 
    category: "Web Developer", 
    credential: "#", 
    image: "/sertifikat/sertifikat_bnsp.jpeg",
    description: "Sertifikasi kompetensi profesional di bidang pengembangan website yang dikeluarkan oleh Badan Nasional Sertifikasi Profesi, memvalidasi kemampuan dalam merancang dan mengembangkan aplikasi web."
  },
  { 
    title: "Temuan Kerentanan Website Provinsi DKI Jakarta", 
    issuer: "Diskominfo DKI Jakarta", 
    date: "2025", 
    category: "Cybersecurity", 
    credential: "#", 
    image: "/sertifikat/diskominfo_jakarta.jpeg",
    description: "Penghargaan atas kontribusi dalam menemukan dan melaporkan kerentanan keamanan pada sistem website Pemerintah Provinsi DKI Jakarta, membantu meningkatkan keamanan infrastruktur digital publik."
  },
  { 
    title: "Temuan Kerentanan Website Provinsi DIY", 
    issuer: "Diskominfo DIY", 
    date: "2025", 
    category: "Cybersecurity", 
    credential: "#", 
    image: "/sertifikat/diskominfo_diy.jpeg",
    description: "Apresiasi dari Dinas Komunikasi dan Informatika Provinsi DIY atas penemuan celah keamanan pada sistem informasi pemerintah daerah, berkontribusi pada peningkatan keamanan siber."
  },
  { 
    title: "Temuan Kerentanan Website KPI", 
    issuer: "Komisi Penyiaran Indonesia", 
    date: "2025", 
    category: "Cybersecurity", 
    credential: "#", 
    image: "/sertifikat/kpi.jpeg",
    description: "Sertifikat penghargaan dari Komisi Penyiaran Indonesia atas identifikasi kerentanan pada sistem website KPI, membantu menjaga integritas dan keamanan platform digital lembaga negara."
  },
  { 
    title: "Temuan Kerentanan Website KPK", 
    issuer: "Komisi Pemberantasan Korupsi", 
    date: "2025", 
    category: "Cybersecurity", 
    credential: "#", 
    image: "/sertifikat/kpk.jpeg",
    description: "Penghargaan dari Komisi Pemberantasan Korupsi atas pelaporan responsible disclosure terkait kerentanan keamanan website KPK, mendukung perlindungan sistem informasi lembaga antikorupsi."
  },
  { 
    title: "Pelatihan Pengembangan Web dengan Django", 
    issuer: "Penyelenggara Pelatihan", 
    date: "2025", 
    category: "Web Developer", 
    credential: "#", 
    image: "/sertifikat/sertifikat_pelatihan_django.jpeg",
    description: "Sertifikat kelulusan pelatihan intensif pengembangan aplikasi web menggunakan framework Django, mencakup konsep MVC, ORM, authentication, dan deployment aplikasi Python berbasis web."
  },
];

export default function SertifikatPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCertificate) {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>Sertifikat</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Sertifikasi &amp; pencapaian</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Sertifikasi dari platform dan lembaga terpercaya di bidang data science dan keamanan siber.
        </p>
      </div>

      {/* Summary Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-up stagger-1"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--muted)" }} >
        <CheckCircle2 size={14} style={{ color: "#35ba5fff" }} />
        <span>{certificates.length} Sertifikat Diperoleh</span>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert, idx) => (
          <ScrollReveal key={cert.title} delay={idx * 80}>
            <div
              onClick={() => setSelectedCertificate(cert)}
              className="group flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
            {/* Image with Gradient */}
            <div className="relative h-32 w-full flex-shrink-0 overflow-hidden">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--card) 0%, transparent 100%)" }}
              />
            </div>

            <div className="flex gap-4 px-5 pb-5 pt-2">
              {/* Icon */}
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--accent)" }}
              >
                <CheckCircle2 size={16} />
              </span>

              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold leading-tight mb-1 group-hover:underline" style={{ color: "var(--text)" }}>
                  {cert.title}
                </h2>
                <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
                  >
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-medium" style={{ color: "var(--muted)" }}>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Click hint icon */}
              <div
                className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-lg border"
                style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-auto rounded-2xl border shadow-2xl animate-scale-in"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:rotate-90"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--text)" }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Content - Desktop: 2 columns, Mobile: 1 column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8">
              {/* Left: Certificate Image */}
              <div className="flex items-center justify-center p-4 rounded-xl" style={{ backgroundColor: "var(--bg)" }}>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
              </div>

              {/* Right: Certificate Details */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Category Badge */}
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border w-fit"
                  style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
                >
                  <CheckCircle2 size={14} />
                  {selectedCertificate.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ color: "var(--text)" }}>
                  {selectedCertificate.title}
                </h2>

                {/* Issuer */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Penerbit
                  </p>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>
                    {selectedCertificate.issuer}
                  </p>
                </div>

                {/* Year */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Tahun
                  </p>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>
                    {selectedCertificate.date}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Deskripsi
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {selectedCertificate.description}
                  </p>
                </div>

                {/* External Link Button */}
                {selectedCertificate.credential && selectedCertificate.credential !== "#" && (
                  <a
                    href={selectedCertificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
                    style={{ backgroundColor: "var(--accent)", borderColor: "var(--accent)", color: "var(--bg)" }}
                  >
                    <ExternalLink size={16} />
                    Lihat Sertifikat
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

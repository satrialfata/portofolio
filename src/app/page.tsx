import { ArrowRight, Download, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import GithubContribution from "@/components/GithubContribution";
import SkillCarousel from "@/components/SkillCarousel";

/* ─── Tokens ─── */
const C = {
  card: "var(--card)",
  border: "var(--border)",
  text: "var(--text)",
  muted: "var(--muted)",
  green: "var(--green)",
};

const stats = [
  { value: "15+", label: "Proyek Selesai" },
  { value: "8+", label: "Sertifikat" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "5+", label: "Teknologi Dikuasai" },
];



export default function BerandaPage() {
  return (
    <section className="space-y-10 py-6">

      {/* ════════════ HERO ════════════ */}
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12">

        {/* Left — text */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 text-2xl font-medium mb-5"
            style={{ color: C.muted }}
          >
            <span className="text-3xl animate-wave">👋</span> Halo,
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: C.text }}
          >
            Saya Satria Alfata
          </h1>

          {/* Location row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="flex items-center gap-1.5 text-sm"
              style={{ color: C.muted }}
            >
              <MapPin size={13} />
              Berdomisili di Semarang, Indonesia
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold"
              style={{
                backgroundColor: C.green + "12",
                borderColor: C.green + "40",
                color: C.green,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              Onsite
            </span>
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-8 max-w-md"
            style={{ color: C.muted }}
          >
            Mahasiswa S1 Sains Data yang berfokus pada Data Engineering dan AI Engineering.
            Memiliki ketertarikan pada pengolahan data, machine learning, dan pengembangan aplikasi modern.
            Selalu berusaha membangun solusi yang efektif, inovatif, dan berorientasi pada kebutuhan pengguna.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-opacity duration-150 hover:opacity-75"
              style={{ borderColor: C.text, color: C.text }}
            >
              Lihat Portofolio
              <ArrowRight size={14} />
            </Link>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-opacity duration-150 hover:opacity-75"
              style={{ backgroundColor: C.card, borderColor: C.border, color: C.muted }}
            >
              <Download size={14} />
              Unduh CV
            </a>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="flex-shrink-0 flex justify-center sm:pr-10 lg:pr-56">
          <div
            className="relative w-72 h-72 sm:w-72 sm:h-72 rounded-full flex items-center justify-center font-bold select-none overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: `0 0 0 3px var(--bg), 0 0 0 4px var(--border), 0 24px 48px rgba(0,0,0,0.5)`,
            }}
          >
            <img
              src="/img/profile.jpeg"
              alt="Satria Alfata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ════════════ STATS ════════════ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center px-4 py-5 rounded-xl border text-center"
            style={{
              backgroundColor: C.card,
              borderColor: C.border,
              boxShadow: "0 1px 6px rgba(0,0,0,0.35)",
              borderRadius: "12px",
            }}
          >
            <p className="text-2xl font-bold mb-1" style={{ color: C.text }}>
              {s.value}
            </p>
            <p className="text-[12px]" style={{ color: C.muted }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ════════════ SKILLS ════════════ */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg border text-[11px] font-bold font-mono tracking-tighter"
            style={{ backgroundColor: C.card, borderColor: C.border, color: C.muted }}
          >
            {"<>"}
          </span>
          <h2 className="text-[18px] font-semibold" style={{ color: C.text }}>
            Keahlian Teknologi
          </h2>
        </div>

        {/* Carousel */}
        <SkillCarousel />
      </div>

      {/* ════════════ GITHUB ════════════ */}
      <div>
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[18px] font-semibold" style={{ color: C.text }}>
            GitHub Contributions
          </h2>
          <a
            href="https://github.com/satrialfata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] transition-opacity hover:opacity-70"
            style={{ color: C.muted }}
          >
            Lihat di GitHub
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Calendar card */}
        <div
          className="p-5 border overflow-x-auto"
          style={{
            backgroundColor: C.card,
            borderColor: C.border,
            borderRadius: "12px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.35)",
          }}
        >
          <GithubContribution username="satrialfata" />
        </div>
      </div>

    </section>
  );
}

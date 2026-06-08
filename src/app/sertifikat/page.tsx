import { ExternalLink, CheckCircle2 } from "lucide-react";

const certificates = [
  { title: "Junior Website Developer", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", date: "2025", category: "Web Developer", credential: "#", image: "/sertifikat/sertifikat_bnsp.jpeg" },
  { title: "Temuan Kerentanan Website Provinsi DKI Jakarta", issuer: "Diskominfo DKI Jakarta", date: "2025", category: "Cybersecurity", credential: "#", image: "/sertifikat/diskominfo_jakarta.jpeg" },
  { title: "Temuan Kerentanan Website Provinsi DIY", issuer: "Diskominfo DIY", date: "2025", category: "Cybersecurity", credential: "#", image: "/sertifikat/diskominfo_diy.jpeg" },
  { title: "Temuan Kerentanan Website KPI", issuer: "Komisi Penyiaran Indonesia", date: "2025", category: "Cybersecurity", credential: "#", image: "/sertifikat/kpi.jpeg" },
  { title: "Temuan Kerentanan Website KPK", issuer: "Komisi Pemberantasan Korupsi", date: "2025", category: "Cybersecurity", credential: "#", image: "/sertifikat/kpk.jpeg" },
  { title: "Pelatihan Pengembangan Web dengan Django", issuer: "Penyelenggara Pelatihan", date: "2025", category: "Web Developer", credential: "#", image: "/sertifikat/sertifikat_pelatihan_django.jpeg" },
];

export default function SertifikatPage() {
  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>Sertifikat</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Sertifikasi &amp; pencapaian</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Sertifikasi dari platform dan lembaga terpercaya di bidang data science dan keamanan siber.
        </p>
      </div>

      {/* Summary Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--muted)" }} >
        <CheckCircle2 size={14} style={{ color: "#35ba5fff" }} />
        <span>{certificates.length} Sertifikat Diperoleh</span>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border transition-all duration-200 hover:-translate-y-1 overflow-hidden"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            {/* Image with Gradient */}
            <div className="relative h-32 w-full flex-shrink-0">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--card) 0%, transparent 100%)" }}
              />
            </div>

            <div className="flex gap-4 px-5 pb-5 pt-2">
              {/* Icon */}
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
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
                    className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-lg border"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)", color: "var(--accent)" }}
                  >
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-medium" style={{ color: "var(--muted)" }}>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Link icon */}
              <ExternalLink
                size={14}
                className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                style={{ color: "var(--muted)" }}
              />
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}

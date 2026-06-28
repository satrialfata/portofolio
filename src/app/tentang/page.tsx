import { Code2, ShieldCheck, Database, BrainCircuit, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  { category: "Data Science", icon: BrainCircuit, items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"] },
  { category: "Cybersecurity", icon: ShieldCheck, items: ["Penetration Testing", "Kali Linux", "Wireshark", "Metasploit", "CTF"] },
  { category: "Data Engineering", icon: Database, items: ["SQL", "PostgreSQL", "MongoDB", "Apache Spark", "Airflow"] },
  { category: "Programming", icon: Code2, items: ["Python", "TypeScript", "Bash", "R", "Go"] },
];

const info = [
  { label: "Lokasi", value: "Semarang, Indonesia" },
  { label: "Status", value: "Open to Work" },
  { label: "Bahasa", value: "ID / EN" },
  { label: "Pendidikan", value: "S1 Sains Data" },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "PT. Indosoft Digital Enigma",
    period: "Juli - November 2025",
    description: "Mengembangkan model prediktif dan melakukan analisis data untuk solusi bisnis.",
  },
];

const educations = [
  {
    degree: "S1 Sains Data",
    institution: "Universitas Muhammadiyah Semarang",
    period: "2025 - Sekarang",
    description: "Mempelajari analisis data, machine learning, kecerdasan buatan, dan keamanan jaringan.",
  },
  {
    degree: "Pengembangan Perangkat Lunak & Gim",
    institution: "SMK Negeri 1 Pemalang",
    period: "2022 - 2025",
    description: "Fokus pada rekayasa perangkat lunak dan dasar-dasar pemrograman.",
  }
];

export default function TentangPage() {
  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>
          Tentang Saya
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          Mengenal lebih dekat
        </h1>
      </div>

      {/* Bio card */}
      <div className="p-6 rounded-2xl border" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 border overflow-hidden"
            style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--text)" }}
          >
            <img
              src="/img/profile.jpeg"
              alt="Satria Alfata"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-base font-bold mb-0.5" style={{ color: "var(--text)" }}>Satria AlFata</h2>
            <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>AI Engineer &amp; Data Engineer</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Saya adalah mahasiswa S1 Sains Data yang berfokus pada Data Engineering dan AI Engineering. Saya memiliki ketertarikan dalam membangun data pipeline, ETL, machine learning, dan aplikasi berbasis AI menggunakan Python, SQL, FastAPI, LangChain, Pinecone, Docker,
              serta teknologi cloud modern. Saya senang mengubah data menjadi solusi yang dapat diskalakan dan memberikan dampak nyata melalui pemanfaatan data dan kecerdasan buatan.
            </p>
          </div>
        </div>

        {/* Info grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {info.map((i) => (
            <div key={i.label}>
              <p className="text-[10px] uppercase tracking-widest mb-1 opacity-70" style={{ color: "var(--muted)" }}>{i.label}</p>
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{i.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman & Pendidikan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">

        {/* Pengalaman */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase size={18} style={{ color: "var(--accent)" }} />
            <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>Pengalaman</h2>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl border relative overflow-hidden" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "var(--accent)" }} />
                <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>{exp.role}</h3>
                <p className="text-xs mb-3 font-medium" style={{ color: "var(--muted)" }}>{exp.company} • {exp.period}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} style={{ color: "var(--green)" }} />
            <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>Pendidikan</h2>
          </div>
          <div className="space-y-4">
            {educations.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl border relative overflow-hidden" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "var(--green)" }} />
                <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>{edu.degree}</h3>
                <p className="text-xs mb-3 font-medium" style={{ color: "var(--muted)" }}>{edu.institution} • {edu.period}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-base font-bold mb-4" style={{ color: "var(--text)" }}>Keahlian</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="p-5 rounded-2xl border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--accent)" }}
                >
                  <Icon size={16} />
                </span>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg border"
                    style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

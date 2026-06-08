import { Code2, ShieldCheck, Database, BrainCircuit } from "lucide-react";

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
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          Saya adalah seorang mahasiswa Sains Data dengan ketertarikan mendalam pada data science dan keamanan data.
          Saya percaya bahwa data dan keamanan adalah dua pilar utama dalam membangun sistem digital yang andal.
        </p>
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
              src="https://github.com/satrialfata.png"
              alt="Satria Alfata"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-base font-bold mb-0.5" style={{ color: "var(--text)" }}>Satria AlFata</h2>
            <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>AI Engineer &amp; Data Scientist</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Berfokus pada pengembangan model machine learning dan analisis keamanan sistem.
              Aktif dalam komunitas open-source dan sering berpartisipasi dalam kompetisi CTF.
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

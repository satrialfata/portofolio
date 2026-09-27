import { Mail, GitBranch, Link2, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const EMAIL = "satriadev@gmail.com";

const socialLinks = [
  { icon: GitBranch, label: "GitHub", handle: "@satrialfata", href: "https://github.com/satrialfata" },
  { icon: Link2, label: "LinkedIn", handle: "Satria Nur Alfata Panca", href: "https://linkedin.com/in/satrianuralfatapanca" },
  { icon: MessageCircle, label: "Twitter / X", handle: "@satrialfata", href: "https://twitter.com/satrialfata" },
];

export default function KontakPage() {
  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>Kontak</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Mari terhubung</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Email card: the one real action on this page */}
        <ScrollReveal delay={100}>
          <div
            className="h-full p-6 rounded-2xl border card-hover flex flex-col justify-center gap-4"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border"
              style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--accent)" }}
            >
              <Mail size={20} />
            </span>

            <div>
              <h2 className="text-lg font-bold mb-1.5" style={{ color: "var(--text)" }}>
                Kirim email langsung
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Untuk kerja sama, diskusi proyek, atau pertanyaan seputar data dan pengembangan software.
              </p>
            </div>

            <p className="text-sm font-medium break-all" style={{ color: "var(--text)" }}>
              {EMAIL}
            </p>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Halo Satria")}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 w-fit"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
            >
              <Mail size={15} />
              Kirim email
            </a>
          </div>
        </ScrollReveal>

        {/* Social Links section */}
        <div className="space-y-3">
          {socialLinks.map(({ icon: Icon, label, handle, href }, idx) => (
            <ScrollReveal key={label} delay={150 + idx * 60}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border card-hover"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{ backgroundColor: "var(--sidebar)", color: "var(--accent)" }}
              >
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--muted)" }}>
                  {label}
                </p>
                <p className="text-sm font-medium transition-colors duration-300" style={{ color: "var(--text)" }}>
                  {handle}
                </p>
              </div>
            </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

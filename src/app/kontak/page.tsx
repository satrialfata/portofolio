import { Mail, GitBranch, Link2, MessageCircle, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const socialLinks = [
  { icon: GitBranch, label: "GitHub", handle: "@satrialfata", href: "https://github.com/satrialfata" },
  { icon: Link2, label: "LinkedIn", handle: "Satria Nur Alfata Panca", href: "https://linkedin.com/in/satrianuralfatapanca" },
  { icon: MessageCircle, label: "Twitter / X", handle: "@satrialfata", href: "https://twitter.com/satrialfata" },
  { icon: Mail, label: "Email", handle: "hello@satrialfata.my.id", href: "mailto: satriadev@gmail.com" },
];

export default function KontakPage() {
  return (
    <section className="py-4 space-y-8">

      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>Kontak</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>Mari terhubung</h1>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Form section */}
        <ScrollReveal delay={100}>
          <div
            className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
          <h2 className="text-sm font-bold mb-5" style={{ color: "var(--text)" }}>Kirim pesan</h2>
          <form className="space-y-4">
            {[
              { label: "Nama", type: "text", placeholder: "Nama lengkap kamu" },
              { label: "Email", type: "email", placeholder: "email@contoh.com" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--muted)" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
            ))}

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--muted)" }}>
                Pesan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis pesan kamu di sini..."
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none resize-none transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)", borderColor: "var(--text)" }}
            >
              <Send size={14} />
              Kirim Pesan
            </button>
          </form>
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
                className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: "var(--sidebar)", color: "var(--muted)" }}
              >
                <Icon size={18} className="transition-colors duration-300" style={{ color: "var(--accent)" }} />
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

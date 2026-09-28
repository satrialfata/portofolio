"use client";

import { useState } from "react";
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CodeBlock from "@/components/CodeBlock";

const MAS_GITHUB = "https://github.com/massgravel/Microsoft-Activation-Scripts";

const installSteps = [
  {
    title: "Method 1 — PowerShell",
    description: "Open PowerShell (click Start Menu, type PowerShell, open it). Copy and paste the command below, then press Enter.",
    code: `irm https://get.activated.win | iex`,
  },
  {
    title: "Method 1 — Alternative (if blocked by ISP)",
    description: "Use this only if the first command is blocked. Requires Windows 10 or 11 with DoH support.",
    code: `iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)`,
  },
  {
    title: "Method 2 — Traditional",
    description: "Download the script and run it directly. Works on Windows Vista and later.",
    code: `# Download MAS_AIO.cmd from Azure DevOps:\n# https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?path=/MAS/All-In-One-Version-KL/MAS_AIO.cmd&download=true\n\n# Or download MAS_AIO.zip (if the direct script is blocked by your browser):\n# https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?$format=zip\n\n# Then run MAS_AIO.cmd`,
  },
];

export default function MASDetailPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-4 space-y-8">
      <Link
        href="/resources/tools"
        className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:opacity-70 hover:-translate-x-1"
        style={{ color: "var(--muted)" }}
      >
        <ArrowLeft size={16} />
        Kembali ke Tools
      </Link>

      <ScrollReveal>
        <div className="rounded-2xl border p-6 card-hover" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--logo-bg)", border: "1px solid var(--border)" }}>
              <img
                src="/tools/mas.svg"
                alt="MAS logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text)" }}>
                Microsoft Activation Scripts (MAS)
              </h1>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Open-source Windows and Office activation & troubleshooting resource.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border" style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--accent)" }}>
              Third-party / Community Project
            </span>
          </div>

          <a
            href={MAS_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: "transparent", borderColor: "var(--border)", color: "var(--text)" }}
          >
            View on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <div className="p-4 rounded-xl border" style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}>
          <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--muted)" }}>
            Commands shown here are provided for reference only. They are not executed by this website. Review the source and command before running anything locally.
          </p>
          <a
            href={MAS_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            <ExternalLink size={12} />
            View Source
          </a>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
          Cara Install
        </h2>
        {installSteps.map((step, idx) => (
          <ScrollReveal key={idx} delay={(idx + 2) * 40}>
            <div className="rounded-2xl border p-5 card-hover" style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}>
              <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                {step.description}
              </p>
              <div className="relative">
                <CodeBlock code={step.code} language="powershell" />
                <button
                  onClick={() => handleCopy(step.code, idx)}
                  aria-label={`Copy code for ${step.title}`}
                  className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: copiedIdx === idx ? "var(--green)" : "var(--sidebar)",
                    borderColor: copiedIdx === idx ? "var(--green)" : "var(--border)",
                    color: copiedIdx === idx ? "#0D0D0D" : "var(--muted)",
                  }}
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check size={12} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Code2, ShieldCheck, Database, BrainCircuit, Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

const skills = [
  { category: "Data Science", icon: BrainCircuit, items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"] },
  { category: "Cybersecurity", icon: ShieldCheck, items: ["Penetration Testing", "Kali Linux", "Wireshark", "Metasploit", "CTF"] },
  { category: "Data Engineering", icon: Database, items: ["SQL", "PostgreSQL", "MongoDB", "Apache Spark", "Airflow"] },
  { category: "Programming", icon: Code2, items: ["Python", "TypeScript", "Bash", "R", "Go"] },
];

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  logo: string;
  focus: string[];
  descKey: string;
};

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  logo: string;
  focus: string[];
  descKey: string;
  projectsKey?: string;
  extraKey?: string;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "PT. Indosoft Digital Enigma",
    location: "Bekasi, Indonesia",
    type: "Internship",
    period: "Juli – November 2025",
    logo: "/img/indosoft-logo.jpg",
    descKey: "exp1Desc",
    focus: [
      "Laravel Framework",
      "Konsep MVC (Model–View–Controller)",
      "PHP Programming",
      "Database & MySQL",
      "Data Processing dan Data Migration",
      "Microsoft Excel",
      "Analisis dan pengelompokan data pelanggan",
      "Software Development",
    ],
  },
];

const educations: EducationItem[] = [
  {
    id: 1,
    degree: "S1 Sains Data",
    institution: "Universitas Muhammadiyah Semarang",
    location: "Semarang, Indonesia",
    period: "2025 – Sekarang",
    logo: "/img/unimus-logo.png",
    descKey: "edu1Desc",
    projectsKey: "edu1Projects",
    focus: [
      "Data Science",
      "Python & R Programming",
      "SQL & Database",
      "Data Processing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Statistical Analysis",
      "Probability & Statistics",
      "Machine Learning",
      "Struktur Data & Algoritma",
    ],
  },
  {
    id: 2,
    degree: "Pengembangan Perangkat Lunak & Gim",
    institution: "SMK Negeri 1 Pemalang",
    location: "Pemalang, Indonesia",
    period: "2022 – 2025",
    logo: "/img/smkn1-logo.png",
    descKey: "edu2Desc",
    extraKey: "edu2Extra",
    focus: [
      "Programming & Algorithm",
      "PHP",
      "Laravel",
      "HTML & CSS",
      "JavaScript",
      "MySQL & Database",
      "Web Development",
      "Object-Oriented Programming",
      "Software Development",
      "Git & GitHub",
    ],
  },
];

export default function TentangPage() {
  const { t } = useTranslation();
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

  const info = [
    { label: t.about.infoLocation, value: "Semarang, Indonesia" },
    { label: t.about.infoStatus, value: "Open to Work" },
    { label: t.about.infoLanguage, value: "ID / EN" },
    { label: t.about.infoEducation, value: "S1 Sains Data" },
  ];

  return (
    <section className="py-4 space-y-12">

      {/* Header */}
      <div className="animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          {t.about.sectionLabel}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {t.about.title}
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          {t.about.subtitle}
        </p>
      </div>

      {/* Profile Section */}
      <ScrollReveal delay={100}>
        <div className="space-y-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-2xl flex-shrink-0 border overflow-hidden"
              style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
            >
              <img
                src="/img/profile.jpeg"
                alt="Satria Alfata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Role */}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                Satria AlFata
              </h2>
              <p className="text-base mb-4" style={{ color: "var(--accent)" }}>
                AI Engineer & Data Engineer
              </p>
              <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
                {t.about.bio}
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {info.map((i) => (
              <div key={i.label}>
                <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--muted)", opacity: 0.7 }}>
                  {i.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  {i.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal delay={150}>
        <div className="space-y-6">
          {/* Section Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={20} style={{ color: "var(--accent)" }} />
              <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                {t.about.experience}
              </h2>
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {t.about.experienceDesc}
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-5 rounded-2xl border card-hover"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="flex gap-4">
                  {/* Logo */}
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 border flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span style="color: var(--accent); font-size: 20px; font-weight: bold;">${exp.company.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    {/* Expandable Description */}
                    <div className="mt-3">
                      {expandedExperience === exp.id && (
                        <div className="mb-3 space-y-3">
                          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                            {t.about[exp.descKey as keyof typeof t.about] as string}
                          </p>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--muted)", opacity: 0.7 }}>
                              {t.about.focusCompetency}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.focus.map((item) => (
                                <span
                                  key={item}
                                  className="px-2.5 py-1 text-xs rounded-lg border"
                                  style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 hover:opacity-70"
                        style={{ color: "var(--accent)" }}
                      >
                        {expandedExperience === exp.id ? (
                          <>
                            {t.about.hideDetail}
                            <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            {t.about.showDetail}
                            <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal delay={200}>
        <div className="space-y-6">
          {/* Section Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={20} style={{ color: "var(--green)" }} />
              <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                {t.about.education}
              </h2>
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {t.about.educationDesc}
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-4">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="p-5 rounded-2xl border card-hover"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="flex gap-4">
                  {/* Logo */}
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 border flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
                  >
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span style="color: var(--accent); font-size: 20px; font-weight: bold;">${edu.institution.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--muted)" }}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    {/* Expandable Description */}
                    <div className="mt-3">
                      {expandedEducation === edu.id && (
                        <div className="mb-3 space-y-3">
                          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                            {t.about[edu.descKey as keyof typeof t.about] as string}
                          </p>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--muted)", opacity: 0.7 }}>
                              {t.about.focusCompetency}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {edu.focus.map((item) => (
                                <span
                                  key={item}
                                  className="px-2.5 py-1 text-xs rounded-lg border"
                                  style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--muted)" }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          {edu.projectsKey && (
                            <div>
                              <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "var(--muted)", opacity: 0.7 }}>
                                {t.about.projects}
                              </p>
                              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                                {t.about[edu.projectsKey as keyof typeof t.about] as string}
                              </p>
                            </div>
                          )}
                          {edu.extraKey && (
                            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                              {t.about[edu.extraKey as keyof typeof t.about] as string}
                            </p>
                          )}
                        </div>
                      )}
                      <button
                        onClick={() => setExpandedEducation(expandedEducation === edu.id ? null : edu.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 hover:opacity-70"
                        style={{ color: "var(--accent)" }}
                      >
                        {expandedEducation === edu.id ? (
                          <>
                            {t.about.hideDetail}
                            <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            {t.about.showDetail}
                            <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal delay={250}>
        <div className="space-y-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            {t.about.skills}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ category, icon: Icon, items }) => (
              <div
                key={category}
                className="p-5 rounded-2xl border card-hover"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)", color: "var(--accent)" }}
                  >
                    <Icon size={18} />
                  </span>
                  <p className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    {category}
                  </p>
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
      </ScrollReveal>
    </section>
  );
}

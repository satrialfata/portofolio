"use client";

import React from "react";

const skills = [
  { label: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "TensorFlow", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { label: "PyTorch", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { label: "Scikit-learn", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { label: "Pandas", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { label: "NumPy", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { label: "SQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { label: "Hugging Face", imgUrl: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { label: "n8n", imgUrl: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { label: "Docker", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "Git", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { label: "Linux", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

export default function SkillCarousel() {
  // Multiply array by 4 to ensure it covers very wide screens and loops seamlessly at 50%
  const row1Repeated = [...skills, ...skills, ...skills, ...skills];
  const row2 = [...skills].reverse();
  const row2Repeated = [...row2, ...row2, ...row2, ...row2];

  return (
    <div
      className="relative w-full overflow-hidden py-4 pause-on-hover"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Row 1: Right to Left */}
      <div className="flex gap-4 w-max animate-marquee-left mb-4">
        {row1Repeated.map((skill, idx) => (
          <SkillChip key={`r1-${idx}`} label={skill.label} imgUrl={skill.imgUrl} />
        ))}
      </div>

      {/* Row 2: Left to Right */}
      <div className="flex gap-4 w-max animate-marquee-right">
        {row2Repeated.map((skill, idx) => (
          <SkillChip key={`r2-${idx}`} label={skill.label} imgUrl={skill.imgUrl} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ label, imgUrl }: { label: string; imgUrl: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 border text-[13px] font-medium transition-colors duration-150 flex-shrink-0 cursor-default"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--muted)",
        borderRadius: "8px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--hover)";
        e.currentTarget.style.color = "var(--text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--card)";
        e.currentTarget.style.color = "var(--muted)";
      }}
    >
      {imgUrl ? (
        <img src={imgUrl} alt={label} className="w-4 h-4 object-contain" />
      ) : (
        <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: "var(--muted)", opacity: 0.2 }} />
      )}
      {label}
    </span>
  );
}

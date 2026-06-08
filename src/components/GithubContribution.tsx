"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface Props {
  username: string;
}

export default function GithubContribution({ username }: Props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="w-full h-[110px] rounded-xl animate-pulse" style={{ backgroundColor: "var(--border)" }} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme={isDark ? "dark" : "light"}
        theme={{
          dark: ["var(--card)", "#14532d", "#166534", "#15803d", "var(--green)"],
          light: ["var(--border)", "#bbf7d0", "#4ade80", "#22c55e", "#16a34a"],
        }}
        fontSize={11}
        blockSize={11}
        blockMargin={4}
        blockRadius={3}
        showWeekdayLabels
        labels={{ totalCount: "{{count}} kontribusi di {{year}}" }}
        style={{ fontFamily: "inherit", color: "var(--muted)" }}
      />
    </div>
  );
}

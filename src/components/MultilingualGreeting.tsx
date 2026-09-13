"use client";

import { useEffect, useState } from "react";

const greetings = [
  "Halo,",
  "Hello,",
  "Hola,",
  "Ciao,",
  "Bonjour,",
  "Hallo,",
  "こんにちは,",
  "안녕하세요,",
];

export default function MultilingualGreeting() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
        setIsTransitioning(false);
      }, 500); // 500ms transition time
    }, 2500); // 2.5s total time per greeting

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const nextIndex = (currentIndex + 1) % greetings.length;

  return (
    <div
      className="inline-flex items-center gap-1.5 text-2xl font-medium mb-5 overflow-hidden"
      style={{
        color: "var(--muted)",
        minWidth: "220px",
        height: "2.5rem"
      }}
    >
      <span className="text-3xl animate-wave flex-shrink-0">👋</span>
      <div className="relative h-full" style={{ minWidth: "160px" }}>
        <span
          className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap"
          style={{
            transform: prefersReducedMotion
              ? "translateY(0)"
              : isTransitioning
                ? "translateY(-100%)"
                : "translateY(0)",
            opacity: prefersReducedMotion
              ? (isTransitioning ? 0 : 1)
              : (isTransitioning ? 0 : 1),
            transitionProperty: "transform, opacity",
            transitionDuration: isTransitioning ? "500ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {greetings[currentIndex]}
        </span>

        <span
          className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap"
          style={{
            transform: prefersReducedMotion
              ? "translateY(0)"
              : isTransitioning
                ? "translateY(0)"
                : "translateY(100%)",
            opacity: prefersReducedMotion
              ? (isTransitioning ? 1 : 0)
              : (isTransitioning ? 1 : 0),
            transitionProperty: "transform, opacity",
            transitionDuration: isTransitioning ? "500ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {greetings[nextIndex]}
        </span>
      </div>
    </div>
  );
}

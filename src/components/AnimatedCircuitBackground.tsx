"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore, useMemo } from "react";
import type React from "react";

const EMPTY_PATHS: React.ReactNode[] = [];

type Pt = [number, number];

// Manhattan routes: every segment is strictly horizontal or vertical (90° turns only).
const ROUTES: Pt[][] = [
  [[70, 150], [300, 150], [300, 290], [560, 290], [560, 170], [780, 170]],
  [[1080, 110], [1400, 110], [1400, 260], [1720, 260]],
  [[50, 540], [230, 540], [230, 670], [470, 670], [470, 560], [720, 560], [720, 700], [910, 700]],
  [[800, 380], [1000, 380], [1000, 490], [1210, 490]],
  [[1290, 430], [1550, 430], [1550, 600], [1860, 600]],
  [[110, 880], [600, 880], [600, 560]],
  [[690, 910], [950, 910], [950, 830], [1230, 830], [1230, 950], [1490, 950]],
  [[1560, 690], [1810, 690], [1810, 860]],
  [[170, 330], [170, 470], [340, 470]],
  [[990, 650], [1040, 650], [1040, 830]],
];

// T-junction endpoints: routes meeting another route's segment.
const JUNCTIONS: Pt[] = [[600, 560], [1040, 830]];

// Pulses travel these routes, desynced speeds/delays (top / middle / right / bottom).
const PULSE_ROUTES: Record<number, { dur: number; delay: number }> = {
  0: { dur: 18, delay: 0 },
  2: { dur: 24, delay: -8 },
  4: { dur: 21, delay: -13 },
  6: { dur: 27, delay: -5 },
};

function roundedPath(pts: Pt[], r = 14): string {
  if (pts.length < 2) return "";
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const [nx, ny] = pts[i + 1];
    const inLen = Math.hypot(cx - px, cy - py) || 1;
    const outLen = Math.hypot(nx - cx, ny - cy) || 1;
    const rr = Math.min(r, inLen / 2, outLen / 2);
    d += ` L${cx - ((cx - px) / inLen) * rr},${cy - ((cy - py) / inLen) * rr}`;
    d += ` Q${cx},${cy} ${cx + ((nx - cx) / outLen) * rr},${cy + ((ny - cy) / outLen) * rr}`;
  }
  const [lx, ly] = pts[pts.length - 1];
  d += ` L${lx},${ly}`;
  return d;
}

function generatePathData(isDark: boolean): React.ReactNode[] {
  const lines: React.ReactNode[] = [];
  const nodes: React.ReactNode[] = [];
  const pulses: React.ReactNode[] = [];
  const lineColor = isDark ? "rgba(59,130,246,0.22)" : "rgba(59,130,246,0.25)";
  const nodeColor = isDark ? "rgba(59,130,246,0.34)" : "rgba(59,130,246,0.34)";
  const pulseColor = isDark ? "rgba(96,165,250,0.95)" : "rgba(37,99,235,0.92)";

  ROUTES.forEach((route, i) => {
    const d = roundedPath(route);

    lines.push(
      <path
        key={`l-${i}`}
        d={d}
        stroke={lineColor}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="circuit-line"
        style={{ animationDelay: `${(i % 5) * 1.4}s` }}
      />
    );

    route.forEach((p, j) => {
      const isEnd = j === 0 || j === route.length - 1;
      const isCorner = j % 2 === 1;
      if (!isEnd && !isCorner) return;
      const square = !isEnd && j % 4 === 3;
      const delay = `${((i * 3 + j) % 7) * 0.9}s`;
      nodes.push(
        square ? (
          <rect key={`n-${i}-${j}`} x={p[0] - 2} y={p[1] - 2} width="4" height="4" rx="1.2" fill={nodeColor} className="circuit-node" style={{ animationDelay: delay }} />
        ) : (
          <circle key={`n-${i}-${j}`} cx={p[0]} cy={p[1]} r="2.2" fill={nodeColor} className="circuit-node" style={{ animationDelay: delay }} />
        )
      );
    });

    const pulse = PULSE_ROUTES[i];
    if (pulse) {
      pulses.push(
        <path
          key={`p-${i}`}
          d={d}
          pathLength={1}
          stroke={pulseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="0.008 0.992"
          className="circuit-flow"
          style={{ animationDuration: `${pulse.dur}s`, animationDelay: `${pulse.delay}s` }}
        />
      );
    }
  });

  JUNCTIONS.forEach(([x, y], i) => {
    nodes.push(<circle key={`j-${i}`} cx={x} cy={y} r="2.6" fill={nodeColor} className="circuit-node" style={{ animationDelay: `${i * 1.3}s` }} />);
  });

  return [...lines, ...nodes, ...pulses];
}

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function AnimatedCircuitBackground() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = resolvedTheme === "dark";
  const paths = useMemo(() => (mounted ? generatePathData(isDark) : EMPTY_PATHS), [mounted, isDark]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0d0f14 0%, #161a22 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: isDark
          ? "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)"
          : "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.09) 0%, transparent 70%)",
      }} />

      <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {paths}
      </svg>
    </div>
  );
}

"use client";

import { DIMENSIONS, DIMENSION_ORDER, EVALUATIVE_LENSES } from "@/lib/constants";
import type { EOScores } from "@/lib/constants";

const SIZE = 340;
const CENTER = SIZE / 2;
const RADIUS = 110;
const LEVELS = 5; // -2, -1, 0, 1, 2

function polarToCartesian(
  angle: number,
  radius: number
): { x: number; y: number } {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export function RadarChart({ scores }: { scores: EOScores }) {
  const dims = DIMENSION_ORDER;
  const angleStep = 360 / dims.length;

  // Compute mean, min, max per dimension across evaluative lenses
  const stats = dims.map((dim) => {
    const values = EVALUATIVE_LENSES.map((lens) => scores[lens][dim].s);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { dim, mean, min, max };
  });

  // Convert score (-2 to 2) to radius (0 to RADIUS)
  const scoreToRadius = (s: number) => ((s + 2) / 4) * RADIUS;

  // Build polygon points
  const meanPoints = stats
    .map((s, i) => {
      const p = polarToCartesian(i * angleStep, scoreToRadius(s.mean));
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const minPoints = stats
    .map((s, i) => {
      const p = polarToCartesian(i * angleStep, scoreToRadius(s.min));
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const maxPoints = stats
    .map((s, i) => {
      const p = polarToCartesian(i * angleStep, scoreToRadius(s.max));
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-[340px]"
    >
      {/* Grid circles */}
      {Array.from({ length: LEVELS }, (_, i) => {
        const r = ((i + 1) / LEVELS) * RADIUS;
        const points = dims
          .map((_, j) => {
            const p = polarToCartesian(j * angleStep, r);
            return `${p.x},${p.y}`;
          })
          .join(" ");
        return (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Axis lines */}
      {dims.map((_, i) => {
        const p = polarToCartesian(i * angleStep, RADIUS);
        return (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Range polygon (min-max) */}
      <polygon
        points={maxPoints}
        fill="#4338ca"
        fillOpacity="0.06"
        stroke="none"
      />
      <polygon
        points={minPoints}
        fill="#fafaf9"
        stroke="none"
      />

      {/* Mean polygon */}
      <polygon
        points={meanPoints}
        fill="#4338ca"
        fillOpacity="0.15"
        stroke="#4338ca"
        strokeWidth="1.5"
      />

      {/* Mean dots */}
      {stats.map((s, i) => {
        const p = polarToCartesian(i * angleStep, scoreToRadius(s.mean));
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#4338ca"
          />
        );
      })}

      {/* Zero line */}
      {(() => {
        const zeroR = scoreToRadius(0);
        const zeroPoints = dims
          .map((_, i) => {
            const p = polarToCartesian(i * angleStep, zeroR);
            return `${p.x},${p.y}`;
          })
          .join(" ");
        return (
          <polygon
            points={zeroPoints}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
        );
      })()}

      {/* Labels */}
      {dims.map((dim, i) => {
        const labelRadius = RADIUS + 38;
        const p = polarToCartesian(i * angleStep, labelRadius);
        return (
          <text
            key={dim}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-600 text-[10px] font-medium"
          >
            {DIMENSIONS[dim]}
          </text>
        );
      })}
    </svg>
  );
}

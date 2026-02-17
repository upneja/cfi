"use client";

import { useState } from "react";
import { DIMENSIONS, DIMENSION_ORDER, LENSES, LENS_ORDER } from "@/lib/constants";
import type { EOScores } from "@/lib/constants";

const cellColors: Record<string, { bg: string; text: string }> = {
  "-2": { bg: "#fef2f2", text: "#991b1b" },
  "-1": { bg: "#fff7ed", text: "#9a3412" },
  "0": { bg: "#f9fafb", text: "#9ca3af" },
  "1": { bg: "#ecfdf5", text: "#065f46" },
  "2": { bg: "#d1fae5", text: "#064e3b" },
};

export function DimensionalHeatmap({ scores }: { scores: EOScores }) {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left py-2 pr-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
              Dimension
            </th>
            {LENS_ORDER.map((lens) => (
              <th
                key={lens}
                className="py-2 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider text-center"
              >
                <span style={{ color: LENSES[lens].color }}>
                  {LENSES[lens].name.split(" ")[0]}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DIMENSION_ORDER.map((dim) => (
            <tr key={dim} className="border-t border-slate-100">
              <td className="py-2.5 pr-4 text-sm font-medium text-slate-700">
                {DIMENSIONS[dim]}
              </td>
              {LENS_ORDER.map((lens) => {
                const cell = scores[lens][dim];
                const colors = cellColors[String(cell.s)] || cellColors["0"];
                const cellKey = `${dim}-${lens}`;
                const isHovered = hoveredCell === cellKey;

                return (
                  <td
                    key={lens}
                    className="py-2.5 px-2 text-center relative"
                    onMouseEnter={() => setHoveredCell(cellKey)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <span
                      className="inline-flex items-center justify-center w-10 h-7 rounded text-xs font-semibold transition-shadow"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        boxShadow: isHovered ? "0 0 0 2px #4338ca" : "none",
                      }}
                    >
                      {cell.s > 0 ? `+${cell.s}` : cell.s}
                    </span>
                    {isHovered && (
                      <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
                        Relevance: {cell.r.toFixed(1)} | Confidence: {cell.c}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

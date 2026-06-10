"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LENSES, LENS_ORDER } from "@/lib/constants";
import type { CaseLawEntry } from "@/lib/caselaw";
import { FidelityTagBadge } from "@/components/FidelityTagBadge";

export function LensAccordion({
  narratives,
  caseCitations,
}: {
  narratives: Record<string, string>;
  caseCitations?: CaseLawEntry[];
}) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (lens: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(lens)) {
        next.delete(lens);
      } else {
        next.add(lens);
      }
      return next;
    });
  };

  // Build per-lens citation map: check which cases appear in each narrative
  const lensCitations: Record<string, CaseLawEntry[]> | undefined =
    caseCitations && caseCitations.length > 0
      ? LENS_ORDER.reduce(
          (acc, lens) => {
            const narrative = narratives[lens] || "";
            acc[lens] = caseCitations.filter((c) => {
              if (narrative.includes(c.name)) return true;
              const vMatch = c.name.match(/^(.+?)\s+v\.\s+(.+?)$/);
              if (vMatch) {
                const shortForm = `${vMatch[1].split(" ").pop()} v. ${vMatch[2].split(" ").pop()}`;
                return narrative.includes(shortForm);
              }
              return false;
            });
            return acc;
          },
          {} as Record<string, CaseLawEntry[]>,
        )
      : undefined;

  return (
    <div className="divide-y divide-slate-100">
      {LENS_ORDER.map((lens) => {
        const isOpen = expanded.has(lens);
        const lensInfo = LENSES[lens];
        const narrative = narratives[lens];
        if (!narrative) return null;

        const citations = lensCitations?.[lens];

        return (
          <div key={lens}>
            <button
              onClick={() => toggle(lens)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: lensInfo.color }}
                />
                <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">
                  {lensInfo.name}
                </span>
                {citations && citations.some((c) => c.fidelityTag === "reversed") && (
                  <span className="text-[10px] text-red-600 font-medium">
                    cites reversed precedent
                  </span>
                )}
              </div>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 pl-7 text-sm text-slate-600 leading-relaxed">
                    {narrative}
                  </p>
                  {citations && citations.length > 0 && (
                    <div className="pb-4 pl-7">
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-2">
                        Cited Precedent
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {citations.map((c) => (
                          <span
                            key={c.id}
                            className="inline-flex items-center gap-1.5 text-xs text-slate-600"
                          >
                            <span className="font-medium">{c.name}</span>
                            <FidelityTagBadge tag={c.fidelityTag} />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

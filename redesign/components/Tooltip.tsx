"use client";

import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

function TooltipPopover({
  content,
  triggerRect,
}: {
  content: string;
  triggerRect: DOMRect;
}) {
  const showAbove = triggerRect.top > 140;
  const left = triggerRect.left + triggerRect.width / 2;
  const top = showAbove
    ? triggerRect.top - 8
    : triggerRect.bottom + 8;

  return createPortal(
    <span
      className="fixed z-[9999] w-64 px-3 py-2 text-xs text-slate-200 bg-slate-800 rounded-lg shadow-lg leading-relaxed pointer-events-none"
      style={{
        left: `${Math.max(16, Math.min(left - 128, window.innerWidth - 272))}px`,
        top: showAbove ? undefined : `${top}px`,
        bottom: showAbove ? `${window.innerHeight - top}px` : undefined,
      }}
    >
      {content}
    </span>,
    document.body
  );
}

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const handleEnter = useCallback(() => {
    if (triggerRef.current) {
      setRect(triggerRef.current.getBoundingClientRect());
      setOpen(true);
    }
  }, []);

  return (
    <span className="inline-flex items-center">
      <span
        ref={triggerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setOpen(false)}
        onClick={() => {
          if (!open && triggerRef.current) {
            setRect(triggerRef.current.getBoundingClientRect());
          }
          setOpen(!open);
        }}
        className="cursor-help"
      >
        {children || (
          <svg
            className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle cx="8" cy="4.75" r="0.75" />
            <rect x="7.25" y="6.5" width="1.5" height="4.5" rx="0.75" />
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        )}
      </span>
      {open && rect && <TooltipPopover content={content} triggerRect={rect} />}
    </span>
  );
}

export const HELP = {
  cfiScore:
    "The Constitutional Fidelity Index score (0\u2013100) measures how well an executive action aligns with constitutional principles. Higher = stronger alignment. Computed as a weighted average across 5 interpretive lenses and 7 constitutional dimensions.",
  floorStatus:
    "A constitutional floor check. VIOLATION means 3+ of 5 lenses scored -2 (severe tension) on at least one dimension. CAUTION means 3+ scored -1. CLEAR means no such agreement on negative scores.",
  consensus:
    "How much the 5 evaluative lenses agree. Broad Consensus = low variance across lenses. Significant Disagreement = lenses strongly diverge, meaning the action\u2019s constitutionality is genuinely contested.",
  steelmanDelta:
    "The gap between the strongest possible constitutional defense (Steelman lens) and the evaluative consensus. A positive delta means there\u2019s a stronger defense available than the average evaluation suggests.",
  dimensions:
    "Seven aspects of constitutional analysis: individual Rights, Equal protection, Democratic legitimacy, Separation of powers, Due Process, general Welfare, and national Sovereignty.",
  lenses:
    "Six ways to interpret the Constitution: Textualist (plain text), Originalist (founding-era meaning), Doctrinalist (case law), Living Constitutionalist (evolving meaning), Pragmatist (real-world outcomes), and Steelman (strongest defense).",
  radarChart:
    "Each axis represents a constitutional dimension. The filled area shows the average score across evaluative lenses. Larger area = stronger alignment. The shaded region shows the range of disagreement.",
  scoringMatrix:
    "Raw scores from each lens on each dimension. Scale: -2 (severe tension) to +2 (strong alignment). Hover cells to see relevance and confidence ratings.",
  relevance:
    "How constitutionally relevant this dimension is to this specific action (0\u20131). Low relevance dimensions are filtered out of the CFI score calculation.",
  confidence:
    "How confident the lens is in its score: H (high), M (moderate), L (low). Based on directness of constitutional text, precedent availability, and empirical evidence.",
} as const;

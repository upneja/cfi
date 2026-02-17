export function getConsensus(maxVariance: number): {
  label: string;
  color: string;
  textClass: string;
} {
  if (maxVariance < 0.5)
    return { label: "Broad Consensus", color: "#047857", textClass: "text-emerald-700" };
  if (maxVariance <= 1.0)
    return { label: "Moderate Agreement", color: "#a16207", textClass: "text-amber-700" };
  return { label: "Significant Disagreement", color: "#b91c1c", textClass: "text-red-700" };
}

export function ConsensusBadge({ maxVariance }: { maxVariance: number }) {
  const { label, textClass } = getConsensus(maxVariance);
  return <span className={`text-xs font-medium ${textClass}`}>{label}</span>;
}

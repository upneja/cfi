export function scoreColor(score: number): string {
  if (score > 80) return "#047857";
  if (score > 60) return "#059669";
  if (score > 40) return "#a16207";
  if (score > 20) return "#dc2626";
  return "#991b1b";
}

export function scoreLabel(score: number): string {
  if (score > 80) return "Strong Alignment";
  if (score > 60) return "Moderate Alignment";
  if (score > 40) return "Mixed";
  if (score > 20) return "Moderate Tension";
  return "Severe Tension";
}

export function ScoreBar({
  score,
  size = "sm",
}: {
  score: number;
  size?: "sm" | "lg";
}) {
  const color = scoreColor(score);
  const height = size === "lg" ? "h-2.5" : "h-1.5";
  const width = size === "lg" ? "w-24" : "w-16";

  return (
    <div className={`${width} ${height} bg-slate-100 rounded-full overflow-hidden`}>
      <div
        className={`${height} rounded-full transition-all duration-500`}
        style={{ width: `${score}%`, backgroundColor: color }}
      />
    </div>
  );
}

export function ScoreDisplay({
  score,
  size = "md",
}: {
  score: number;
  size?: "sm" | "md" | "lg";
}) {
  const color = scoreColor(score);
  const rounded = Math.round(score);
  const sizeClasses = {
    sm: "text-lg font-semibold",
    md: "text-3xl font-bold",
    lg: "text-6xl font-bold",
  };

  return (
    <span className={`${sizeClasses[size]} font-serif`} style={{ color }}>
      {rounded}
    </span>
  );
}

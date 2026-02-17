const floorStyles = {
  CONFLICT: {
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    dot: "bg-red-500",
  },
  TENSION: {
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
  ALIGNMENT: {
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },
} as const;

export type FloorStatus = keyof typeof floorStyles;

export function FloorBadge({
  status,
  size = "sm",
}: {
  status: FloorStatus;
  size?: "sm" | "md";
}) {
  const s = floorStyles[status];
  const padding = size === "md" ? "px-3 py-1" : "px-2 py-0.5";
  const fontSize = size === "md" ? "text-sm" : "text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${padding} ${fontSize} font-medium ${s.bg} ${s.text} ${s.border} border rounded-full`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  );
}

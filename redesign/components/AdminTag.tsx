const adminStyles: Record<string, { bg: string; text: string; border: string }> = {
  Obama: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200" },
  "Trump I": { bg: "bg-red-50", text: "text-red-800", border: "border-red-200" },
  Biden: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200" },
  "Trump II": { bg: "bg-red-50", text: "text-red-800", border: "border-red-200" },
};

export function AdminTag({ admin }: { admin: string }) {
  const s = adminStyles[admin] || adminStyles["Obama"];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium ${s.bg} ${s.text} ${s.border} border rounded`}
    >
      {admin}
    </span>
  );
}

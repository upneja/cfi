import Link from "next/link";
import type { PrecedentAnchoring } from "@/lib/constants";
import { AdminTag } from "@/components/AdminTag";
import { scoreColor } from "@/components/ScoreBar";

export function PrecedentSection({
  anchoring,
}: {
  anchoring: PrecedentAnchoring;
}) {
  const hasWarning = anchoring.precedents.some((p) => p.flagged);

  return (
    <div>
      {hasWarning && (
        <div className="mb-4 rounded-md border border-amber-200 bg-amber-50/50 p-3">
          <p className="text-xs font-semibold text-amber-700">
            Anchoring Warning
          </p>
          <p className="text-xs text-amber-600 mt-1">
            One or more similar executive orders have a CFI score difference
            greater than 15 points, suggesting this evaluation may diverge from
            precedent patterns. Max delta: {anchoring.maxDelta.toFixed(1)} pts.
          </p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-2 pr-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Similar EO
              </th>
              <th className="text-left py-2 px-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Admin
              </th>
              <th className="text-right py-2 px-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Similarity
              </th>
              <th className="text-right py-2 px-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                CFI
              </th>
              <th className="text-right py-2 pl-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Delta
              </th>
            </tr>
          </thead>
          <tbody>
            {anchoring.precedents.map((p) => (
              <tr
                key={p.eoId}
                className={`border-b border-slate-50 ${p.flagged ? "bg-red-50/30" : ""}`}
              >
                <td className="py-2 pr-4">
                  <Link
                    href={`/evaluation/${p.eoId}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {p.title}
                  </Link>
                </td>
                <td className="py-2 px-2">
                  <AdminTag admin={p.admin} />
                </td>
                <td className="py-2 px-2 text-right tabular-nums text-xs text-slate-600">
                  {(p.similarity * 100).toFixed(0)}%
                </td>
                <td className="py-2 px-2 text-right tabular-nums text-xs font-semibold"
                    style={{ color: scoreColor(p.cfi) }}>
                  {p.cfi.toFixed(1)}
                </td>
                <td
                  className={`py-2 pl-2 text-right tabular-nums text-xs font-semibold ${
                    p.flagged ? "text-red-600" : "text-slate-500"
                  }`}
                >
                  {p.cfiDelta > 0 ? "+" : ""}
                  {p.cfiDelta.toFixed(1)}
                  {p.flagged && " ⚠"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] text-slate-400">
        {anchoring.anchored
          ? "All similar EOs have CFI scores within 15 points — evaluation is well-anchored to precedent."
          : `${anchoring.precedents.filter((p) => p.flagged).length} of 5 similar EOs have CFI deltas exceeding 15 points.`}
      </p>
    </div>
  );
}

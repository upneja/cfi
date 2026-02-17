"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { executiveOrders } from "@/lib/data";
import { aggregateEO } from "@/lib/aggregation";
import { DIMENSION_ORDER, EVALUATIVE_LENSES } from "@/lib/constants";
import { ScoreBar, scoreColor } from "@/components/ScoreBar";
import { FloorBadge, type FloorStatus } from "@/components/FloorBadge";
import { AdminTag } from "@/components/AdminTag";
import { Tooltip, HELP } from "@/components/Tooltip";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ScorecardContent() {
  const searchParams = useSearchParams();
  const initialAdmin = searchParams.get("admin") || "all";
  const [adminFilter, setAdminFilter] = useState(initialAdmin);
  const [floorFilter, setFloorFilter] = useState("all");
  const [sortBy, setSortBy] = useState("cfi-desc");

  const aggregated = useMemo(() => {
    return executiveOrders.map((eo) => {
      const agg = aggregateEO(eo);
      const maxVar = Math.max(
        ...DIMENSION_ORDER.map((d) => {
          if (!agg.relevantDims.has(d)) return 0;
          const ms =
            EVALUATIVE_LENSES.reduce((s, l) => s + eo.scores[l][d].s, 0) /
            EVALUATIVE_LENSES.length;
          return (
            EVALUATIVE_LENSES.reduce(
              (s, l) => s + Math.pow(eo.scores[l][d].s - ms, 2),
              0
            ) / EVALUATIVE_LENSES.length
          );
        })
      );
      const consensusLabel =
        maxVar < 0.5
          ? "Broad Consensus"
          : maxVar <= 1.0
          ? "Moderate Agreement"
          : "Significant Disagreement";
      const consensusColor =
        maxVar < 0.5
          ? "text-emerald-700"
          : maxVar <= 1.0
          ? "text-amber-700"
          : "text-red-700";

      return {
        ...eo,
        ...agg,
        maxVar,
        consensusLabel,
        consensusColor,
      };
    });
  }, []);

  const filtered = useMemo(() => {
    let result = aggregated;

    if (adminFilter !== "all") {
      result = result.filter((eo) => eo.admin === adminFilter);
    }
    if (floorFilter !== "all") {
      result = result.filter((eo) => eo.floor === floorFilter);
    }

    switch (sortBy) {
      case "cfi-desc":
        result = [...result].sort((a, b) => b.cfi - a.cfi);
        break;
      case "cfi-asc":
        result = [...result].sort((a, b) => a.cfi - b.cfi);
        break;
      case "date-desc":
        result = [...result].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "date-asc":
        result = [...result].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
    }

    return result;
  }, [aggregated, adminFilter, floorFilter, sortBy]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
          Scorecard
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-xl">
          All evaluated executive actions with constitutional fidelity scores,
          floor assessments, and lens consensus levels.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={adminFilter}
          onChange={(e) => setAdminFilter(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
        >
          <option value="all">All Administrations</option>
          <option value="Obama">Obama</option>
          <option value="Trump I">Trump I</option>
          <option value="Biden">Biden</option>
          <option value="Trump II">Trump II</option>
        </select>

        <select
          value={floorFilter}
          onChange={(e) => setFloorFilter(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
        >
          <option value="all">All Floor Status</option>
          <option value="VIOLATION">Violation</option>
          <option value="CAUTION">Caution</option>
          <option value="CLEAR">Clear</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
        >
          <option value="cfi-desc">CFI Score (High to Low)</option>
          <option value="cfi-asc">CFI Score (Low to High)</option>
          <option value="date-desc">Date (Newest)</option>
          <option value="date-asc">Date (Oldest)</option>
        </select>

        <span className="flex items-center text-xs text-slate-400 ml-auto">
          {filtered.length} of {aggregated.length} evaluations
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-visible">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Executive Action
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                  Admin
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden md:table-cell">
                  Date
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1">
                    CFI
                    <Tooltip content={HELP.cfiScore} />
                  </span>
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                  <span className="inline-flex items-center gap-1">
                    Floor
                    <Tooltip content={HELP.floorStatus} />
                  </span>
                </th>
                <th className="text-left py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden lg:table-cell">
                  <span className="inline-flex items-center gap-1">
                    Consensus
                    <Tooltip content={HELP.consensus} />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((eo) => (
                <tr
                  key={eo.id}
                  className="group hover:bg-stone-50/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <Link href={`/evaluation/${eo.id}`} className="block">
                      <p className="text-sm font-medium text-slate-800 group-hover:text-indigo-700 transition-colors">
                        {eo.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {eo.desc}
                      </p>
                    </Link>
                  </td>
                  <td className="py-3 px-3 hidden sm:table-cell">
                    <AdminTag admin={eo.admin} />
                  </td>
                  <td className="py-3 px-3 text-xs text-slate-500 hidden md:table-cell whitespace-nowrap">
                    {formatDate(eo.date)}
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm font-bold font-serif tabular-nums"
                        style={{ color: scoreColor(eo.cfi) }}
                      >
                        {Math.round(eo.cfi)}
                      </span>
                      <ScoreBar score={eo.cfi} size="sm" />
                    </div>
                  </td>
                  <td className="py-3 px-3 hidden sm:table-cell">
                    <FloorBadge status={eo.floor as FloorStatus} />
                  </td>
                  <td className="py-3 px-3 hidden lg:table-cell">
                    <span
                      className={`text-xs font-medium ${eo.consensusColor}`}
                    >
                      {eo.consensusLabel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

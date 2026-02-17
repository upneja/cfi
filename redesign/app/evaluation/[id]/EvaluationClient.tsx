"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { aggregateEOFull } from "@/lib/aggregation";
import {
  DIMENSIONS,
  DIMENSION_ORDER,
  EVALUATIVE_LENSES,
} from "@/lib/constants";
import type { ExecutiveOrder } from "@/lib/constants";
import { getCitedCases } from "@/lib/caselaw";
import { ScoreDisplay, scoreColor, scoreLabel } from "@/components/ScoreBar";
import { FloorBadge, type FloorStatus } from "@/components/FloorBadge";
import { AdminTag } from "@/components/AdminTag";
import { RadarChart } from "@/components/RadarChart";
import { DimensionalHeatmap } from "@/components/DimensionalHeatmap";
import { LensAccordion } from "@/components/LensAccordion";
import { Tooltip, HELP } from "@/components/Tooltip";
import { PrecedentSection } from "@/components/PrecedentSection";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function EvaluationClient({ eo }: { eo: ExecutiveOrder }) {
  const [showJson, setShowJson] = useState(false);

  const agg = useMemo(() => aggregateEOFull(eo), [eo]);

  const caseCitations = useMemo(() => getCitedCases(eo.narratives), [eo]);

  const steelmanByDim = DIMENSION_ORDER.filter((d) =>
    agg.relevantDims.has(d)
  ).map((dim) => {
    const evalMean =
      EVALUATIVE_LENSES.reduce((s, l) => s + eo.scores[l][dim].s, 0) /
      EVALUATIVE_LENSES.length;
    const smScore = eo.scores["SM"][dim].s;
    return {
      dim,
      label: DIMENSIONS[dim],
      evalMean,
      smScore,
      delta: smScore - evalMean,
    };
  });

  // Compute per-dimension stats for Key Findings
  const dimStats = useMemo(() => {
    return DIMENSION_ORDER.filter((d) => agg.relevantDims.has(d)).map((dim) => {
      const evalScores = EVALUATIVE_LENSES.map((l) => eo.scores[l][dim].s);
      const mean = evalScores.reduce((a, b) => a + b, 0) / evalScores.length;
      const variance =
        evalScores.reduce((s, v) => s + Math.pow(v - mean, 2), 0) /
        evalScores.length;
      const negTwoCount = evalScores.filter((s) => s === -2).length;
      const negOneCount = evalScores.filter((s) => s === -1).length;
      const posCount = evalScores.filter((s) => s > 0).length;
      const normalized = ((mean + 2) / 4) * 100;
      return {
        dim,
        label: DIMENSIONS[dim],
        mean,
        variance,
        normalized,
        negTwoCount,
        negOneCount,
        posCount,
        isFloorTrigger: negTwoCount >= 3,
        isCautionTrigger: negOneCount >= 3,
        isContested: variance > 1.0,
      };
    });
  }, [eo, agg]);

  const floorTriggers = dimStats.filter((d) => d.isFloorTrigger);
  const cautionTriggers = dimStats.filter(
    (d) => d.isCautionTrigger && !d.isFloorTrigger
  );
  const contestedDims = dimStats.filter((d) => d.isContested);
  const strongestDim = dimStats.reduce((best, d) =>
    d.mean > best.mean ? d : best
  );
  const weakestDim = dimStats.reduce((worst, d) =>
    d.mean < worst.mean ? d : worst
  );

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

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <nav className="mb-6">
        <Link
          href="/scorecard"
          className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
        >
          &larr; Scorecard
        </Link>
      </nav>

      {/* Verdict */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <AdminTag admin={eo.admin} />
              <span className="text-xs text-slate-400">{eo.type}</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              {eo.title}
            </h1>
            <p className="mt-1 text-sm text-slate-400">{formatDate(eo.date)}</p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-2xl">
              {eo.brief}
            </p>
          </div>
          <div className="flex-shrink-0 md:ml-8">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-3">
              {/* CFI Score */}
              <div className="text-center md:text-right">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
                  CFI Score
                </p>
                <ScoreDisplay score={agg.cfi} size="lg" />
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {scoreLabel(agg.cfi)}
                </p>
              </div>

              {/* Floor Status */}
              <div className="text-center md:text-right">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
                  Constitutional Floor
                </p>
                <FloorBadge status={agg.floor as FloorStatus} size="md" />
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {agg.floor === "CONFLICT"
                    ? "3+ frameworks identified severe tension"
                    : agg.floor === "TENSION"
                    ? "3+ frameworks identified moderate tension"
                    : "No broad agreement on tension"}
                </p>
              </div>

              {/* Consensus */}
              <div className="text-center md:text-right">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
                  Lens Agreement
                </p>
                <span className={`text-sm font-semibold ${consensusColor}`}>
                  {consensusLabel}
                </span>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {maxVar < 0.5
                    ? "Lenses largely agree"
                    : maxVar <= 1.0
                    ? "Some disagreement across lenses"
                    : "Lenses strongly diverge"}
                </p>
              </div>

              {/* Steelman Delta */}
              {agg.steelmanDelta !== 0 && (
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
                    Steelman Defense
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: agg.steelmanDelta > 0 ? "#059669" : "#dc2626",
                    }}
                  >
                    {agg.steelmanDelta > 0 ? "+" : ""}
                    {agg.steelmanDelta.toFixed(1)}
                  </span>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {agg.steelmanDelta > 0
                      ? "Stronger defense than consensus"
                      : "Defense weaker than consensus"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Constitutional Issues */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4">
          Key Constitutional Issues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Floor Triggers */}
          {floorTriggers.length > 0 && (
            <div className="rounded-md border border-red-200 bg-red-50/50 p-4">
              <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                Floor Conflicts
              </p>
              {floorTriggers.map((d) => (
                <div key={d.dim} className="mb-2 last:mb-0">
                  <p className="text-sm font-medium text-red-900">{d.label}</p>
                  <p className="text-xs text-red-700/80">
                    {d.negTwoCount} of 5 frameworks scored &minus;2 (severe tension)
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Caution Triggers */}
          {cautionTriggers.length > 0 && (
            <div className="rounded-md border border-amber-200 bg-amber-50/50 p-4">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                Tension Areas
              </p>
              {cautionTriggers.map((d) => (
                <div key={d.dim} className="mb-2 last:mb-0">
                  <p className="text-sm font-medium text-amber-900">
                    {d.label}
                  </p>
                  <p className="text-xs text-amber-700/80">
                    {d.negOneCount} of 5 frameworks identified moderate tension
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Contested Dimensions */}
          {contestedDims.length > 0 && (
            <div className="rounded-md border border-indigo-200 bg-indigo-50/50 p-4">
              <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
                Most Contested
              </p>
              {contestedDims.map((d) => (
                <div key={d.dim} className="mb-2 last:mb-0">
                  <p className="text-sm font-medium text-indigo-900">
                    {d.label}
                  </p>
                  <p className="text-xs text-indigo-700/80">
                    High disagreement across lenses (variance{" "}
                    {d.variance.toFixed(2)})
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Strongest & Weakest */}
          <div className="rounded-md border border-slate-200 bg-slate-50/50 p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Dimensional Extremes
            </p>
            <div className="mb-2">
              <p className="text-sm font-medium text-slate-800">
                <span
                  className="font-semibold"
                  style={{ color: scoreColor(strongestDim.normalized) }}
                >
                  Strongest:
                </span>{" "}
                {strongestDim.label}
              </p>
              <p className="text-xs text-slate-500">
                Mean score {strongestDim.mean > 0 ? "+" : ""}
                {strongestDim.mean.toFixed(1)} &mdash;{" "}
                {strongestDim.posCount} of 5 lenses scored positively
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">
                <span
                  className="font-semibold"
                  style={{ color: scoreColor(weakestDim.normalized) }}
                >
                  Weakest:
                </span>{" "}
                {weakestDim.label}
              </p>
              <p className="text-xs text-slate-500">
                Mean score {weakestDim.mean > 0 ? "+" : ""}
                {weakestDim.mean.toFixed(1)} &mdash;{" "}
                {weakestDim.negTwoCount > 0
                  ? `${weakestDim.negTwoCount} lenses found strong tension`
                  : weakestDim.negOneCount > 0
                  ? `${weakestDim.negOneCount} lenses found tension`
                  : "No major tensions identified"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensional Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4 flex items-center gap-1.5">
            Dimensional Profile
            <Tooltip content={HELP.radarChart} />
          </h2>
          <div className="flex justify-center">
            <RadarChart scores={eo.scores} />
          </div>
          <div className="mt-4 flex justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-indigo-600 rounded" />
              Mean
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-indigo-600/10 rounded-sm" />
              Range
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4">
            Dimension Scores by Lens
          </h2>
          <div className="space-y-3">
            {DIMENSION_ORDER.filter((d) => agg.relevantDims.has(d)).map(
              (dim) => {
                const scores = EVALUATIVE_LENSES.map(
                  (l) => eo.scores[l][dim].s
                );
                const mean =
                  scores.reduce((a, b) => a + b, 0) / scores.length;
                const min = Math.min(...scores);
                const max = Math.max(...scores);
                const normalized = ((mean + 2) / 4) * 100;

                return (
                  <div key={dim} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-20 text-right font-medium">
                      {DIMENSIONS[dim]}
                    </span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full relative">
                      <div
                        className="absolute h-2 bg-indigo-100 rounded-full"
                        style={{
                          left: `${((min + 2) / 4) * 100}%`,
                          width: `${((max - min) / 4) * 100}%`,
                        }}
                      />
                      <div
                        className="absolute top-1/2 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm"
                        style={{
                          left: `${normalized}%`,
                          backgroundColor: scoreColor(normalized),
                          transform: `translate(-50%, -50%)`,
                        }}
                      />
                    </div>
                    <span
                      className="text-xs font-semibold tabular-nums w-8"
                      style={{ color: scoreColor(normalized) }}
                    >
                      {mean > 0 ? "+" : ""}
                      {mean.toFixed(1)}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Heatmap */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
        <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4 flex items-center gap-1.5">
          Scoring Matrix
          <Tooltip content={HELP.scoringMatrix} />
        </h2>
        <DimensionalHeatmap scores={eo.scores} />
      </section>

      {/* Lens Narratives */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
        <h2 className="font-serif text-lg font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
          Lens Narratives
          <Tooltip content={HELP.lenses} />
        </h2>
        <p className="text-xs text-slate-400 mb-4">
          Click to expand each constitutional lens&apos;s reasoning.
          {caseCitations.length > 0 && (
            <>
              {" "}Case citations are tagged for fidelity.{" "}
              <Tooltip content={HELP.fidelityTags} />
            </>
          )}
        </p>
        <LensAccordion narratives={eo.narratives} caseCitations={caseCitations} />
      </section>

      {/* Steelman */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
        <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4 flex items-center gap-1.5">
          Steelman Analysis
          <Tooltip content={HELP.steelmanDelta} />
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {eo.narratives["SM"]}
        </p>
        <div>
          <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
            Delta by Dimension
          </h3>
          <div className="space-y-2">
            {steelmanByDim.map((d) => (
              <div key={d.dim} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-20 text-right font-medium">
                  {d.label}
                </span>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full relative">
                  <div className="absolute left-1/2 top-0 w-px h-1.5 bg-slate-300" />
                  {d.delta !== 0 && (
                    <div
                      className="absolute h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          d.delta > 0 ? "#059669" : "#dc2626",
                        left:
                          d.delta > 0
                            ? "50%"
                            : `${50 + (d.delta / 4) * 100}%`,
                        width: `${(Math.abs(d.delta) / 4) * 100}%`,
                      }}
                    />
                  )}
                </div>
                <span
                  className="text-xs font-semibold tabular-nums w-8"
                  style={{
                    color:
                      d.delta > 0
                        ? "#059669"
                        : d.delta < 0
                        ? "#dc2626"
                        : "#9ca3af",
                  }}
                >
                  {d.delta > 0 ? "+" : ""}
                  {d.delta.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precedent Anchoring */}
      {agg.precedentAnchoring && (
        <section className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4 flex items-center gap-1.5">
            Precedent Anchoring
            <Tooltip content={HELP.precedentAnchoring} />
          </h2>
          <PrecedentSection anchoring={agg.precedentAnchoring} />
        </section>
      )}

      {/* Raw JSON */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 mb-12">
        <button
          onClick={() => setShowJson(!showJson)}
          className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              showJson ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Fork This Logic — Raw JSON
        </button>
        {showJson && (
          <pre className="mt-4 p-4 bg-slate-50 rounded border border-slate-100 text-xs font-mono text-slate-600 overflow-x-auto max-h-96 overflow-y-auto">
            {JSON.stringify(
              {
                id: eo.id,
                title: eo.title,
                date: eo.date,
                type: eo.type,
                admin: eo.admin,
                scores: eo.scores,
                narratives: eo.narratives,
              },
              null,
              2
            )}
          </pre>
        )}
      </section>
    </div>
  );
}

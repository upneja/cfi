import Link from "next/link";
import { executiveOrders } from "@/lib/data";
import { aggregateEO } from "@/lib/aggregation";
import { DIMENSION_ORDER, EVALUATIVE_LENSES } from "@/lib/constants";
import type { AggregatedEO } from "@/lib/constants";

function getAdminStats() {
  const admins = ["Obama", "Trump I", "Biden", "Trump II"] as const;
  const dateRanges: Record<string, string> = {
    Obama: "2009-2017",
    "Trump I": "2017-2021",
    Biden: "2021-2025",
    "Trump II": "2025-present",
  };

  return admins.map((admin) => {
    const eos = executiveOrders
      .filter((eo) => eo.admin === admin)
      .map((eo) => ({ ...eo, ...aggregateEO(eo) }));

    const conflicts = eos.filter((eo) => eo.floor === "CONFLICT").length;
    const tensions = eos.filter((eo) => eo.floor === "TENSION").length;
    const alignments = eos.filter((eo) => eo.floor === "ALIGNMENT").length;

    return {
      admin,
      dateRange: dateRanges[admin],
      count: eos.length,
      conflicts,
      tensions,
      alignments,
    };
  });
}

function getNotableEvaluations() {
  const aggregated: AggregatedEO[] = executiveOrders.map((eo) => ({
    ...eo,
    ...aggregateEO(eo),
  }));

  // Broadest consensus: lowest max variance (lenses agree most)
  const withVariance = aggregated.map((eo) => {
    const maxVar = Math.max(
      ...DIMENSION_ORDER.map((d) => {
        if (!eo.relevantDims.has(d)) return 0;
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
    return { ...eo, maxVar };
  });

  const broadestConsensus = withVariance.reduce((a, b) =>
    a.maxVar < b.maxVar ? a : b
  );

  // Most contested: highest max variance
  const mostContested = withVariance.reduce((a, b) =>
    a.maxVar > b.maxVar ? a : b
  );

  // Largest steelman gap: where the defense diverges most from consensus
  const largestSteelmanGap = aggregated.reduce((a, b) =>
    Math.abs(a.steelmanDelta) > Math.abs(b.steelmanDelta) ? a : b
  );

  return [
    {
      label: "Broadest Consensus",
      eo: broadestConsensus,
      stat: broadestConsensus.floor === "CONFLICT" ? "Consensus: Conflict" : broadestConsensus.floor === "TENSION" ? "Consensus: Tension" : "Consensus: Alignment",
      desc: `Interpretive frameworks most strongly agree on ${broadestConsensus.title}.`,
    },
    {
      label: "Most Contested",
      eo: mostContested,
      stat: `${mostContested.contestedDims.length} contested dim.`,
      desc: `${mostContested.title} generates the most disagreement across frameworks.`,
    },
    {
      label: "Strongest Steelman Gap",
      eo: largestSteelmanGap,
      stat: `${largestSteelmanGap.steelmanDelta > 0 ? "+" : ""}${largestSteelmanGap.steelmanDelta.toFixed(0)} delta`,
      desc: `${largestSteelmanGap.title} has the largest gap between strongest defense and consensus.`,
    },
  ];
}

export default function HomePage() {
  const adminStats = getAdminStats();
  const notables = getNotableEvaluations();

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
            Constitutional Fidelity Index
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
            A multi-lens framework for evaluating executive power against
            constitutional principles. Non-partisan. Transparent. Auditable.
          </p>
          <p className="mt-3 text-sm text-slate-400 max-w-xl">
            An analytical framework, not a legal determination. Scores reflect
            structured AI analysis across six interpretive frameworks.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/scorecard"
              className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors"
            >
              View Scorecard
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center px-5 py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-medium rounded transition-colors"
            >
              Read Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Admin Summary Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
            By Administration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adminStats.map((stat) => (
              <Link
                key={stat.admin}
                href={`/scorecard?admin=${encodeURIComponent(stat.admin)}`}
                className="group block p-5 rounded-lg border border-slate-200 bg-stone-50/50 hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {stat.admin}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {stat.dateRange}
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  {stat.count} actions evaluated
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  {stat.conflicts > 0 && (
                    <span className="text-red-700 font-medium">
                      {stat.conflicts} conflict{stat.conflicts > 1 ? "s" : ""}
                    </span>
                  )}
                  {stat.tensions > 0 && (
                    <span className="text-amber-700 font-medium">
                      {stat.tensions} tension{stat.tensions > 1 ? "s" : ""}
                    </span>
                  )}
                  {stat.alignments > 0 && (
                    <span className="text-emerald-700 font-medium">
                      {stat.alignments} alignment{stat.alignments > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Evaluations */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
            Notable Evaluations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notables.map((h) => (
              <Link
                key={h.label}
                href={`/evaluation/${h.eo.id}`}
                className="group block p-5 rounded-lg bg-white border border-slate-150 hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {h.label}
                </p>
                <p className="mt-2 text-lg font-semibold font-serif text-slate-700">
                  {h.stat}
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {h.desc}
                </p>
                <p className="mt-3 text-xs text-indigo-600 font-medium group-hover:text-indigo-500 transition-colors">
                  View evaluation &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How CFI Works (teaser) */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "6 Constitutional Lenses",
                desc: "Every action is evaluated from six distinct interpretive frameworks — Textualist, Originalist, Doctrinalist, Living Constitutionalist, Pragmatist, and Steelman.",
              },
              {
                title: "7 Dimensions",
                desc: "Scores are assigned across seven constitutional dimensions including individual rights, separation of powers, due process, and democratic legitimacy.",
              },
              {
                title: "Transparent Scoring",
                desc: "All prompts, scoring schemas, and integrity tests are published. Every evaluation includes full narratives and raw data for independent verification.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/methodology"
              className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
              Full methodology &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

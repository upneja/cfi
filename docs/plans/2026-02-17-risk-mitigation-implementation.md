# Risk Mitigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Mitigate authority-laundering, false-certainty, and citation-liability risks on the live cfindex.org site.

**Architecture:** Update terminology across the type system and UI components; restructure the evaluation page to lead with consensus instead of score; replace homepage horse-race framing with distribution summaries; add an About page with honest limitations; audit all case citations in narratives.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS

---

### Task 1: Terminology — Update Type System and Constants

**Files:**
- Modify: `redesign/lib/constants.ts:50-51` (AggregatedEO type)
- Modify: `redesign/lib/aggregation.ts:66-88` (computeConstitutionalFloor)

**Step 1: Update the floor type in constants.ts**

Change the `AggregatedEO` interface floor type:

```typescript
// In constants.ts, line 50
floor: 'CONFLICT' | 'TENSION' | 'ALIGNMENT';
```

**Step 2: Update computeConstitutionalFloor return type and values in aggregation.ts**

```typescript
export function computeConstitutionalFloor(
  scores: EOScores,
): 'CONFLICT' | 'TENSION' | 'ALIGNMENT' {
  let hasViolation = false;
  let hasCaution = false;

  DIMENSION_ORDER.forEach((dim) => {
    const negTwoCount = EVALUATIVE_LENSES.filter(
      (l) => scores[l][dim].s === -2,
    ).length;
    const negOneCount = EVALUATIVE_LENSES.filter(
      (l) => scores[l][dim].s === -1,
    ).length;
    if (negTwoCount >= 3) hasViolation = true;
    if (negOneCount >= 3) hasCaution = true;
  });

  return hasViolation ? 'CONFLICT' : hasCaution ? 'TENSION' : 'ALIGNMENT';
}
```

**Step 3: Build to verify no type errors**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | head -50`
Expected: Type errors in components that reference old floor values (FloorBadge, EvaluationClient, ScorecardContent, homepage). This is expected — we fix them in the next tasks.

**Step 4: Commit**

```bash
git add redesign/lib/constants.ts redesign/lib/aggregation.ts
git commit -m "refactor: rename floor statuses VIOLATION→CONFLICT, CAUTION→TENSION, CLEAR→ALIGNMENT"
```

---

### Task 2: Terminology — Update FloorBadge Component

**Files:**
- Modify: `redesign/components/FloorBadge.tsx`

**Step 1: Update FloorBadge styles and display text**

Replace entire file content:

```typescript
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
```

**Step 2: Commit**

```bash
git add redesign/components/FloorBadge.tsx
git commit -m "refactor: update FloorBadge to use CONFLICT/TENSION/ALIGNMENT terminology"
```

---

### Task 3: Terminology — Update Tooltip Help Text

**Files:**
- Modify: `redesign/components/Tooltip.tsx:83-108` (HELP object)

**Step 1: Update HELP strings that reference old terminology**

Change these entries in the `HELP` object:

```typescript
export const HELP = {
  cfiScore:
    "The Constitutional Fidelity Index score (0\u2013100) reflects structured AI analysis of how an executive action relates to constitutional principles across 5 interpretive frameworks and 7 dimensions. This is an analytical tool, not a legal determination.",
  floorStatus:
    "A constitutional floor assessment. CONFLICT means 3+ of 5 interpretive frameworks scored -2 (severe tension) on at least one dimension. TENSION means 3+ scored -1. ALIGNMENT means no such agreement on negative scores.",
  consensus:
    "How much the 5 interpretive frameworks agree. Broad Consensus = low variance across frameworks. Significant Disagreement = frameworks strongly diverge, meaning the action\u2019s constitutional standing is genuinely contested among interpretive approaches.",
  steelmanDelta:
    "The gap between the strongest possible constitutional defense (Steelman framework) and the evaluative consensus. A positive delta means there\u2019s a stronger defense available than the average evaluation suggests.",
  dimensions:
    "Seven aspects of constitutional analysis: individual Rights, Equal protection, Democratic legitimacy, Separation of powers, Due Process, general Welfare, and national Sovereignty.",
  lenses:
    "Six constitutional interpretive frameworks: Textualist (plain text), Originalist (founding-era meaning), Doctrinalist (case law), Living Constitutionalist (evolving meaning), Pragmatist (real-world outcomes), and Steelman (strongest defense).",
  radarChart:
    "Each axis represents a constitutional dimension. The filled area shows the average score across evaluative frameworks. Larger area = stronger alignment. The shaded region shows the range of disagreement.",
  scoringMatrix:
    "Raw scores from each framework on each dimension. Scale: -2 (severe tension) to +2 (strong alignment). Hover cells to see relevance and confidence ratings.",
  relevance:
    "How constitutionally relevant this dimension is to this specific action (0\u20131). Low relevance dimensions are filtered out of the CFI score calculation.",
  confidence:
    "How confident the framework is in its score: H (high), M (moderate), L (low). Based on directness of constitutional text, precedent availability, and empirical evidence.",
  precedentAnchoring:
    "Compares this action\u2019s constitutional profile to the 5 most similar executive orders by cosine similarity across 7 dimensions. Flags any with a CFI delta > 15 points, indicating the evaluation may diverge from patterns seen in similar actions.",
  fidelityTags:
    "Each cited SCOTUS case is tagged: Reliable (good law), Contested (under doctrinal pressure or narrowed), or Reversed (overruled or superseded). Reversed precedent in a narrative may weaken the reasoning.",
} as const;
```

**Step 2: Commit**

```bash
git add redesign/components/Tooltip.tsx
git commit -m "refactor: update tooltip help text with new terminology and analytical framing"
```

---

### Task 4: Terminology — Update EvaluationClient Floor References

**Files:**
- Modify: `redesign/app/evaluation/[id]/EvaluationClient.tsx`

**Step 1: Update floor status strings in the verdict section**

Find the verdict section (around lines 163-173) and update:

```typescript
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
```

**Step 2: Update Key Constitutional Issues section labels**

Find "Floor Violations" label (around line 230) and change to "Floor Conflicts":

```typescript
<p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
  Floor Conflicts
</p>
```

Change "strong tension" description text (around line 237) to use "frameworks":

```typescript
<p className="text-xs text-red-700/80">
  {d.negTwoCount} of 5 frameworks scored &minus;2 (severe tension)
</p>
```

Change "Caution Areas" label to "Tension Areas" (around line 248):

```typescript
<p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
  Tension Areas
</p>
```

Change "found moderate tension" to "identified moderate tension" (around line 255):

```typescript
<p className="text-xs text-amber-700/80">
  {d.negOneCount} of 5 frameworks identified moderate tension
</p>
```

Update `isFloorTrigger` and `isCautionTrigger` references — these are computed properties in `dimStats` (lines 75-76). No name change needed since they're internal.

**Step 3: Build to verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | head -30`
Expected: Should compile. May still have errors in ScorecardContent and homepage — those are next.

**Step 4: Commit**

```bash
git add redesign/app/evaluation/[id]/EvaluationClient.tsx
git commit -m "refactor: update evaluation page floor terminology to CONFLICT/TENSION/ALIGNMENT"
```

---

### Task 5: Terminology — Update ScorecardContent Floor References

**Files:**
- Modify: `redesign/app/scorecard/ScorecardContent.tsx`

**Step 1: Update floor filter dropdown options**

Find the floor filter select (around lines 124-133) and update:

```typescript
<select
  value={floorFilter}
  onChange={(e) => setFloorFilter(e.target.value)}
  className="px-3 py-1.5 text-sm border border-slate-200 rounded bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
>
  <option value="all">All Floor Status</option>
  <option value="CONFLICT">Conflict</option>
  <option value="TENSION">Tension</option>
  <option value="ALIGNMENT">Alignment</option>
</select>
```

**Step 2: Commit**

```bash
git add redesign/app/scorecard/ScorecardContent.tsx
git commit -m "refactor: update scorecard floor filter options to new terminology"
```

---

### Task 6: Terminology — Update Homepage Floor References

**Files:**
- Modify: `redesign/app/page.tsx`

**Step 1: Update admin stats floor counting**

Find the admin stats function (around lines 25-26) and update the variable names and floor values:

```typescript
const conflicts = eos.filter((eo) => eo.floor === "CONFLICT").length;
const tensions = eos.filter((eo) => eo.floor === "TENSION").length;
```

Update the return object:

```typescript
return {
  admin,
  dateRange: dateRanges[admin],
  count: eos.length,
  avgCfi,
  conflicts,
  tensions,
};
```

**Step 2: Update the admin card template**

Find the floor count display (around lines 155-166) and update:

```typescript
<div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
  <span>{stat.count} evaluated</span>
  {stat.conflicts > 0 && (
    <span className="text-red-700">
      {stat.conflicts} conflict{stat.conflicts > 1 ? "s" : ""}
    </span>
  )}
  {stat.tensions > 0 && (
    <span className="text-amber-700">
      {stat.tensions} tension{stat.tensions > 1 ? "s" : ""}
    </span>
  )}
</div>
```

**Step 3: Build to verify all terminology changes compile**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds with no type errors.

**Step 4: Commit**

```bash
git add redesign/app/page.tsx
git commit -m "refactor: update homepage floor terminology to conflicts/tensions"
```

---

### Task 7: Evaluation Page — Consensus-First Hierarchy

**Files:**
- Modify: `redesign/app/evaluation/[id]/EvaluationClient.tsx:131-218` (verdict section)

**Step 1: Add the context line below the breadcrumb nav**

Find the `<nav>` section (around line 123-130) and add after it:

```typescript
<nav className="mb-6">
  <Link
    href="/scorecard"
    className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
  >
    &larr; Scorecard
  </Link>
</nav>

<p className="text-xs text-slate-400 mb-4">
  AI-generated constitutional analysis. Not a legal determination.{" "}
  <Link href="/methodology" className="text-indigo-500 hover:text-indigo-400 transition-colors">
    Methodology &rarr;
  </Link>
</p>
```

**Step 2: Restructure the verdict section metrics**

Replace the entire metrics grid (the `<div className="flex-shrink-0 md:ml-8">` block, around lines 148-216) with consensus-first layout:

```typescript
<div className="flex-shrink-0 md:ml-8">
  <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-3">
    {/* Lens Agreement — PRIMARY */}
    <div className="text-center md:text-right col-span-2 md:col-span-1">
      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
        Lens Agreement
      </p>
      <p className={`text-lg md:text-xl font-bold ${consensusColor}`}>
        {consensusLabel}
      </p>
      <p className="mt-0.5 text-[11px] text-slate-400">
        {agg.floor === "CONFLICT"
          ? `Constitutional floor conflict across ${floorTriggers.length} dimension${floorTriggers.length > 1 ? "s" : ""}`
          : agg.floor === "TENSION"
          ? `Constitutional tension across ${cautionTriggers.length} dimension${cautionTriggers.length > 1 ? "s" : ""}`
          : maxVar < 0.5
          ? "Frameworks largely agree on alignment"
          : "Frameworks diverge on assessment"}
      </p>
    </div>

    {/* Floor Status */}
    <div className="text-center md:text-right">
      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
        Constitutional Floor
      </p>
      <FloorBadge status={agg.floor as FloorStatus} size="md" />
    </div>

    {/* CFI Score — SECONDARY */}
    <div className="text-center md:text-right">
      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1">
        CFI Score
      </p>
      <ScoreDisplay score={agg.cfi} size="sm" />
      <p className="mt-0.5 text-[11px] text-slate-400">
        {scoreLabel(agg.cfi)}
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
```

Key changes:
- Lens Agreement is now first, takes full width on mobile (`col-span-2`), and uses `text-lg md:text-xl` (was `text-sm`)
- Floor status is second, no explanatory subtext (badge is self-explanatory)
- CFI Score is third, uses `size="sm"` (was `size="lg"`)
- Steelman Delta stays last

**Step 3: Build and verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add redesign/app/evaluation/[id]/EvaluationClient.tsx
git commit -m "feat: restructure evaluation page to lead with consensus, demote score"
```

---

### Task 8: Homepage — Replace Admin Averages with Distributions

**Files:**
- Modify: `redesign/app/page.tsx:9-170` (getAdminStats function and admin card template)

**Step 1: Remove ScoreDisplay and ScoreBar imports**

Remove from imports at top of file:

```typescript
import { ScoreDisplay, ScoreBar, scoreColor } from "@/components/ScoreBar";
```

Replace with (only import what's still needed for Notable Evaluations):

```typescript
import { scoreColor } from "@/components/ScoreBar";
```

**Step 2: Update getAdminStats to return distribution instead of average**

Replace `avgCfi` calculation and return value:

```typescript
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
```

**Step 3: Update admin card template**

Replace the admin card content (inside the `.map()`) with a distribution-focused layout:

```typescript
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
```

**Step 4: Commit**

```bash
git add redesign/app/page.tsx
git commit -m "feat: replace homepage admin averages with floor distribution summaries"
```

---

### Task 9: Homepage — Replace Key Findings with Notable Evaluations

**Files:**
- Modify: `redesign/app/page.tsx:38-92` (getHeadlineFindings function)

**Step 1: Rewrite getHeadlineFindings**

Replace the entire function:

```typescript
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
```

**Step 2: Update the section that renders it**

Find the "Headline Findings" section (around line 173-205) and update:

- Change the `const headlines = getHeadlineFindings()` call to `const notables = getNotableEvaluations()`
- Change section heading from "Key Findings" to "Notable Evaluations"
- Update the `.map()` to use `notables`
- Remove the `scoreColor` styling on the stat — use slate-700 instead (these aren't scores anymore)

```typescript
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
```

**Step 3: Add context line to hero section**

After the hero tagline paragraph (line 109), add:

```typescript
<p className="mt-3 text-sm text-slate-400 max-w-xl">
  An analytical framework, not a legal determination. Scores reflect
  structured AI analysis across six interpretive frameworks.
</p>
```

**Step 4: Build and verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add redesign/app/page.tsx
git commit -m "feat: replace Key Findings horse-race with Notable Evaluations (consensus/contested/steelman)"
```

---

### Task 10: Scorecard — Add Context Line and Reorder Columns

**Files:**
- Modify: `redesign/app/scorecard/ScorecardContent.tsx`

**Step 1: Add context line below scorecard description**

Find the header section (around lines 100-108) and add after the `<p>` description:

```typescript
<p className="mt-1 text-xs text-slate-400">
  Scores reflect structured AI analysis across six constitutional interpretive frameworks.{" "}
  <Link href="/about" className="text-indigo-500 hover:text-indigo-400 transition-colors">
    About CFI &rarr;
  </Link>
</p>
```

Add `Link` to the imports at the top of the file (it's already imported).

**Step 2: Reorder table columns — move Consensus before CFI**

In the `<thead>`, swap the Consensus and CFI column headers so the order is: Executive Action | Admin | Date | Consensus | CFI | Floor.

In the `<tbody>`, swap the corresponding `<td>` elements to match.

The Consensus column should now appear before CFI, and use `hidden sm:table-cell` instead of `hidden lg:table-cell` (make it visible on more screen sizes).

The CFI column keeps its current visibility.

**Step 3: Build and verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add redesign/app/scorecard/ScorecardContent.tsx
git commit -m "feat: add context line to scorecard, move consensus column before CFI score"
```

---

### Task 11: Navigation — Add About Link

**Files:**
- Modify: `redesign/components/Nav.tsx:7-13`

**Step 1: Add About to the nav links array**

Insert after Home, before Scorecard:

```typescript
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/scorecard", label: "Scorecard" },
  { href: "/methodology", label: "Methodology" },
  { href: "/scholars", label: "Scholars" },
  { href: "/papers", label: "Papers" },
];
```

**Step 2: Commit**

```bash
git add redesign/components/Nav.tsx
git commit -m "feat: add About link to navigation"
```

---

### Task 12: Create About Page

**Files:**
- Create: `redesign/app/about/page.tsx`

**Step 1: Create the about page**

```typescript
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
        About CFI
      </h1>
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        The Constitutional Fidelity Index is an analytical framework for
        evaluating executive actions against constitutional principles. It is
        not a legal determination, a partisan ranking tool, or a substitute
        for professional legal analysis.
      </p>

      {/* What CFI Is */}
      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          What CFI Is
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li>
            An analytical framework that applies six constitutional interpretive
            frameworks to executive actions, producing structured evaluations
            across seven constitutional dimensions.
          </li>
          <li>
            AI-generated analysis using transparent, published prompts. Every
            evaluation includes full narratives and raw scoring data for
            independent verification.
          </li>
          <li>
            A tool for structured thinking about constitutional questions &mdash;
            surfacing where interpretive frameworks agree, where they diverge,
            and what the strongest constitutional defense looks like.
          </li>
        </ul>
      </section>

      {/* What CFI Is Not */}
      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          What CFI Is Not
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li>
            <strong className="text-slate-800">Not a legal determination.</strong>{" "}
            No constitutional &ldquo;conflict&rdquo; or &ldquo;alignment&rdquo;
            exists until a court rules. CFI floor assessments reflect analytical
            consensus across interpretive frameworks, not judicial findings.
          </li>
          <li>
            <strong className="text-slate-800">Not a partisan ranking tool.</strong>{" "}
            Comparing average scores across administrations conflates different
            types of actions and is methodologically invalid. Each evaluation
            should be read on its own terms.
          </li>
          <li>
            <strong className="text-slate-800">Not a substitute for legal analysis.</strong>{" "}
            CFI evaluations are generated by AI models applying structured
            constitutional reasoning. They are not reviewed by constitutional
            scholars or practicing attorneys.
          </li>
        </ul>
      </section>

      {/* Known Limitations */}
      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          Known Limitations
        </h2>
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <div>
            <p className="font-medium text-slate-800">
              Dimension selection is editorial.
            </p>
            <p className="mt-1">
              The seven constitutional dimensions (Rights, Equal Protection,
              Democratic Process, Separation of Powers, Due Process, Welfare,
              Sovereignty) are choices, not discoveries. Alternative frameworks
              would weight different aspects of constitutional analysis.
              Federalism and enumerated powers are not standalone dimensions in
              the current version.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-800">
              AI dependency and hallucination risk.
            </p>
            <p className="mt-1">
              Evaluations are generated by large language models that may
              hallucinate case citations, misstate holdings, or produce
              inconsistent results across runs. Case citations in lens narratives
              should not be treated as verified legal research.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-800">Sample bias.</p>
            <p className="mt-1">
              100 executive orders across four administrations is not
              comprehensive. The selection itself reflects editorial judgment
              about which actions are constitutionally significant. Administrations
              with more evaluated actions are not necessarily more constitutionally
              problematic &mdash; they may simply have more actions deemed worth
              evaluating.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-800">
              Calibration limits.
            </p>
            <p className="mt-1">
              CFI includes a{" "}
              <Link href="/scholars/integrity" className="text-indigo-600 hover:text-indigo-500">
                bias calibration system
              </Link>{" "}
              that detects and corrects for partisan asymmetry across
              interpretive frameworks. However, this system cannot detect bias
              shared uniformly across all frameworks &mdash; only differential
              bias between them.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-800">Reproducibility.</p>
            <p className="mt-1">
              LLM outputs are non-deterministic. Re-running evaluations with
              different model versions, temperatures, or even the same
              configuration on different days could produce materially different
              scores. Published evaluations reflect a specific generation run and
              are not re-run without versioning.
            </p>
          </div>
        </div>
      </section>

      {/* Appropriate Use */}
      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          Appropriate Use
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li>
            Use CFI to understand how different constitutional philosophies
            evaluate an executive action. The lens narratives and disagreement
            data are more informative than the score alone.
          </li>
          <li>
            Pay attention to the consensus level. An evaluation with
            &ldquo;Significant Disagreement&rdquo; across frameworks is making a
            weaker claim than one with &ldquo;Broad Consensus.&rdquo;
          </li>
          <li>
            Do not cite CFI scores as evidence that an executive action is
            constitutional or unconstitutional. The score is an analytical
            summary, not a legal conclusion.
          </li>
        </ul>
      </section>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="flex gap-4 text-sm">
          <Link
            href="/methodology"
            className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
          >
            Full methodology &rarr;
          </Link>
          <Link
            href="/scholars/integrity"
            className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
          >
            Integrity tests &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Build and verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds. Navigate to /about to verify content renders.

**Step 3: Commit**

```bash
git add redesign/app/about/page.tsx
git commit -m "feat: add About page with limitations, appropriate use, and editorial disclosures"
```

---

### Task 13: Footer — Enhanced Disclaimer

**Files:**
- Modify: `redesign/components/Footer.tsx:26-29`

**Step 1: Update the footer disclaimer and add About link**

Add `import Link from "next/link";` at the top of Footer.tsx.

Replace the disclaimer div:

```typescript
<div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
  All evaluations are AI-generated constitutional analysis, not legal
  determinations. Prompts, schemas, and integrity tests are published for
  independent verification.{" "}
  <Link
    href="/about"
    className="text-slate-500 hover:text-slate-700 underline transition-colors"
  >
    About CFI
  </Link>
</div>
```

Also add About link to the footer nav links section:

```typescript
<div className="flex flex-col gap-2">
  <a href="/about" className="hover:text-slate-900 transition-colors">About</a>
  <a href="/methodology" className="hover:text-slate-900 transition-colors">Methodology</a>
  <a href="/scholars" className="hover:text-slate-900 transition-colors">For Scholars</a>
</div>
```

**Step 2: Build and verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build 2>&1 | tail -20`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add redesign/components/Footer.tsx
git commit -m "feat: enhance footer disclaimer, add About page link"
```

---

### Task 14: Citation Audit — Extract All Case Citations

**Files:**
- Read: `redesign/lib/data.ts` (all narratives)
- Read: `redesign/lib/caselaw.ts` (known case database)

**Step 1: Extract all unique case citations from all 600 narratives**

Write a script or use subagents to:
1. Read every narrative from all 100 EOs (6 narratives each = 600 total)
2. Extract case citations using the pattern from `getCitedCases()` in caselaw.ts
3. Deduplicate and produce a list of all unique case names cited
4. Cross-reference against the `CASE_DATABASE` in caselaw.ts to identify which are known vs. unknown

**Step 2: For each unknown citation, verify it exists**

For each case citation NOT in the `CASE_DATABASE`:
- Search for the case to verify it's a real Supreme Court case
- Verify the holding is accurately represented in the narrative context
- Categorize as: Verified / Inaccurate / Hallucinated

**Step 3: For citations found to be hallucinated, note the EO ID, lens, and citation for removal**

Produce a report listing:
- EO ID
- Lens (TX/OR/DC/LC/PR/SM)
- Citation text
- Status (Verified / Inaccurate / Hallucinated)
- Notes on what's wrong (if Inaccurate or Hallucinated)

**Step 4: Fix or remove problematic citations**

- Hallucinated: Remove the citation from the narrative text in data.ts
- Inaccurate: Correct the narrative text or remove the citation
- Save the audit report to `docs/citation-audit-report.md`

**Step 5: Commit**

```bash
git add redesign/lib/data.ts docs/citation-audit-report.md
git commit -m "fix: audit and correct case citations in evaluation narratives"
```

NOTE: This task is the most labor-intensive. It should be done with parallel subagents — split the 100 EOs into batches and verify citations concurrently.

---

### Task 15: Final Build and Smoke Test

**Step 1: Full build**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next build`
Expected: Build succeeds with no errors.

**Step 2: Start dev server and manually verify**

Run: `cd /Users/upneja/Projects/cfi/redesign && npx next dev`

Check:
- Homepage: No admin average scores visible. Distribution counts (conflicts/tensions/alignments) shown. Notable Evaluations section shows consensus/contested/steelman gap. Context line visible in hero.
- Scorecard: Context line visible. Consensus column appears before CFI. Floor filter shows Conflict/Tension/Alignment.
- Evaluation page: Context line below breadcrumb. Lens Agreement is primary metric. CFI score is secondary (smaller). Floor badges say Conflict/Tension/Alignment.
- About page: Renders with all sections. Links work.
- Navigation: About link present between Home and Scorecard.
- Footer: Enhanced disclaimer visible. About link present.

**Step 3: Commit any final fixes**

```bash
git add -A
git commit -m "fix: final adjustments from smoke test"
```

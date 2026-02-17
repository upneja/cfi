# CFI Risk Mitigation Design

**Date**: 2026-02-17
**Status**: Approved
**Goal**: Address worst-case misuse scenarios for cfindex.org while preserving analytical value.

## Context

CFI is live at cfindex.org. It evaluates 100 executive orders across 4 administrations using 6 constitutional interpretive lenses. The current site has zero meaningful disclaimers beyond a footer line, scores are visually dominant on every page, admin-level averages invite horse-race comparisons, and case citations in lens narratives are unverified.

Identified risk vectors:
1. Authority laundering (scores cited out of context as objective truth)
2. Manufactured objectivity / bias laundering (editorial choices presented as neutral)
3. False certainty (AI analysis presented with the aesthetic of legal scholarship)
4. Selective deployment as political weapon (cherry-picking scores)
5. LLM dependency / non-reproducibility
6. Legal liability from legalistic terminology
7. Capture by bad-faith actors (fork and modify)

## Design Decisions

### 1. Terminology Changes

| Current | New | Rationale |
|---------|-----|-----------|
| VIOLATION | CONFLICT | "Violation" implies a legal finding. "Conflict" describes what the data shows. |
| CAUTION | TENSION | Parallel construction. More descriptive of measurement. |
| CLEAR | ALIGNMENT | "Clear" implies innocence. "Alignment" is what scoring measures. |
| "3+ lenses found severe tension" | "3+ interpretive frameworks identified severe constitutional tension" | Clarifies these are analytical frameworks, not rulings. |

**Files affected**: `constants.ts`, `FloorBadge.tsx`, `aggregation.ts`, `EvaluationClient.tsx`, `page.tsx` (homepage), scorecard components.

### 2. Homepage Restructure

**Admin cards**: Remove `ScoreDisplay` (big number) and `ScoreBar` (colored bar). Replace with distribution summary: `X conflicts, Y tensions, Z alignments` as primary stat. Remove average CFI number entirely.

**Key Findings → "Notable Evaluations"**: Replace horse-race framing:
- "Lowest CFI Score" → "Broadest Consensus" (where lenses agree most)
- "Most Contested" → keep as-is
- "Highest CFI Score" → "Strongest Steelman Gap" (where good-faith defense diverges most from consensus)

**Hero section**: Add context line below tagline:
> "CFI is an analytical framework, not a legal determination. Scores reflect structured AI analysis across six interpretive lenses — not judicial findings."

### 3. Evaluation Page Hierarchy

**Current**: CFI Score (large) → Floor Badge → Lens Agreement → Steelman Delta

**New**: Flip the emphasis.

**Row 1 (headline)**:
- Lens Agreement becomes primary indicator, displayed large
- Format: "Broad Consensus: Constitutional Conflict" or "Significant Disagreement"
- Floor status merged into this headline
- Subtext: "5 of 6 interpretive frameworks identified severe tension across N dimensions"

**Row 2 (supporting metrics, smaller)**:
- CFI Score at `size="sm"` (secondary metric)
- Steelman Delta (kept as-is)

**Context line** below breadcrumb on every evaluation page:
> "AI-generated constitutional analysis. Not a legal determination. [Methodology →]"

### 4. New /about Page

**Structure**:
1. What CFI Is — analytical framework, AI-generated, tool for structured thinking
2. What CFI Is Not — not legal determination, not partisan ranking tool
3. Known Limitations:
   - Dimension selection is editorial
   - LLM dependency (hallucination risk, non-determinism)
   - Sample bias (100 EOs is not comprehensive)
   - Calibration limits (can't detect uniform bias)
   - Reproducibility concerns
4. Appropriate Use — use lens narratives and disagreement, not just scores
5. Citation Verification Status

**Navigation**: Add "About" to top nav between "Home" and "Scorecard".

### 5. Citation Audit

Spawn subagents to verify every case citation in all 100 EO narratives against actual case law.

Per citation, determine:
- Is the case real? (not hallucinated)
- Is the holding accurately stated?
- Is the fidelity tag correct?

Results categorized as: Verified / Inaccurate / Hallucinated.

**Actions**:
- Verified: no change
- Inaccurate: correct narrative or remove citation
- Hallucinated: remove immediately

No UI indicators for verification status at this time (deferred).

### 6. Scorecard Changes

- Update floor badge terminology (CONFLICT/TENSION/ALIGNMENT)
- Add context line at top: "Scores reflect structured AI analysis across six constitutional interpretive lenses. [About CFI →]"
- Move consensus column before CFI score column (users see agreement level before number)

### 7. Footer Enhancement

Update from:
> "All evaluations are AI-generated using transparent, auditable prompts."

To:
> "All evaluations are AI-generated constitutional analysis, not legal determinations. Prompts, schemas, and integrity tests are published for independent verification."

Add link to /about page.

## Implementation Priority

1. **Citation audit** (highest priority — live liability)
2. **Terminology changes** (low effort, high impact)
3. **Evaluation page hierarchy** (core UX change)
4. **Homepage restructure** (reduces horse-race framing)
5. **About page** (new content)
6. **Scorecard + footer changes** (cleanup)

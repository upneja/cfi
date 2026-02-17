// Constitutional Fidelity Index - Aggregation Functions

import {
  DIMENSION_ORDER,
  DIMENSION_WEIGHTS,
  EVALUATIVE_LENSES,
  LENS_ORDER,
  type AggregatedEO,
  type DimensionKey,
  type EOScores,
  type ExecutiveOrder,
  type LensKey,
} from './constants';
import { LENS_WEIGHTS } from './calibration';
import { executiveOrders } from './data';

const N = LENS_ORDER.length;
const N_E = EVALUATIVE_LENSES.length;

// ---------------------------------------------------------------------------
// Precedent Anchoring Types
// ---------------------------------------------------------------------------

export interface PrecedentMatch {
  eoId: string;
  title: string;
  admin: string;
  similarity: number;
  cfi: number;
  cfiDelta: number;
  flagged: boolean;
}

export interface PrecedentAnchoring {
  precedents: PrecedentMatch[];
  anchored: boolean;
  maxDelta: number;
}

// ---------------------------------------------------------------------------
// Core Aggregation Functions (Steps 1-5)
// ---------------------------------------------------------------------------

/**
 * Calculate mean relevance per dimension and determine which dimensions
 * are relevant (mean relevance >= 0.2).
 */
export function computeRelevanceFiltering(scores: EOScores): {
  meanRelevance: Record<DimensionKey, number>;
  relevantDims: Set<DimensionKey>;
} {
  const meanRelevance = {} as Record<DimensionKey, number>;
  const relevantDims = new Set<DimensionKey>();

  DIMENSION_ORDER.forEach((dim) => {
    const relevances = LENS_ORDER.map((lens) => scores[lens][dim].r);
    meanRelevance[dim] = relevances.reduce((a, b) => a + b, 0) / N;
    if (meanRelevance[dim] >= 0.2) relevantDims.add(dim);
  });

  return { meanRelevance, relevantDims };
}

/**
 * Determine the constitutional floor status.
 * - CONFLICT:   3+ evaluative lenses score -2 on any dimension
 * - TENSION:    3+ evaluative lenses score -1 on any dimension
 * - ALIGNMENT:  otherwise
 */
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

/**
 * Compute the CFI alignment score (0-100) from the relevant dimensions.
 *
 * Formula: CFI = ((A + 2) / 4) * 100
 * where A is the weighted mean of mean evaluative scores across relevant
 * dimensions.
 *
 * When lensWeights are provided, each lens's contribution to the per-dimension
 * mean is weighted by its calibration weight.
 */
export function computeAlignmentScore(
  scores: EOScores,
  relevantDims: Set<DimensionKey>,
  lensWeights?: Record<LensKey, number>,
): number {
  let numerator = 0;
  let denominator = 0;

  Array.from(relevantDims).forEach((dim) => {
    let meanScore: number;
    if (lensWeights) {
      let weightedSum = 0;
      let weightSum = 0;
      for (const lens of EVALUATIVE_LENSES) {
        const w = lensWeights[lens] ?? 1;
        weightedSum += w * scores[lens][dim].s;
        weightSum += w;
      }
      meanScore = weightSum > 0 ? weightedSum / weightSum : 0;
    } else {
      meanScore =
        EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) /
        N_E;
    }
    const meanRelevance =
      LENS_ORDER.reduce((sum, lens) => sum + scores[lens][dim].r, 0) / N;
    const weight = DIMENSION_WEIGHTS[dim];
    numerator += weight * meanRelevance * meanScore;
    denominator += weight * meanRelevance;
  });

  const A = denominator > 0 ? numerator / denominator : 0;
  const CFI = ((A + 2) / 4) * 100;
  return Math.max(0, Math.min(100, CFI));
}

/**
 * Compute variance of evaluative lens scores for a single dimension.
 */
export function computeDimensionalVariance(
  scores: EOScores,
  dim: DimensionKey,
): number {
  const meanScore =
    EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) / N_E;
  return (
    EVALUATIVE_LENSES.reduce(
      (sum, lens) => sum + Math.pow(scores[lens][dim].s - meanScore, 2),
      0,
    ) / N_E
  );
}

/**
 * Compute the steelman delta: difference between the steelman lens and
 * the evaluative consensus, as a percentage of the score range.
 */
export function computeSteelmanDelta(
  scores: EOScores,
  relevantDims: Set<DimensionKey>,
): number {
  let steelmanNum = 0;
  let evaluativeNum = 0;
  let denominator = 0;

  Array.from(relevantDims).forEach((dim) => {
    const meanRelevance =
      LENS_ORDER.reduce((sum, lens) => sum + scores[lens][dim].r, 0) / N;
    const steelmanScore = scores['SM'][dim].s;
    const evaluativeScore =
      EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) /
      N_E;
    steelmanNum += meanRelevance * steelmanScore;
    evaluativeNum += meanRelevance * evaluativeScore;
    denominator += meanRelevance;
  });

  if (denominator === 0) return 0;
  const deltaS = steelmanNum / denominator - evaluativeNum / denominator;
  return (deltaS / 4) * 100;
}

/**
 * Aggregate all computed metrics for an executive order.
 * Uses calibrated lens weights from the bias correction system.
 */
export function aggregateEO(
  eo: ExecutiveOrder,
): Omit<AggregatedEO, keyof ExecutiveOrder> {
  const { meanRelevance, relevantDims } = computeRelevanceFiltering(eo.scores);
  const floor = computeConstitutionalFloor(eo.scores);
  const cfi = computeAlignmentScore(eo.scores, relevantDims, LENS_WEIGHTS);
  const steelmanDelta = computeSteelmanDelta(eo.scores, relevantDims);
  const contestedDims = DIMENSION_ORDER.filter(
    (dim) =>
      relevantDims.has(dim) && computeDimensionalVariance(eo.scores, dim) > 1.0,
  );

  return {
    floor,
    cfi,
    steelmanDelta,
    contestedDims,
    relevantDims,
    meanRelevance,
    lensWeights: LENS_WEIGHTS,
  };
}

// ---------------------------------------------------------------------------
// Step 6: Precedent Anchoring
// ---------------------------------------------------------------------------

/**
 * Compute the 7-dimensional mean evaluative score profile for an EO.
 * Returns a vector of length 7 (one per dimension).
 */
function computeScoreProfile(scores: EOScores): number[] {
  return DIMENSION_ORDER.map((dim) =>
    EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) / N_E,
  );
}

/**
 * Cosine similarity between two numeric vectors.
 */
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  magA = Math.sqrt(magA);
  magB = Math.sqrt(magB);
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

// Precomputed CFI cache for all 100 EOs (computed once at module scope)
const _cfiCache = new Map<string, { cfi: number; profile: number[] }>();

function ensureCfiCache() {
  if (_cfiCache.size > 0) return;
  for (const eo of executiveOrders) {
    const { relevantDims } = computeRelevanceFiltering(eo.scores);
    const cfi = computeAlignmentScore(eo.scores, relevantDims, LENS_WEIGHTS);
    const profile = computeScoreProfile(eo.scores);
    _cfiCache.set(eo.id, { cfi, profile });
  }
}

/**
 * Find the 5 most similar EOs by cosine similarity of their 7-dim
 * evaluative score profiles. Flag any with |CFI delta| > 15.
 */
export function computePrecedentAnchoring(
  targetEo: ExecutiveOrder,
  targetCfi: number,
): PrecedentAnchoring {
  ensureCfiCache();

  const targetProfile = computeScoreProfile(targetEo.scores);
  const candidates: PrecedentMatch[] = [];

  for (const eo of executiveOrders) {
    if (eo.id === targetEo.id) continue;

    const cached = _cfiCache.get(eo.id);
    if (!cached) continue;

    const similarity = cosineSimilarity(targetProfile, cached.profile);
    const cfiDelta = targetCfi - cached.cfi;

    candidates.push({
      eoId: eo.id,
      title: eo.title,
      admin: eo.admin,
      similarity,
      cfi: cached.cfi,
      cfiDelta,
      flagged: Math.abs(cfiDelta) > 15,
    });
  }

  // Sort by similarity descending, take top 5
  candidates.sort((a, b) => b.similarity - a.similarity);
  const precedents = candidates.slice(0, 5);
  const maxDelta = precedents.length > 0
    ? Math.max(...precedents.map((p) => Math.abs(p.cfiDelta)))
    : 0;

  return {
    precedents,
    anchored: precedents.every((p) => !p.flagged),
    maxDelta,
  };
}

/**
 * Full aggregation including precedent anchoring (Step 6).
 * Use this instead of aggregateEO() when you need precedent data.
 * aggregateEO() itself does NOT call precedent anchoring (avoids
 * circular recursion since the CFI cache uses aggregateEO internally).
 */
export function aggregateEOFull(
  eo: ExecutiveOrder,
): Omit<AggregatedEO, keyof ExecutiveOrder> {
  const result = aggregateEO(eo);
  const precedentAnchoring = computePrecedentAnchoring(eo, result.cfi);
  return { ...result, precedentAnchoring };
}

/**
 * Compute consensus level from maximum dimensional variance.
 */
export function consensus(
  eo: AggregatedEO,
): { l: string; c: string; b: string } {
  const maxVar = Math.max(
    ...DIMENSION_ORDER.map((d) => {
      if (!eo.relevantDims || !eo.relevantDims.has(d)) return 0;
      const ms =
        EVALUATIVE_LENSES.reduce((s, l) => s + eo.scores[l][d].s, 0) / N_E;
      return (
        EVALUATIVE_LENSES.reduce(
          (s, l) => s + Math.pow(eo.scores[l][d].s - ms, 2),
          0,
        ) / N_E
      );
    }),
  );

  if (maxVar < 0.5) return { l: 'Broad Consensus', c: '#047857', b: '#ecfdf5' };
  if (maxVar <= 1.0)
    return { l: 'Moderate Agreement', c: '#a16207', b: '#fffbeb' };
  return { l: 'Significant Disagreement', c: '#b91c1c', b: '#fef2f2' };
}

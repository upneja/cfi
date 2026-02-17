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
} from './constants';

const N = LENS_ORDER.length;
const N_E = EVALUATIVE_LENSES.length;

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
 * - VIOLATION: 3+ evaluative lenses score -2 on any dimension
 * - CAUTION:   3+ evaluative lenses score -1 on any dimension
 * - CLEAR:     otherwise
 */
export function computeConstitutionalFloor(
  scores: EOScores,
): 'VIOLATION' | 'CAUTION' | 'CLEAR' {
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

  return hasViolation ? 'VIOLATION' : hasCaution ? 'CAUTION' : 'CLEAR';
}

/**
 * Compute the CFI alignment score (0-100) from the relevant dimensions.
 *
 * Formula: CFI = ((A + 2) / 4) * 100
 * where A is the weighted mean of mean evaluative scores across relevant
 * dimensions.
 */
export function computeAlignmentScore(
  scores: EOScores,
  relevantDims: Set<DimensionKey>,
): number {
  let numerator = 0;
  let denominator = 0;

  Array.from(relevantDims).forEach((dim) => {
    const meanScore =
      EVALUATIVE_LENSES.reduce((sum, lens) => sum + scores[lens][dim].s, 0) /
      N_E;
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
 */
export function aggregateEO(
  eo: ExecutiveOrder,
): Omit<AggregatedEO, keyof ExecutiveOrder> {
  const { meanRelevance, relevantDims } = computeRelevanceFiltering(eo.scores);
  const floor = computeConstitutionalFloor(eo.scores);
  const cfi = computeAlignmentScore(eo.scores, relevantDims);
  const steelmanDelta = computeSteelmanDelta(eo.scores, relevantDims);
  const contestedDims = DIMENSION_ORDER.filter(
    (dim) =>
      relevantDims.has(dim) && computeDimensionalVariance(eo.scores, dim) > 1.0,
  );

  return { floor, cfi, steelmanDelta, contestedDims, relevantDims, meanRelevance };
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

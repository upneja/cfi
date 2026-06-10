// Constitutional Fidelity Index - Dynamic Bias Correction via Calibration
//
// Computes per-lens weights from partisan symmetry test results.
// Lenses that show higher partisan bias get lower weights.

import { EVALUATIVE_LENSES, DIMENSION_ORDER, type LensKey, type DimensionKey } from './constants';
import { symmetryPairEOMapping } from './integrity';
import { executiveOrders } from './data';

// Build EO lookup for fast access
const eoLookup = new Map(executiveOrders.map((eo) => [eo.id, eo]));

/**
 * For each evaluative lens, compute the mean absolute score difference
 * between dem and gop analogues across all mapped symmetry pairs.
 * Higher diff = more partisan bias for that lens.
 */
export function computeLensCalibration(): Record<LensKey, number> {
  const biasScores = {} as Record<LensKey, number>;

  for (const lens of EVALUATIVE_LENSES) {
    let totalAbsDiff = 0;
    let pairCount = 0;

    for (const [, mapping] of Object.entries(symmetryPairEOMapping)) {
      const demEO = eoLookup.get(mapping.dem);
      const gopEO = eoLookup.get(mapping.gop);
      if (!demEO || !gopEO) continue;

      // Compute mean score across all 7 dimensions for each side
      let demSum = 0;
      let gopSum = 0;
      let dimCount = 0;

      for (const dim of DIMENSION_ORDER) {
        const demCell = demEO.scores[lens]?.[dim];
        const gopCell = gopEO.scores[lens]?.[dim];
        if (!demCell || !gopCell) continue;

        // Weight by average relevance of both sides
        const avgRelevance = (demCell.r + gopCell.r) / 2;
        if (avgRelevance < 0.2) continue; // Skip irrelevant dimensions

        demSum += demCell.s * avgRelevance;
        gopSum += gopCell.s * avgRelevance;
        dimCount += avgRelevance;
      }

      if (dimCount > 0) {
        const demMean = demSum / dimCount;
        const gopMean = gopSum / dimCount;
        totalAbsDiff += Math.abs(demMean - gopMean);
        pairCount++;
      }
    }

    biasScores[lens] = pairCount > 0 ? totalAbsDiff / pairCount : 0;
  }

  // Steelman lens always gets bias score 0 (not calibrated)
  biasScores['SM' as LensKey] = 0;

  return biasScores;
}

/**
 * Compute per-lens weights from bias scores.
 * Weight = 1 / (1 + biasScore), normalized so evaluative weights sum to
 * EVALUATIVE_LENSES.length for backward compatibility.
 * Steelman (SM) always gets weight 1.0.
 */
export function getLensWeights(): Record<LensKey, number> {
  const biasScores = computeLensCalibration();
  const weights = {} as Record<LensKey, number>;

  // Compute raw weights for evaluative lenses
  let rawSum = 0;
  for (const lens of EVALUATIVE_LENSES) {
    const raw = 1 / (1 + biasScores[lens]);
    weights[lens] = raw;
    rawSum += raw;
  }

  // Normalize so evaluative weights sum to EVALUATIVE_LENSES.length
  const scale = EVALUATIVE_LENSES.length / rawSum;
  for (const lens of EVALUATIVE_LENSES) {
    weights[lens] *= scale;
  }

  // SM stays at 1.0
  weights['SM' as LensKey] = 1.0;

  return weights;
}

// Compute once at module scope (static data = deterministic)
export const LENS_WEIGHTS = getLensWeights();

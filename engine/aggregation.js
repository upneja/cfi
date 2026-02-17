/**
 * Constitutional Fidelity Index - 6-Step Aggregation Engine
 * Implements the aggregation procedure from Section 4.8 of the CFI whitepaper
 *
 * @module CFIAggregation
 */

/**
 * Default configuration for the aggregation process
 * @type {Object}
 */
const DEFAULT_CONFIG = {
  // Step 1: Relevance Filtering
  relevanceThreshold: 0.2,  // τ_r: dimensions with mean relevance ≥ this are included

  // Step 4: Dimensional Variance Analysis
  varianceThreshold: 1.0,   // τ_v: dimensions with variance > this are flagged as CONTESTED

  // Step 6: Precedent Anchoring
  precedentDifferenceThreshold: 15,  // Points (configurable)

  // Dimension weights (default: uniform)
  dimensionWeights: {},  // If empty, defaults to w_i = 1 for all

  // Optional: Precedent data for anchoring
  precedentData: []
};

/**
 * STEP 1: Relevance Filtering
 *
 * Compute mean relevance for each dimension across all 6 lenses.
 * Filter to only relevant dimensions where mean relevance ≥ τ_r.
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {number} relevanceThreshold - τ_r threshold (default: 0.2)
 * @returns {Object} { relevanceByDimension, relevantDimensions }
 *   - relevanceByDimension: Map of dimension -> mean relevance
 *   - relevantDimensions: Set of dimension codes that passed filter
 */
function step1_RelevanceFiltering(lensOutputs, relevanceThreshold = 0.2) {
  // Accumulate relevance scores by dimension
  const relevanceAccumulator = {};
  const dimensionCount = {};

  for (const lensOutput of lensOutputs) {
    for (const dimEval of lensOutput.dimensionEvaluations) {
      const code = dimEval.dimensionCode;
      relevanceAccumulator[code] = (relevanceAccumulator[code] || 0) + dimEval.relevance;
      dimensionCount[code] = (dimensionCount[code] || 0) + 1;
    }
  }

  // Compute mean relevance: r̄_i = (1/5) Σ r_ij
  const relevanceByDimension = {};
  for (const [code, sum] of Object.entries(relevanceAccumulator)) {
    const count = dimensionCount[code];
    relevanceByDimension[code] = sum / count;
  }

  // Filter: R = {i : r̄_i ≥ τ_r}
  const relevantDimensions = new Set(
    Object.entries(relevanceByDimension)
      .filter(([_, meanRel]) => meanRel >= relevanceThreshold)
      .map(([code, _]) => code)
  );

  return {
    relevanceByDimension,
    relevantDimensions
  };
}

/**
 * STEP 2: Constitutional Floor Assessment
 *
 * Determine the constitutional floor (VIOLATION, CAUTION, or CLEAR) based on
 * the count of evaluative lenses (L1-L5, excluding Steelman L6) assigning
 * critical scores across relevant dimensions.
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {Set<string>} relevantDimensions - Dimensions that passed relevance filter
 * @returns {Object} { floor, details }
 *   - floor: "VIOLATION" | "CAUTION" | "CLEAR"
 *   - details: Array of { dimension, severity, count } for triggered dimensions
 */
function step2_ConstitutionalFloor(lensOutputs, relevantDimensions) {
  // L_E = evaluative lenses, excluding Steelman
  // Steelman is identified by lensId matching the max ID in the set
  const maxLensId = Math.max(...lensOutputs.map(lo => lo.lensId));
  const evaluativeLenses = lensOutputs.filter(lo => lo.lensId !== maxLensId);

  const violationDetails = [];
  const cautionDetails = [];

  // For each relevant dimension, count critical scores
  for (const dimension of relevantDimensions) {
    // Count lenses assigning -2 (violations)
    const countMinus2 = evaluativeLenses.filter(lens => {
      const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
      return dimEval && dimEval.score === -2;
    }).length;

    // Count lenses assigning -1 (cautions)
    const countMinus1 = evaluativeLenses.filter(lens => {
      const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
      return dimEval && dimEval.score === -1;
    }).length;

    // Check violation threshold: n_i^(-2) ≥ 3
    if (countMinus2 >= 3) {
      violationDetails.push({
        dimension,
        severity: -2,
        count: countMinus2
      });
    }

    // Check caution threshold: n_i^(-1) ≥ 3
    if (countMinus1 >= 3) {
      cautionDetails.push({
        dimension,
        severity: -1,
        count: countMinus1
      });
    }
  }

  // Determine floor: VIOLATION > CAUTION > CLEAR
  let floor = "CLEAR";
  let details = [];

  if (violationDetails.length > 0) {
    floor = "VIOLATION";
    details = violationDetails;
  } else if (cautionDetails.length > 0) {
    floor = "CAUTION";
    details = cautionDetails;
  }

  return { floor, details };
}

/**
 * STEP 3: Constitutional Alignment Score
 *
 * Compute weighted mean score across relevant dimensions, normalized to 0-100 scale.
 * CFI = ((A + 2) / 4) × 100, where A ∈ [-2, +2] maps to CFI ∈ [0, 100]
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {Set<string>} relevantDimensions - Dimensions that passed relevance filter
 * @param {Object} relevanceByDimension - Mean relevance per dimension
 * @param {Object} dimensionWeights - Custom weights per dimension (optional)
 * @returns {Object} { alignmentScoreRaw, alignmentScore }
 *   - alignmentScoreRaw: A value in [-2, +2]
 *   - alignmentScore: CFI value in [0, 100]
 */
function step3_AlignmentScore(
  lensOutputs,
  relevantDimensions,
  relevanceByDimension,
  dimensionWeights = {}
) {
  // L_E = evaluative lenses only (exclude Steelman), per whitepaper Section 4.9.3
  // Steelman is always the highest lensId (6 in full system, 5 in legacy 5-lens)
  const maxLensId = Math.max(...lensOutputs.map(lo => lo.lensId));
  const evaluativeLenses = lensOutputs.filter(lo => lo.lensId !== maxLensId);

  let weightedSum = 0;
  let totalWeight = 0;

  // For each relevant dimension
  for (const dimension of relevantDimensions) {
    // Compute mean score: s̄_i = (1/N_E) Σ s_ij (evaluative lenses only)
    let scoreSum = 0;
    let scoreCount = 0;

    for (const lensOutput of evaluativeLenses) {
      const evaluation = lensOutput.dimensionEvaluations.find(
        e => e.dimensionCode === dimension
      );
      if (evaluation) {
        scoreSum += evaluation.score;
        scoreCount++;
      }
    }

    const meanScore = scoreCount > 0 ? scoreSum / scoreCount : 0;
    const meanRelevance = relevanceByDimension[dimension] || 0;

    // Get weight (default: w_i = 1)
    const weight = dimensionWeights[dimension] || 1;

    // Add to weighted sum: w_i · r̄_i · s̄_i
    weightedSum += weight * meanRelevance * meanScore;
    totalWeight += weight * meanRelevance;
  }

  // Compute weighted alignment: A = Σ_{i∈R} (w_i · r̄_i · s̄_i) / Σ_{i∈R} (w_i · r̄_i)
  const alignmentScoreRaw = totalWeight > 0 ? weightedSum / totalWeight : 0;

  // Normalize to 0-100: CFI = ((A + 2) / 4) × 100
  // A ∈ [-2, +2] → CFI ∈ [0, 100]
  const alignmentScore = ((alignmentScoreRaw + 2) / 4) * 100;

  return {
    alignmentScoreRaw,
    alignmentScore: Math.max(0, Math.min(100, alignmentScore))  // Clamp to [0, 100]
  };
}

/**
 * STEP 4: Dimensional Variance Analysis
 *
 * Compute variance of scores for each relevant dimension across evaluative lenses.
 * Flag dimensions as CONTESTED if variance > τ_v.
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {Set<string>} relevantDimensions - Dimensions that passed relevance filter
 * @param {number} varianceThreshold - τ_v threshold (default: 1.0)
 * @returns {Object} { varianceByDimension, contestedDimensions }
 *   - varianceByDimension: Map of dimension -> variance
 *   - contestedDimensions: Set of dimensions with high variance
 */
function step4_VarianceAnalysis(lensOutputs, relevantDimensions, varianceThreshold = 1.0) {
  // L_E = evaluative lenses only (exclude Steelman), per whitepaper Section 4.9.4
  const maxLensId = Math.max(...lensOutputs.map(lo => lo.lensId));
  const evaluativeLenses = lensOutputs.filter(lo => lo.lensId !== maxLensId);
  const varianceByDimension = {};
  const contestedDimensions = new Set();

  for (const dimension of relevantDimensions) {
    // Collect scores from evaluative lenses only
    const scores = [];
    for (const lensOutput of evaluativeLenses) {
      const evaluation = lensOutput.dimensionEvaluations.find(
        e => e.dimensionCode === dimension
      );
      if (evaluation) {
        scores.push(evaluation.score);
      }
    }

    // Compute mean
    const mean = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;

    // Compute variance: σ²_i = (1/N_E) Σ (s_ij - s̄_i)²
    const variance = scores.length > 0
      ? scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length
      : 0;

    varianceByDimension[dimension] = variance;

    // Check if contested: σ²_i > τ_v
    if (variance > varianceThreshold) {
      contestedDimensions.add(dimension);
    }
  }

  return {
    varianceByDimension,
    contestedDimensions
  };
}

/**
 * STEP 5: Steelman Delta
 *
 * Compute the difference in alignment score that would result if the Steelman
 * Advocate's scores replaced the mean of evaluative lenses, normalized to -100 to +100.
 *
 * For each relevant dimension:
 *   ŝ_i = (1/4) Σ_{j=1}^{4} s_ij (mean of evaluative lenses)
 *   s_i5 = score from Steelman lens
 *
 * Δ_S = [Σ_{i∈R} (r̄_i · s_i5)] / [Σ_{i∈R} r̄_i] - [Σ_{i∈R} (r̄_i · ŝ_i)] / [Σ_{i∈R} r̄_i]
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {Set<string>} relevantDimensions - Dimensions that passed relevance filter
 * @param {Object} relevanceByDimension - Mean relevance per dimension
 * @returns {Object} { steelmanDeltaRaw, steelmanDelta }
 *   - steelmanDeltaRaw: Δ_S in [-2, +2] scale
 *   - steelmanDelta: Normalized to -100 to +100 scale
 */
function step5_SteelmanDelta(lensOutputs, relevantDimensions, relevanceByDimension) {
  // Extract lens outputs - Steelman is always the highest lensId
  const maxLensId = Math.max(...lensOutputs.map(lo => lo.lensId));
  const evaluativeLenses = lensOutputs.filter(lo => lo.lensId !== maxLensId);
  const steelmanLens = lensOutputs.find(lo => lo.lensId === maxLensId);

  if (!steelmanLens) {
    return { steelmanDeltaRaw: 0, steelmanDelta: 0 };
  }

  let steelmanWeightedSum = 0;
  let evaluativeWeightedSum = 0;
  let totalWeight = 0;

  for (const dimension of relevantDimensions) {
    const meanRelevance = relevanceByDimension[dimension] || 0;

    // Get Steelman score: s_i5
    const steelmanEval = steelmanLens.dimensionEvaluations.find(
      e => e.dimensionCode === dimension
    );
    const steelmanScore = steelmanEval ? steelmanEval.score : 0;

    // Compute mean of evaluative lenses: ŝ_i = (1/4) Σ_{j=1}^{4} s_ij
    let evaluativeScoreSum = 0;
    let evaluativeCount = 0;
    for (const lens of evaluativeLenses) {
      const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
      if (dimEval) {
        evaluativeScoreSum += dimEval.score;
        evaluativeCount++;
      }
    }
    const evaluativeMean = evaluativeCount > 0 ? evaluativeScoreSum / evaluativeCount : 0;

    // Add weighted contributions
    steelmanWeightedSum += meanRelevance * steelmanScore;
    evaluativeWeightedSum += meanRelevance * evaluativeMean;
    totalWeight += meanRelevance;
  }

  // Compute delta
  let steelmanDeltaRaw = 0;
  if (totalWeight > 0) {
    const steelmanMean = steelmanWeightedSum / totalWeight;
    const evaluativeMean = evaluativeWeightedSum / totalWeight;
    steelmanDeltaRaw = steelmanMean - evaluativeMean;
  }

  // Normalize: Δ_S_normalized = (Δ_S / 4) × 100 to get -100 to +100 scale
  const steelmanDelta = (steelmanDeltaRaw / 4) * 100;

  return {
    steelmanDeltaRaw,
    steelmanDelta: Math.max(-100, Math.min(100, steelmanDelta))  // Clamp to [-100, +100]
  };
}

/**
 * STEP 6: Precedent Anchoring
 *
 * Compare current CFI score against analogous historical actions.
 * Flag if difference exceeds threshold (default: 15 points).
 *
 * @param {number} alignmentScore - Current CFI score (0-100)
 * @param {Array<Object>} precedentData - Array of { action, score }
 * @param {number} differenceThreshold - Points difference to flag (default: 15)
 * @returns {Object} { precedentComparison, flaggedAnomalies }
 *   - precedentComparison: Comparison summary
 *   - flaggedAnomalies: Actions that differ significantly
 */
function step6_PrecedentAnchoring(
  alignmentScore,
  precedentData = [],
  differenceThreshold = 15
) {
  const flaggedAnomalies = [];

  if (precedentData.length === 0) {
    return {
      precedentComparison: "No precedent data available",
      flaggedAnomalies: []
    };
  }

  for (const precedent of precedentData) {
    const difference = Math.abs(alignmentScore - precedent.score);
    if (difference > differenceThreshold) {
      flaggedAnomalies.push({
        precedentAction: precedent.action,
        precedentScore: precedent.score,
        currentScore: alignmentScore,
        difference,
        direction: alignmentScore > precedent.score ? "higher" : "lower"
      });
    }
  }

  const comparison = flaggedAnomalies.length > 0
    ? `Score differs significantly from ${flaggedAnomalies.length} precedent(s)`
    : "Score is consistent with historical precedents";

  return {
    precedentComparison: comparison,
    flaggedAnomalies
  };
}

/**
 * Main aggregation function
 *
 * Executes all 6 steps of the aggregation procedure and returns comprehensive results.
 *
 * @param {Array<Object>} lensOutputs - Array of 6 lens evaluation outputs
 * @param {Object} config - Configuration object (see DEFAULT_CONFIG)
 * @returns {Object} Complete aggregated output
 *   - floor: Constitutional floor assessment
 *   - floorDetails: Details on triggered floors
 *   - alignmentScore: CFI score (0-100)
 *   - dimensionScores: Per-dimension aggregation
 *   - steelmanDelta: Steelman impact score
 *   - precedentComparison: Comparison with historical actions
 *   - steps: Detailed results from each step (for transparency)
 */
function aggregate(lensOutputs, config = {}) {
  // Merge config with defaults
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  // Validate input - whitepaper specifies 5 evaluative + 1 Steelman = 6 total,
  // but also supports 5 total (4 evaluative + Steelman) during transition
  if (!Array.isArray(lensOutputs) || (lensOutputs.length !== 5 && lensOutputs.length !== 6)) {
    throw new Error("lensOutputs must be an array of 5 or 6 lens outputs");
  }

  // Execute aggregation steps
  const step1 = step1_RelevanceFiltering(
    lensOutputs,
    finalConfig.relevanceThreshold
  );

  const step2 = step2_ConstitutionalFloor(lensOutputs, step1.relevantDimensions);

  const step3 = step3_AlignmentScore(
    lensOutputs,
    step1.relevantDimensions,
    step1.relevanceByDimension,
    finalConfig.dimensionWeights
  );

  const step4 = step4_VarianceAnalysis(
    lensOutputs,
    step1.relevantDimensions,
    finalConfig.varianceThreshold
  );

  const step5 = step5_SteelmanDelta(
    lensOutputs,
    step1.relevantDimensions,
    step1.relevanceByDimension
  );

  const step6 = step6_PrecedentAnchoring(
    step3.alignmentScore,
    finalConfig.precedentData,
    finalConfig.precedentDifferenceThreshold
  );

  // Build dimension scores object
  const dimensionScores = {};
  for (const dimension of step1.relevantDimensions) {
    const scores = lensOutputs.map(lens => {
      const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
      return dimEval ? dimEval.score : 0;
    });
    const relevances = lensOutputs.map(lens => {
      const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
      return dimEval ? dimEval.relevance : 0;
    });

    const meanScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    const meanRelevance = relevances.reduce((a, b) => a + b, 0) / relevances.length;
    const variance = step4.varianceByDimension[dimension] || 0;

    dimensionScores[dimension] = {
      meanScore,
      meanRelevance,
      isRelevant: true,
      variance,
      isContested: step4.contestedDimensions.has(dimension),
      lensScores: lensOutputs.map((lens, idx) => {
        const dimEval = lens.dimensionEvaluations.find(e => e.dimensionCode === dimension);
        return {
          lensId: lens.lensId,
          score: dimEval ? dimEval.score : 0,
          relevance: dimEval ? dimEval.relevance : 0
        };
      })
    };
  }

  return {
    floor: step2.floor,
    floorDetails: step2.details,
    alignmentScore: step3.alignmentScore,
    dimensionScores,
    steelmanDelta: step5.steelmanDelta,
    precedentComparison: step6.precedentComparison,
    flaggedAnomalies: step6.flaggedAnomalies,
    aggregationMetrics: {
      relevanceThreshold: finalConfig.relevanceThreshold,
      varianceThreshold: finalConfig.varianceThreshold,
      totalDimensions: Object.keys(dimensionScores).length,
      relevantDimensions: step1.relevantDimensions.size,
      contestedDimensions: step4.contestedDimensions.size
    },
    _steps: {
      step1,
      step2,
      step3,
      step4,
      step5,
      step6
    }
  };
}

// Export for Node.js/ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    aggregate,
    step1_RelevanceFiltering,
    step2_ConstitutionalFloor,
    step3_AlignmentScore,
    step4_VarianceAnalysis,
    step5_SteelmanDelta,
    step6_PrecedentAnchoring,
    DEFAULT_CONFIG
  };
}

// Also export for ES6 module systems
export {
  aggregate,
  step1_RelevanceFiltering,
  step2_ConstitutionalFloor,
  step3_AlignmentScore,
  step4_VarianceAnalysis,
  step5_SteelmanDelta,
  step6_PrecedentAnchoring,
  DEFAULT_CONFIG
};

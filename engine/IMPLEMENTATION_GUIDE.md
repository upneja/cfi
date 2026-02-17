# Constitutional Fidelity Index - Architecture Implementation

## Overview

This directory contains the core architecture for the Constitutional Fidelity Index (CFI) evaluation system. Two files implement the complete pipeline:

1. **schema.json** - JSON Schema definition for evaluation outputs
2. **aggregation.js** - 6-step aggregation engine

## File 1: schema.json

A comprehensive JSON Schema (Draft-07) that defines the complete evaluation output structure.

### Structure

```
root
├── metadata                     // Evaluation context & timestamps
├── classifierOutput             // Initial action classification
│   ├── actionSummary
│   ├── relevantDimensions[]
│   └── confidenceScore
├── lensOutputs[]                // 6 lens agents (1 per lens)
│   ├── lensId (1-6)
│   ├── lensName
│   ├── dimensionEvaluations[]   // Per-dimension eval
│   │   ├── score (-2 to 2)
│   │   ├── relevance (0-1)
│   │   ├── confidence (High/Medium/Low)
│   │   ├── citation (tier 1-4)
│   │   ├── justification
│   │   └── counterargument
│   └── narrative
└── aggregatedOutput             // Final results
    ├── floor (VIOLATION/CAUTION/CLEAR)
    ├── floorDetails[]
    ├── alignmentScore (0-100)
    ├── dimensionScores{}
    ├── steelmanDelta (-100 to 100)
    └── brief
```

### Usage

Use this schema to validate:
- Input from the classifier
- Output from each lens agent
- Final aggregated results

```bash
# Validate with any JSON Schema validator
npm install ajv-cli
ajv validate -s schema.json -d evaluation_output.json
```

## File 2: aggregation.js

Complete implementation of the 6-step aggregation procedure (Section 4.8 of whitepaper).

### 6-Step Pipeline

**Step 1: Relevance Filtering**
- Compute mean relevance per dimension across all 6 lenses
- Filter dimensions where mean relevance ≥ 0.2 (configurable)
- Output: Set of relevant dimensions

**Step 2: Constitutional Floor Assessment**
- Count evaluative lenses (1-5) assigning critical scores per dimension
- VIOLATION: if any dimension has ≥3 lenses scoring -2
- CAUTION: if any dimension has ≥3 lenses scoring -1
- CLEAR: otherwise

**Step 3: Constitutional Alignment Score**
- Compute weighted mean score across relevant dimensions
- Normalize to 0-100 scale: CFI = ((A + 2) / 4) × 100
- Where A ∈ [-2, +2]

**Step 4: Dimensional Variance Analysis**
- Compute variance of scores per dimension
- Flag as CONTESTED if variance > 1.0 (configurable)
- Indicates lens disagreement

**Step 5: Steelman Delta**
- Compare Steelman lens score vs. evaluative lenses mean
- Normalize to -100 to +100 scale
- Shows how Steelman reframes the analysis

**Step 6: Precedent Anchoring**
- Compare CFI score against historical precedents
- Flag if difference > 15 points (configurable)
- Helps identify anomalous decisions

### API Usage

```javascript
const agg = require('./aggregation.js');

// With 6 lens outputs from the evaluation system
const result = agg.aggregate(lensOutputs, {
  relevanceThreshold: 0.2,
  varianceThreshold: 1.0,
  precedentDifferenceThreshold: 15,
  dimensionWeights: {},  // or { 'DIMENSION': 2.0, ... }
  precedentData: []      // or [ { action: 'name', score: 75 }, ... ]
});

// Results include:
// - floor: 'VIOLATION' | 'CAUTION' | 'CLEAR'
// - alignmentScore: 0-100
// - dimensionScores: { per-dimension analysis }
// - steelmanDelta: -100 to 100
// - aggregationMetrics: { counts and thresholds }
// - _steps: detailed outputs from each step
```

### Individual Step Functions

Each step can be imported and used independently for testing:

```javascript
const {
  step1_RelevanceFiltering,
  step2_ConstitutionalFloor,
  step3_AlignmentScore,
  step4_VarianceAnalysis,
  step5_SteelmanDelta,
  step6_PrecedentAnchoring
} = require('./aggregation.js');
```

### Example

```javascript
// Create 6 lens outputs with evaluations
const lensOutputs = [
  {
    lensId: 1,
    lensName: 'Textualist',
    dimensionEvaluations: [
      {
        dimensionCode: 'SPEECH',
        score: 2,           // Clear alignment
        relevance: 0.95,
        confidence: 'High',
        citation: { text: '1st Amendment', tier: 1 },
        justification: '...',
        counterargument: '...'
      },
      // ... more dimensions
    ],
    narrative: '...'
  },
  // ... 5 more lenses
];

const result = agg.aggregate(lensOutputs);

console.log(result.floor);                // 'CLEAR'
console.log(result.alignmentScore);       // 72.5
console.log(result.dimensionScores);      // Per-dimension breakdown
console.log(result.steelmanDelta);        // Steelman impact
```

## Configuration

Default configuration in `DEFAULT_CONFIG`:

```javascript
{
  relevanceThreshold: 0.2,              // Step 1 filter
  varianceThreshold: 1.0,               // Step 4 contested flag
  precedentDifferenceThreshold: 15,     // Step 6 anomaly detection
  dimensionWeights: {},                 // Custom per-dimension weights
  precedentData: []                     // Historical comparison data
}
```

All thresholds are configurable via the second parameter to `aggregate()`.

## Testing

The module uses CommonJS and ES6 export patterns for compatibility:

```javascript
// CommonJS
const agg = require('./aggregation.js');

// ES6 (with appropriate build tooling)
import { aggregate, DEFAULT_CONFIG } from './aggregation.js';
```

Run tests:
```bash
node aggregation.test.js
```

## Key Definitions

- **Lens**: Constitutional interpretation framework (Textualist, Originalist, Doctrinalist, Living Constitutionalist, Pragmatist, Steelman Advocate)
- **Dimension**: Constitutional principle evaluated (Free Speech, Equal Protection, etc.)
- **Score**: Alignment assessment (-2 to +2)
- **Relevance**: How applicable this dimension is to the action (0-1)
- **Confidence**: Assessment confidence (High/Medium/Low)
- **Citation Tier**: Authority level of supporting source (1=Ratified Constitutional Law, 2=Founding Interpretive Context, 3A=Constitutional Legislation, 3B=Judicial Precedent, 4=Comparative Democratic Evidence)

## Integration Points

1. **Classifier** → produces `classifierOutput`
2. **6 Lens Agents** → produce `lensOutputs[]`
3. **Aggregation Engine** → produces `aggregatedOutput`
4. **Final Schema** → validates entire evaluation

## Notes

- All variance and score calculations follow whitepaper notation exactly
- The Steelman lens (L6) is excluded from floor assessment, alignment score, and variance analysis; it feeds only into the Steelman Delta (Step 5) and relevance filtering (Step 1)
- Edge cases handled: empty precedent data, missing dimension evaluations
- All scores clamped to valid ranges to prevent overflow

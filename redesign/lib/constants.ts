// Constitutional Fidelity Index - Constants & Types

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

export type DimensionKey = 'R' | 'E' | 'D' | 'SP' | 'DP' | 'W' | 'N';

export type LensKey = 'TX' | 'OR' | 'DC' | 'LC' | 'PR' | 'SM';

export interface ScoreCell {
  s: number;
  r: number;
  c: string;
}

export type LensScores = Record<DimensionKey, ScoreCell>;

export type EOScores = Record<LensKey, LensScores>;

export interface ExecutiveOrder {
  id: string;
  title: string;
  date: string;
  type: string;
  admin: string;
  desc: string;
  brief: string;
  scores: EOScores;
  narratives: Record<LensKey, string>;
}

export interface AggregatedEO extends ExecutiveOrder {
  floor: 'VIOLATION' | 'CAUTION' | 'CLEAR';
  cfi: number;
  steelmanDelta: number;
  contestedDims: DimensionKey[];
  relevantDims: Set<DimensionKey>;
  meanRelevance: Record<DimensionKey, number>;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const DIMENSIONS: Record<DimensionKey, string> = {
  R: 'Rights',
  E: 'Equal',
  D: 'Democratic',
  SP: 'Separation',
  DP: 'Due Process',
  W: 'Welfare',
  N: 'Sovereignty',
};

export const DIMENSION_ORDER: DimensionKey[] = ['R', 'E', 'D', 'SP', 'DP', 'W', 'N'];

export const LENSES: Record<LensKey, { name: string; color: string }> = {
  TX: { name: 'Textualist', color: '#4338ca' },
  OR: { name: 'Originalist', color: '#0369a1' },
  DC: { name: 'Doctrinalist', color: '#b45309' },
  LC: { name: 'Living Constitutionalist', color: '#047857' },
  PR: { name: 'Pragmatist', color: '#7e22ce' },
  SM: { name: 'Steelman', color: '#be185d' },
};

export const LENS_ORDER: LensKey[] = ['TX', 'OR', 'DC', 'LC', 'PR', 'SM'];

export const EVALUATIVE_LENSES: LensKey[] = ['TX', 'OR', 'DC', 'LC', 'PR'];

export const DIMENSION_WEIGHTS: Record<DimensionKey, number> = {
  R: 1.0,
  E: 1.0,
  D: 1.0,
  SP: 1.0,
  DP: 1.0,
  W: 1.0,
  N: 1.0,
};

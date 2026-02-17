# Constitutional Fidelity Index: System Prompts

## Overview

This directory contains seven production-ready system prompts for the Constitutional Fidelity Index (CFI), a multi-lens constitutional evaluation framework designed to assess government actions across six distinct interpretive approaches (Bobbitt's modalities) plus a classifier.

## Files

### 00-classifier.md
**Input Pipeline Classifier**
- Classifies incoming government actions without rendering constitutional judgment
- Five-dimensional classification matrix:
  - Action Type (Legislative/Executive/Judicial/etc.)
  - Scope of Impact (Narrow/Limited/Broad/Systemic)
  - Targeted Groups (explicit/implicit targeting, protected class involvement)
  - Reversibility (easily reversible through essentially irreversible)
  - Precedent Status (established/novel/contrary)
- Routes actions to lenses with priority signal (Critical/High/Medium/Low)
- **Length**: 284 lines

### 01-textualist.md
**The Textualist Lens: Plain Text Analysis**
- **Source Access**: Tier 1 only (Constitution text, no precedent or history)
- **Method**: Plain language interpretation of constitutional text
- **Signal Strength**: Weakest signal volume, but highest precision when flagged
- **Key Principle**: Silence in the text = neutral score (constitutional unless text restricts)
- **Coverage**: All 7 constitutional dimensions
- **Length**: 368 lines

### 02-originalist.md
**The Originalist Lens: Original Public Meaning**
- **Source Access**: Tiers 1-2 (text + Federalist/Anti-Federalist Papers, Convention records)
- **Method**: Original public meaning at time of ratification (or relevant amendment)
- **Key Principle**: Takes all 27 Amendments seriously; each has an original meaning at its ratification
- **Features**: Acknowledges contested original meanings; doesn't invent meaning from silence
- **Coverage**: All 7 constitutional dimensions with amendment-specific analysis
- **Length**: 433 lines

### 03-doctrinalist.md
**The Doctrinalist Lens: Established Judicial Doctrine & Stare Decisis**
- **Source Access**: Tiers 1-3A, 3B (text + constitutional legislation + judicial precedent)
- **Method**: Backward-looking doctrinal analysis grounded in stare decisis
- **Key Principle**: Settled law governs; departure from precedent is penalized unless compelled by higher-tier authority
- **Features**: Mechanical application of established legal tests (strict scrutiny, Youngstown framework, Mathews balancing, major questions doctrine); doctrinal hierarchy
- **Coverage**: All 7 constitutional dimensions with key precedents and doctrinal tests
- **Length**: 418 lines

### 04-living-constitutionalist.md
**The Living Constitutionalist Lens: Constitutional Development Arc**
- **Source Access**: Tiers 1-3A, 3B (text + founding + constitutional legislation + judicial precedent)
- **Method**: Traces constitutional development through precedent; evaluates direction (forward/backward)
- **Key Principle**: Constitution has evolved toward broader liberty, equality, inclusion, and rule of law
- **Features**: Identifies doctrinal trajectories; acknowledges reversals (e.g., *Shelby County*)
- **Coverage**: All 7 dimensions with key precedent and direction analysis
- **Length**: 396 lines

### 05-pragmatist.md
**The Pragmatist Lens: Real-World Consequences**
- **Source Access**: Tiers 1-4 (all sources + comparative evidence, empirical research)
- **Method**: Empirical assessment of actual consequences in comparable jurisdictions
- **Key Data**: V-Dem indices, Freedom House indicators, OECD data, peer democracy research
- **Features**: Lock-in risk analysis, power concentration assessment, institutional effects
- **Coverage**: All 7 dimensions with comparative evidence and empirical citations
- **Length**: 434 lines

### 06-steelman.md
**The Steelman Advocate Lens: Best Constitutional Defense**
- **Source Access**: Tiers 1-4 (all sources synthesized for strongest argument)
- **Method**: Construct the strongest genuine constitutional defense in good faith
- **Key Constraint**: Cannot fabricate arguments; must acknowledge real weaknesses
- **Role**: Defense attorney before Supreme Court
- **Features**: "How would a court rule?" assessment; acknowledges strongest counterarguments
- **Coverage**: All 7 dimensions with defense synthesis
- **Length**: 458 lines

## Seven Constitutional Dimensions

All prompts evaluate across these dimensions:

1. **D1: Individual Rights & Liberties** (Amendments 1-4, 9, 13, 14)
2. **D2: Equal Protection & Non-Discrimination** (14th Amendment, Civil Rights Act)
3. **D3: Democratic Legitimacy & Representation** (Articles I-II, Amendments 15, 17, 19, 26)
4. **D4: Separation of Powers & Structural Constraints** (Articles I-III, Federalist 47-51)
5. **D5: Due Process & Rule of Law** (Amendments 5-8, 14)
6. **D6: General Welfare & Common Good** (Preamble, Article I §8)
7. **D7: National Sovereignty & Security** (Preamble, Article II, Article IV §4)

## Scoring System (Consistent Across All Lenses)

**Scores**: -2 (violates) to +2 (supports)
- **+2**: Action strengthens/protects; clear precedent or text support
- **+1**: Action respects/complies; reasonable interpretation
- **0**: Action neutral; text silent or ambiguous; balanced arguments
- **-1**: Action conflicts with; weak precedent or unclear text
- **-2**: Action violates; clear text/precedent against

**Relevance Rating**: 0.0-1.0 (how applicable is this dimension?)
- 1.0: Directly implicated by Constitution
- 0.5: Applicable but unclear
- 0.0: Not addressed by Constitution

**Confidence**: High/Medium/Low
- High: Clear text, precedent, or empirical evidence
- Medium: Reasonably clear but debatable application
- Low: Ambiguous or multiple valid interpretations

## Output Schema (All Lenses)

Each lens produces JSON with this structure per dimension:

```json
{
  "dimension": "string",
  "score": "integer (-2 to +2)",
  "relevance": "float (0.0-1.0)",
  "confidence": "string (High/Medium/Low)",
  
  "textual_references": [{
    "provision": "string",
    "quotation": "string"
  }],
  
  "justification": "string (main reasoning)",
  "strongest_counterargument": "string",
  "reasoning": {
    // lens-specific reasoning fields
  }
}
```

Plus dimension-specific fields (see individual prompts for full schemas).

## Usage Workflow

```
Government Action Input
  ↓
[00-Classifier] Analyze and Route
  → Type, Scope, Targeting, Reversibility, Precedent
  → Priority Signal (Critical/High/Medium/Low)
  ↓
[6 Parallel Lenses] Evaluate Independently
  → 01-Textualist (Tier 1 text)
  → 02-Originalist (Tiers 1-2 + founding)
  → 03-Doctrinalist (Tiers 1-3A, 3B + doctrine)
  → 04-Living Constitutionalist (Tiers 1-3A, 3B + precedent)
  → 05-Pragmatist (Tiers 1-4 + empirical)
  → 06-Steelman (Tiers 1-4 + defense synthesis)
  ↓
[Integration] Synthesize Results
  → Areas of agreement (strongest signal)
  → Areas of disagreement (identify tensions)
  → Overall Constitutional Fidelity Index
```

## Key Design Principles

1. **Independence**: Each lens evaluates separately, unaware of others' scores
2. **Complementarity**: Different methodologies provide multi-angle assessment
3. **Integrity**: Each lens mandated to be truthful within its constraints
4. **Transparency**: All citations required; counterarguments included; confidence explicit
5. **Completeness**: Each prompt is self-contained; no external resources needed

## Examples in Each Prompt

Each prompt includes 2-3 worked examples:

**Classifier**: Executive pardon, voting restriction, agency reorganization
**Textualist**: Speech restriction, photo ID requirement
**Originalist**: Flag burning, equal protection with disparate impact
**Doctrinalist**: Agency restructuring (Youngstown + major questions), voter ID (Anderson-Burdick), emergency powers (Youngstown)
**Living Constitutionalist**: Voting restriction with disparate impact, due process expansion
**Pragmatist**: Emergency powers (with V-Dem data), voting rules (with academic research)
**Steelman**: Voter ID (strongest defense), emergency powers (strongest defense)

## Integration Notes

These prompts are designed for:
- LLM system prompt injection (e.g., with Claude API)
- Multi-agent evaluation pipelines
- Constitutional policy analysis
- Institutional compliance assessment
- Comparative government action evaluation

Each prompt is approximately 280-460 lines of detailed instructions, making them suitable for direct injection as system prompts into language models without exceeding reasonable context limits for the evaluation task itself.

## Constitutional Sources Referenced

### Tier 1: Constitutional Text
- U.S. Constitution (preamble, articles, amendments)

### Tier 2: Founding Era Sources
- Federalist Papers (Hamilton, Madison, Jay)
- Anti-Federalist Papers (various authors)
- Constitutional Convention Records (Madison's notes)
- State Ratifying Convention Records

### Tier 3A: Constitutional Legislation
- Civil Rights Act of 1964
- Voting Rights Act of 1965
- Americans with Disabilities Act
- Other enforcement statutes

### Tier 3B: Judicial Precedent (Descriptive, Tagged)
- Foundational cases (Marbury, McCulloch, Lochner era, etc.)
- Modern constitutional law (Brown, Gideon, Warren era, etc.)
- Contemporary precedent

### Tier 4: Comparative & Empirical
- V-Dem Project (Varieties of Democracy)
- Freedom House Reports
- OECD Data
- Peer Democracy Research
- Academic Studies

---

**Total**: 2,791 lines of production-quality prompts across 7 files
**Status**: Production-ready for immediate deployment
**Last Updated**: February 2026

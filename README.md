# Constitutional Fidelity Index

An interactive dashboard that evaluates executive orders across seven constitutional dimensions using six distinct interpretive legal lenses. Every score is computed from a transparent, multi-step aggregation pipeline — no black boxes.

**100 executive orders evaluated** across four administrations (Obama, Trump I, Biden, Trump II).

---

## What It Does

Each executive order is scored on a **-2 to +2 scale** across seven constitutional dimensions, then evaluated independently through six legal interpretive lenses. The aggregation engine produces:

- A **CFI Score** (0–100) representing overall constitutional alignment
- A **Constitutional Floor** indicator: `CLEAR`, `CAUTION`, or `VIOLATION`
- A **Steelman Delta** — how much the strongest-case defense diverges from the consensus evaluation
- A **Contested Dimensions** list — where the lenses most disagree

The radar chart renders the mean, min, and max scoring envelope across evaluative lenses, making interpretive disagreement visible at a glance.

---

## Seven Constitutional Dimensions

| Code | Dimension | Primary Sources |
|------|-----------|-----------------|
| R | Individual Rights & Liberties | Amendments 1–4, 9, 13, 14 |
| E | Equal Protection & Non-Discrimination | 14th Amendment, Civil Rights Act |
| D | Democratic Legitimacy & Representation | Articles I–II, Amendments 15, 17, 19, 26 |
| SP | Separation of Powers | Articles I–III, Federalist 47–51 |
| DP | Due Process & Rule of Law | Amendments 5–8, 14 |
| W | General Welfare & Common Good | Preamble, Article I §8 |
| N | National Sovereignty & Security | Preamble, Article II, Article IV §4 |

---

## Six Legal Lenses

| Lens | Method | Source Access |
|------|--------|---------------|
| **Textualist** | Plain-language reading of constitutional text | Constitutional text only |
| **Originalist** | Original public meaning at ratification | Text + Federalist Papers, Convention records |
| **Doctrinalist** | Established judicial doctrine and stare decisis | Text + legislation + Supreme Court precedent |
| **Living Constitutionalist** | Constitutional development arc and trajectories | Text + founding + precedent |
| **Pragmatist** | Real-world consequences in comparable jurisdictions | All sources + V-Dem, OECD, empirical research |
| **Steelman** | Strongest genuine constitutional defense | All sources, good-faith synthesis |

The Steelman lens does not factor into the CFI Score — it is measured separately as a delta, showing how much the best-case argument moves the needle.

---

## Aggregation Algorithm

The CFI Score is not an average. It uses a **relevance-weighted aggregation** across evaluative lenses:

1. **Relevance Filtering** — dimensions with mean relevance < 0.2 are excluded
2. **Constitutional Floor** — if 3+ evaluative lenses score −2 on any dimension, the action is flagged `VIOLATION`
3. **Alignment Score** — relevance-weighted mean across relevant dimensions, normalized to 0–100
4. **Steelman Delta** — signed difference between Steelman and evaluative-lens consensus
5. **Contested Dimensions** — dimensions with cross-lens variance > 1.0

Full algorithm: [`engine/aggregation.js`](engine/aggregation.js) | Schema: [`engine/schema.json`](engine/schema.json)

---

## System Prompts

The [`prompts/`](prompts/) directory contains seven production-quality system prompts (2,791 lines total) for running the evaluation pipeline through any LLM:

```
prompts/
  00-classifier.md          # Classifies action type, scope, targeting, reversibility
  01-textualist.md          # Plain-text constitutional analysis
  02-originalist.md         # Original public meaning analysis
  03-doctrinalist.md        # Stare decisis and established tests
  04-living-constitutionalist.md
  05-pragmatist.md          # Empirical, comparative analysis
  06-steelman.md            # Best-case defense
```

These prompts are self-contained and ready for direct injection as LLM system prompts.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build | Vite 7 |
| Language | TypeScript / JSX |
| Charts | Custom SVG (no chart library) |
| Styling | Inline styles with design tokens |
| Deployment | Static (Vite build → `dist/`) |

**Redesign** (in [`redesign/`](redesign/)): Next.js 15, TypeScript, Tailwind v4 — work in progress.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

The redesign:
```bash
cd redesign
npm install
npm run dev
# → http://localhost:3000
```

---

## Scoring Reference

| Score | Meaning |
|-------|---------|
| +2 | Action clearly strengthens / directly supported by text or precedent |
| +1 | Action complies; reasonable interpretation |
| 0 | Neutral; text silent or arguments balanced |
| −1 | Action conflicts with; weak support or contested |
| −2 | Clear violation of text, doctrine, or precedent |

| CFI Range | Label |
|-----------|-------|
| 81–100 | Strong Constitutional Alignment |
| 61–80 | Moderate Constitutional Alignment |
| 41–60 | Mixed Constitutional Alignment |
| 21–40 | Significant Constitutional Tension |
| 0–20 | Severe Constitutional Tension |

---

## Repository Structure

```
cfi/
├── src/
│   ├── App.jsx               # Main dashboard — all pages and components
│   ├── main.jsx              # React entry point
│   └── data/
│       └── executiveOrders.js  # 100 evaluated EOs with full scoring data
├── engine/
│   ├── aggregation.js        # 6-step CFI aggregation pipeline
│   ├── schema.json           # JSON Schema for evaluation output
│   └── IMPLEMENTATION_GUIDE.md
├── prompts/                  # 7 LLM system prompts for live evaluation
├── integrity/                # Framing symmetry tests and cross-lens pairs
├── docs/                     # Planning documents
├── redesign/                 # Next.js redesign (WIP)
├── CFI_Whitepaper_v4.pdf     # Full methodology whitepaper
└── CFI_Policy_Brief_1.pdf    # Summary policy brief
```

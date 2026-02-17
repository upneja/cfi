import { DIMENSIONS, DIMENSION_ORDER, LENSES, LENS_ORDER } from "@/lib/constants";

const dimensionDescriptions: Record<string, string> = {
  R: "Evaluates whether an action respects individual rights and liberties protected by the Bill of Rights and subsequent amendments, including freedom of speech, religion, privacy, and bodily autonomy.",
  E: "Assesses whether an action treats similarly situated persons equally and avoids invidious discrimination based on race, sex, religion, national origin, or other protected characteristics.",
  D: "Examines whether an action respects democratic processes, legislative authority, and the principle that sovereignty resides in the people through their elected representatives.",
  SP: "Analyzes whether an action respects the boundaries between the three branches of government, including questions of executive overreach, legislative delegation, and judicial authority.",
  DP: "Evaluates whether an action provides adequate procedural protections — notice, hearing, fair process — and complies with the rule of law and established legal procedures.",
  W: "Assesses whether an action advances the general welfare and common good as contemplated by the Preamble and the taxing and spending clauses of the Constitution.",
  N: "Examines questions of national sovereignty, security, treaty obligations, and the balance between domestic authority and international commitments.",
};

const lensDescriptions: Record<string, string> = {
  TX: "Interprets the Constitution based on the plain, ordinary meaning of its text at the time it was written. Focuses on what the words actually say, not what they might have been intended to mean or how they might evolve.",
  OR: "Seeks the original public meaning of constitutional provisions as understood by the ratifying generation. Examines founding-era dictionaries, debates, and legal treatises to determine fixed constitutional meaning.",
  DC: "Applies established judicial precedent and constitutional doctrine developed through case law. Relies on stare decisis, balancing tests, tiers of scrutiny, and frameworks established by the Supreme Court.",
  LC: "Views the Constitution as a living document whose meaning evolves with society. Considers the arc of constitutional development and how principles of liberty and equality expand over time.",
  PR: "Evaluates constitutional questions based on real-world consequences, empirical evidence, and practical governance outcomes. Considers what actually works rather than abstract theory.",
  SM: "Constructs the strongest possible constitutional defense for the action being evaluated. Not an advocacy position, but an intellectual exercise to identify the strongest available arguments.",
};

const pipelineSteps = [
  {
    step: 1,
    title: "Classify the Action",
    desc: "The system prompt classifies the executive action by type, legal basis, and affected constitutional domains without rendering any judgment.",
  },
  {
    step: 2,
    title: "Multi-Lens Evaluation",
    desc: "Five evaluative lenses (Textualist, Originalist, Doctrinalist, Living Constitutionalist, Pragmatist) independently score the action across all seven dimensions on a -2 to +2 scale.",
  },
  {
    step: 3,
    title: "Steelman Defense",
    desc: "A sixth lens constructs the strongest possible constitutional defense of the action, providing an independent comparison point.",
  },
  {
    step: 4,
    title: "Relevance Filtering",
    desc: "Dimensions with mean relevance below 0.2 across all lenses are filtered out to focus scores on constitutionally significant areas.",
  },
  {
    step: 5,
    title: "Aggregation",
    desc: "A weighted mean of evaluative scores across relevant dimensions is computed and normalized to a 0-100 scale to produce the CFI score.",
  },
  {
    step: 6,
    title: "Floor Assessment",
    desc: "If three or more evaluative lenses score -2 on any dimension, a constitutional floor violation is flagged. Three or more -1 scores trigger a caution.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-12">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
          Methodology
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-2xl">
          How the Constitutional Fidelity Index evaluates executive actions using
          multiple interpretive lenses and constitutional dimensions.
        </p>
      </div>

      {/* Seven Dimensions */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
          Seven Constitutional Dimensions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DIMENSION_ORDER.map((dim) => (
            <div
              key={dim}
              className="p-5 rounded-lg border border-slate-150 bg-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                  {dim}
                </span>
                <h3 className="text-sm font-semibold text-slate-800">
                  {DIMENSIONS[dim]}
                </h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {dimensionDescriptions[dim]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Six Lenses */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
          Six Interpretive Lenses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LENS_ORDER.map((lens) => (
            <div
              key={lens}
              className="p-5 rounded-lg border border-slate-150 bg-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: LENSES[lens].color }}
                />
                <h3 className="text-sm font-semibold text-slate-800">
                  {LENSES[lens].name}
                </h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                  {lens}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {lensDescriptions[lens]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
          Six-Step Pipeline
        </h2>
        <div className="space-y-4">
          {pipelineSteps.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">
                {step.step}
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scoring Scale */}
      <section>
        <h2 className="font-serif text-xl font-semibold text-slate-900 mb-6">
          Scoring Scale
        </h2>
        <div className="bg-white rounded-lg border border-slate-150 p-6">
          <div className="space-y-3">
            {[
              { score: "+2", label: "Strongly Aligned", desc: "Action clearly advances constitutional values in this dimension" },
              { score: "+1", label: "Moderately Aligned", desc: "Action generally supports constitutional principles with minor concerns" },
              { score: "0", label: "Neutral / Not Applicable", desc: "Action has no significant constitutional impact in this dimension" },
              { score: "-1", label: "Moderate Tension", desc: "Action creates notable constitutional concerns or friction" },
              { score: "-2", label: "Severe Tension", desc: "Action fundamentally conflicts with constitutional principles" },
            ].map((item) => (
              <div key={item.score} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 text-center text-sm font-bold font-mono text-slate-700">
                  {item.score}
                </span>
                <div>
                  <span className="text-sm font-medium text-slate-800">
                    {item.label}
                  </span>
                  <span className="text-sm text-slate-500 ml-2">
                    — {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

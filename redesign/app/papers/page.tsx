const papers = [
  {
    title: "CFI Whitepaper v4",
    desc: "Complete technical specification of the Constitutional Fidelity Index, including the multi-lens evaluation framework, aggregation pipeline, scoring methodology, and integrity testing approach.",
    pages: "14 pages",
    audience: "Technical",
    href: "/docs/CFI_Whitepaper_v4.pdf",
  },
  {
    title: "CFI Policy Brief #1",
    desc: "Non-technical overview of the Constitutional Fidelity Index for policymakers, journalists, and the general public. Covers the motivation, key findings, and implications.",
    pages: "5 pages",
    audience: "General",
    href: "/docs/CFI_Policy_Brief_1.pdf",
  },
];

export default function PapersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-12">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
          Papers
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-xl">
          Published documentation for the Constitutional Fidelity Index.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <a
            key={paper.title}
            href={paper.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-lg bg-white border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                {paper.audience}
              </span>
              <span className="text-xs text-slate-400">{paper.pages}</span>
            </div>

            <h2 className="font-serif text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
              {paper.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              {paper.desc}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:text-indigo-500 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

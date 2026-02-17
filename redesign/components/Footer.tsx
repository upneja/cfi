export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-serif text-lg font-bold text-slate-900 tracking-tight">
              Constitutional Fidelity Index
            </p>
            <p className="mt-1 text-sm text-slate-500 max-w-md">
              A multi-lens framework for evaluating executive power against
              constitutional principles. Non-partisan. Transparent. Open source.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <div className="flex flex-col gap-2">
              <a href="/methodology" className="hover:text-slate-900 transition-colors">Methodology</a>
              <a href="/scholars" className="hover:text-slate-900 transition-colors">For Scholars</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/papers" className="hover:text-slate-900 transition-colors">Papers</a>
              <a href="/scorecard" className="hover:text-slate-900 transition-colors">Scorecard</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
          Constitutional Fidelity Index. All evaluations are AI-generated using
          transparent, auditable prompts.
        </div>
      </div>
    </footer>
  );
}

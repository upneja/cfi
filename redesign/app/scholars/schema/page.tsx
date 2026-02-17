import Link from "next/link";
import { schema } from "@/lib/schema";

export default function SchemaPage() {
  const formatted = JSON.stringify(JSON.parse(schema), null, 2);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <nav className="mb-6">
        <Link
          href="/scholars"
          className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
        >
          &larr; Scholars
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
          Scoring Schema
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-2xl">
          The JSON Schema that defines the output structure for all CFI
          evaluations. Every evaluation must conform to this schema — it
          specifies the exact format for scores, relevance ratings, confidence
          levels, and narrative fields.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="text-sm font-semibold text-slate-800">
              schema.json
            </span>
            <span className="ml-3 text-xs text-slate-400">JSON Schema</span>
          </div>
          <a
            href="/schema.json"
            download
            className="text-xs text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
          >
            Download raw
          </a>
        </div>
        <pre className="p-5 text-sm font-mono text-slate-700 leading-relaxed overflow-x-auto max-h-[70vh] overflow-y-auto">
          {formatted}
        </pre>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { prompts } from "@/lib/prompts";

export default function PromptsPage() {
  const [activePrompt, setActivePrompt] = useState(0);

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
          System Prompts
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-2xl">
          These are the exact prompts used to generate every CFI evaluation. Each
          defines an interpretive lens, its constitutional framework, scoring
          rubrics, and output format. Nothing is hidden.
        </p>
      </div>

      {/* Prompt selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {prompts.map((p, i) => (
          <button
            key={p.filename}
            onClick={() => setActivePrompt(i)}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              activePrompt === i
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-800"
            }`}
          >
            {p.filename.replace(".md", "")}
          </button>
        ))}
      </div>

      {/* Active prompt */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="text-sm font-semibold text-slate-800">
              {prompts[activePrompt].filename}
            </span>
            <span className="ml-3 text-xs text-slate-400">
              {prompts[activePrompt].lines} lines
            </span>
          </div>
          <a
            href={`/prompts/${prompts[activePrompt].filename}`}
            download
            className="text-xs text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
          >
            Download raw
          </a>
        </div>
        <pre className="p-5 text-sm font-mono text-slate-700 leading-relaxed overflow-x-auto max-h-[70vh] overflow-y-auto whitespace-pre-wrap">
          {prompts[activePrompt].content}
        </pre>
      </div>
    </div>
  );
}

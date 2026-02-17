"use client";

import { useState } from "react";
import Link from "next/link";
import { symmetryPairs, framingTests } from "@/lib/integrity";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function IntegrityPage() {
  const [tab, setTab] = useState<"symmetry" | "framing">("symmetry");

  const pairs = (symmetryPairs as any).pairs as any[];
  const tests = (framingTests as any).tests as any[];

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
          Integrity Tests
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-2xl">
          These tests ensure CFI evaluations are fair and consistent.{" "}
          <strong className="text-slate-700">Symmetry pairs</strong> check that
          analogous actions by different parties receive comparable scores.{" "}
          <strong className="text-slate-700">Framing tests</strong> verify that
          favorable, unfavorable, and neutral descriptions of the same action
          produce consistent results.
        </p>
      </div>

      {/* Methodology blurb */}
      <div className="bg-slate-50 rounded-lg p-4 mb-6 text-xs text-slate-500 leading-relaxed">
        {tab === "symmetry"
          ? (symmetryPairs as any).methodology
          : (framingTests as any).methodology}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-100 rounded p-1 w-fit">
        <button
          onClick={() => setTab("symmetry")}
          className={`px-4 py-1.5 text-sm font-medium rounded transition-colors ${
            tab === "symmetry"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Symmetry Pairs ({pairs.length})
        </button>
        <button
          onClick={() => setTab("framing")}
          className={`px-4 py-1.5 text-sm font-medium rounded transition-colors ${
            tab === "framing"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Framing Tests ({tests.length})
        </button>
      </div>

      {tab === "symmetry" && (
        <div className="space-y-4">
          {pairs.map((pair: any) => (
            <div
              key={pair.id}
              className="bg-white rounded-lg border border-slate-200 p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs font-mono text-slate-400">
                    #{pair.id}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800 mt-0.5">
                    {pair.principle}
                  </h3>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  {pair.expected_similar_dimensions.map((dim: string) => (
                    <span
                      key={dim}
                      className="text-xs font-mono bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded"
                    >
                      {dim}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="bg-blue-50/50 rounded p-3 border border-blue-100">
                  <p className="text-xs font-medium text-blue-700 mb-1">
                    Democratic
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    {pair.dem.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pair.dem.description}
                  </p>
                </div>
                <div className="bg-red-50/50 rounded p-3 border border-red-100">
                  <p className="text-xs font-medium text-red-700 mb-1">
                    Republican
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    {pair.gop.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pair.gop.description}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {pair.notes}
              </p>
            </div>
          ))}
        </div>
      )}

      {tab === "framing" && (
        <div className="space-y-4">
          {tests.map((test: any) => (
            <div
              key={test.id}
              className="bg-white rounded-lg border border-slate-200 p-5"
            >
              <div className="mb-3">
                <span className="text-xs font-mono text-slate-400">
                  #{test.id}
                </span>
                <h3 className="text-sm font-semibold text-slate-800 mt-0.5">
                  {test.action}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {test.administration}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-emerald-50/50 rounded p-3 border border-emerald-100">
                  <p className="text-xs font-medium text-emerald-700 mb-1">
                    Favorable
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {test.favorable}
                  </p>
                </div>
                <div className="bg-red-50/50 rounded p-3 border border-red-100">
                  <p className="text-xs font-medium text-red-700 mb-1">
                    Unfavorable
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {test.unfavorable}
                  </p>
                </div>
                <div className="bg-slate-50 rounded p-3 border border-slate-200">
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    Neutral
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {test.neutral}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

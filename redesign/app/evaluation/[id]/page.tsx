import Link from "next/link";
import { executiveOrders } from "@/lib/data";
import { EvaluationClient } from "./EvaluationClient";

export function generateStaticParams() {
  return executiveOrders.map((eo) => ({ id: eo.id }));
}

export default async function EvaluationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const eo = executiveOrders.find((e) => e.id === id);

  if (!eo) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="font-serif text-2xl font-bold text-slate-900">
          Evaluation not found
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          The requested executive order evaluation does not exist.
        </p>
        <Link
          href="/scorecard"
          className="mt-4 inline-block text-sm text-indigo-600 hover:text-indigo-500 font-medium"
        >
          &larr; Back to Scorecard
        </Link>
      </div>
    );
  }

  return <EvaluationClient eo={eo} />;
}

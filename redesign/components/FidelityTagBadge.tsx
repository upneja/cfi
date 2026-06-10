import type { FidelityTag } from '@/lib/caselaw';

const tagStyles = {
  reliable: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
    label: 'Reliable',
  },
  contested: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    label: 'Contested',
  },
  reversed: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    dot: 'bg-red-500',
    label: 'Reversed',
  },
} as const;

export function FidelityTagBadge({ tag }: { tag: FidelityTag }) {
  const s = tagStyles[tag];
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium ${s.bg} ${s.text} ${s.border} border rounded-full`}
    >
      <span className={`w-1 h-1 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

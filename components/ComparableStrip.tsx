import type { Comparable } from '@/lib/types';

export function ComparableStrip({ items }: { items: Comparable[] }) {
  return (
    <div className="panel">
      <div className="small-label">Comparable Profiles</div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded border border-borderline p-3 text-sm">
            <div className="font-medium text-white">{item.name}</div>
            <div className="mt-1 text-xs text-slate-400">{item.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

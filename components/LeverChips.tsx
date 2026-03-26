import type { Lever } from '@/lib/types';

export function LeverChips({ levers }: { levers: Lever[] }) {
  return (
    <div className="panel">
      <div className="small-label">Likely Value-Creation Levers</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {levers.map((lever) => (
          <span key={lever.id} className="rounded border border-borderline bg-slate-900 px-2 py-1 text-xs text-slate-200">
            {lever.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Scorecard({ label, score }: { label: string; score: number }) {
  return (
    <div className="panel">
      <div className="small-label">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-white">{score}</div>
      <div className="mt-2 h-2 w-full rounded bg-slate-800">
        <div className="h-2 rounded bg-accent" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}

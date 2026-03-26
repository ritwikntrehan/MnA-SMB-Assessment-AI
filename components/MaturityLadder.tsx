export function MaturityLadder({ score }: { score: number }) {
  const level = score >= 75 ? 'Structured' : score >= 55 ? 'Developing' : 'Fragmented';
  return (
    <div className="panel">
      <div className="small-label">Maturity Ladder</div>
      <div className="mt-3 space-y-2 text-sm">
        {['Fragmented', 'Developing', 'Structured'].map((item) => (
          <div
            key={item}
            className={`rounded border px-3 py-2 ${
              item === level ? 'border-accent bg-accent/10 text-white' : 'border-borderline text-slate-300'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

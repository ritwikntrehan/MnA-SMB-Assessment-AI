export function ArchitectureDiagram() {
  return (
    <div className="panel overflow-x-auto">
      <div className="small-label">Phase 1 Architecture Diagram</div>
      <div className="mt-4 min-w-[700px] rounded border border-borderline p-4 text-sm">
        <div className="grid grid-cols-5 gap-2 text-center">
          <div className="rounded border border-borderline p-2">Public Signals</div>
          <div className="rounded border border-borderline p-2">Normalization</div>
          <div className="rounded border border-borderline p-2">Maturity Scoring</div>
          <div className="rounded border border-borderline p-2">Thesis Logic</div>
          <div className="rounded border border-borderline p-2">Assessment Workspace</div>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2 text-center text-xs text-slate-400">
          <div>web + profile + ops clues</div>
          <div>company profile schema</div>
          <div>digital / ops / commercial</div>
          <div>levers + watchouts</div>
          <div>static UI + request flow</div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="panel">
        <p className="small-label">Assessment Workspace Prototype</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-white">
          Structured SMB assessment for buyers and operators who need a fast, disciplined first view.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          M&A / SMB Assessment AI demonstrates how an intelligence layer can organize public business signals into a maturity profile, opportunity thesis, and likely value-creation levers.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/assess" className="rounded bg-accent px-4 py-2 text-sm font-medium text-white">Explore Assessments</Link>
          <Link href="/request-analysis" className="rounded border border-borderline px-4 py-2 text-sm">Request Analysis</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel">
          <h2 className="text-lg font-semibold text-white">The problem</h2>
          <p className="mt-2 text-sm text-slate-300">Many SMB buyers and operators can find a company, but struggle to quickly structure a view on digital maturity, operating discipline, and likely improvement potential.</p>
        </div>
        <div className="panel">
          <h2 className="text-lg font-semibold text-white">What this prototype demonstrates</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Maturity scoring across digital, operational, and market dimensions</li>
            <li>Opportunity thesis and value-creation lever framing</li>
            <li>Comparable profile strips for quick context</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <h2 className="text-lg font-semibold text-white">Workflow</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm">
          <div className="rounded border border-borderline p-3">1. Review signals</div>
          <div className="rounded border border-borderline p-3">2. Assess maturity</div>
          <div className="rounded border border-borderline p-3">3. Identify levers</div>
        </div>
      </section>

      <section className="panel">
        <h2 className="text-lg font-semibold text-white">Workspace Preview</h2>
        <p className="mt-2 text-sm text-slate-300">Structured scorecards, diligence questions, and operator notes in a compact assessment view.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="rounded border border-borderline p-3 text-sm">Summary Card</div>
          <div className="rounded border border-borderline p-3 text-sm">Maturity Ladder</div>
          <div className="rounded border border-borderline p-3 text-sm">Lever Chips</div>
          <div className="rounded border border-borderline p-3 text-sm">Comparable Strip</div>
        </div>
      </section>

      <p className="text-xs text-slate-400">
        Phase 1 is a curated prototype using sample records and simplified scoring assumptions. It does not replace full diligence.
      </p>
    </div>
  );
}

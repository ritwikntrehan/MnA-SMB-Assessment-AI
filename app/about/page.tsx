export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="panel">
        <h1 className="text-3xl font-semibold text-white">About This Prototype</h1>
        <p className="mt-3 text-sm text-slate-300">
          M&A / SMB Assessment AI exists as a public demonstration of company-assessment and value-creation product design. It is built to show practical structure, not to imply fully automated diligence decisions.
        </p>
      </section>
      <section className="panel">
        <h2 className="text-lg font-semibold text-white">Capability areas demonstrated</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Public data ingestion patterns</li>
          <li>Structured assessment systems</li>
          <li>Scoring logic and maturity framing</li>
          <li>Value-creation thesis and lever design</li>
          <li>Product architecture for static-first deployment</li>
        </ul>
      </section>
    </div>
  );
}

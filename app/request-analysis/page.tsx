export default function RequestAnalysisPage() {
  return (
    <div className="space-y-6">
      <section className="panel">
        <h1 className="text-3xl font-semibold text-white">Request Tailored Assessment</h1>
        <p className="mt-2 text-sm text-slate-300">Tailored assessment and value-creation review are available by request or pilot engagement.</p>
      </section>

      <form action="mailto:pilot@example.com" method="post" encType="text/plain" className="panel space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {['Name', 'Organization', 'Role', 'Company or Website', 'Industry', 'Geography', 'Deal Stage / Context', 'What they want assessed', 'Website'].map((f) => (
            <label key={f} className="text-sm">
              <span className="small-label">{f}</span>
              <input className="mt-1 w-full rounded border border-borderline bg-[#0d1620] px-3 py-2" name={f} />
            </label>
          ))}
        </div>
        <label className="block text-sm">
          <span className="small-label">Notes</span>
          <textarea className="mt-1 w-full rounded border border-borderline bg-[#0d1620] px-3 py-2" rows={5} name="Notes" />
        </label>
        <p className="text-xs text-slate-400">Demo submission path: configurable mailto action or external form link for pilot intake.</p>
        <button className="rounded bg-accent px-4 py-2 text-sm text-white" type="submit">Submit pilot request</button>
      </form>
    </div>
  );
}

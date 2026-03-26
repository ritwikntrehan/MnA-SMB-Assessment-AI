import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

const sections = [
  ['Source signals', 'We use representative public signals (web presence, channel clues, operating footprint, and hiring/procurement indicators) to create a structured first-pass profile.'],
  ['Company profile normalization', 'Signals are mapped into a common schema to compare businesses across industries, geographies, and size bands.'],
  ['Maturity scoring', 'Simplified scoring assumptions estimate digital maturity, operational maturity, commercial maturity, and market signal strength.'],
  ['Opportunity thesis logic', 'A rules-based layer combines score gaps, industry patterns, and signal context to produce a concise value-creation thesis.'],
  ['Value-creation lever identification', 'Likely levers are tagged from reusable categories such as pricing, workflow digitization, KPI discipline, and utilization visibility.'],
  ['Limitations', 'Phase 1 uses local sample data and simplified assumptions. This structure demonstrates an SMB assessment intelligence layer, not a complete diligence or underwriting system.']
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-6">
      <section className="panel">
        <h1 className="text-3xl font-semibold text-white">How It Works</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">This page explains the method and assumptions in plain language. The current implementation is static-first and intentionally transparent about scope.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(([title, body]) => (
          <section key={title} className="panel">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">{body}</p>
          </section>
        ))}
      </div>
      <ArchitectureDiagram />
    </div>
  );
}

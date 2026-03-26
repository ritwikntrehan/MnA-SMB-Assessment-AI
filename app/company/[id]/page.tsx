import Link from 'next/link';
import { ComparableStrip } from '@/components/ComparableStrip';
import { LeverChips } from '@/components/LeverChips';
import { Scorecard } from '@/components/Scorecard';
import { byId, db } from '@/lib/data';

export function generateStaticParams() {
  return db.companies.map((company) => ({ id: company.id }));
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const company = db.companies.find((c) => c.id === params.id) ?? db.companies[0];
  const industry = byId(db.industries, company.industryId);
  const region = byId(db.regions, company.geographyId);
  const levers = db.levers.filter((l) => company.topLeverIds.includes(l.id));
  const comps = db.comparables.filter((c) => company.comparableIds.includes(c.id));
  const qs = db.questions.filter((q) => company.keyQuestionIds.includes(q.id));

  return (
    <div className="space-y-6">
      <section className="panel">
        <p className="small-label">Company Assessment Detail</p>
        <h1 className="text-3xl font-semibold text-white">{company.name}</h1>
        <p className="mt-1 text-sm text-slate-300">{industry?.name} • {region?.name} • {company.sizeBand}</p>
        <p className="mt-3 text-sm text-slate-200">{company.shortDescription}</p>
        <p className="mt-2 text-xs text-slate-400">Website/source note: {company.website || 'Public source placeholder'}</p>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        <Scorecard label="Digital Maturity" score={company.digitalMaturityScore} />
        <Scorecard label="Ops Maturity" score={company.opsMaturityScore} />
        <Scorecard label="Commercial Maturity" score={company.commercialMaturityScore} />
        <Scorecard label="Management/Process Signal" score={Math.round((company.opsMaturityScore + company.marketSignalScore) / 2)} />
      </div>

      <LeverChips levers={levers} />

      <div className="panel">
        <div className="small-label">Watchouts / Diligence Questions</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {company.watchouts.map((w) => <li key={w}>{w}</li>)}
          {qs.map((q) => <li key={q.id}>{q.text}</li>)}
        </ul>
      </div>

      <div className="panel">
        <div className="small-label">Opportunity Thesis</div>
        <p className="mt-2 text-sm text-slate-200">{company.thesis}</p>
      </div>

      <ComparableStrip items={comps} />

      <Link href="/request-analysis" className="inline-block rounded bg-accent px-4 py-2 text-sm text-white">Request tailored analysis</Link>
    </div>
  );
}

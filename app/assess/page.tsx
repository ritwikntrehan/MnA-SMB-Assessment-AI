'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ComparableStrip } from '@/components/ComparableStrip';
import { LeverChips } from '@/components/LeverChips';
import { MaturityLadder } from '@/components/MaturityLadder';
import { Scorecard } from '@/components/Scorecard';
import { byId, db } from '@/lib/data';

export default function AssessPage() {
  const [companyId, setCompanyId] = useState(db.companies[0].id);
  const [industry, setIndustry] = useState('all');
  const [region, setRegion] = useState('all');
  const [sizeBand, setSizeBand] = useState('all');
  const [companyType, setCompanyType] = useState('all');

  const filtered = useMemo(() => db.companies.filter((c) =>
    (industry === 'all' || c.industryId === industry) &&
    (region === 'all' || c.geographyId === region) &&
    (sizeBand === 'all' || c.sizeBand === sizeBand) &&
    (companyType === 'all' || c.companyType === companyType)
  ), [industry, region, sizeBand, companyType]);

  const selected = db.companies.find((c) => c.id === companyId) ?? filtered[0] ?? db.companies[0];
  const industryObj = byId(db.industries, selected.industryId);
  const regionObj = byId(db.regions, selected.geographyId);
  const topLevers = db.levers.filter((l) => selected.topLeverIds.includes(l.id));
  const comps = db.comparables.filter((c) => selected.comparableIds.includes(c.id));
  const selsignals = db.signals.filter((s) => s.companyId === selected.id);

  return (
    <div className="space-y-6">
      <div className="panel grid gap-4 md:grid-cols-5">
        <select value={companyId} onChange={(e) => setCompanyId(e.target.value)} className="rounded border border-borderline bg-[#0d1620] px-3 py-2 text-sm">
          {filtered.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="rounded border border-borderline bg-[#0d1620] px-3 py-2 text-sm">
          <option value="all">All industries</option>
          {db.industries.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}
        </select>
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded border border-borderline bg-[#0d1620] px-3 py-2 text-sm">
          <option value="all">All geographies</option>
          {db.regions.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>
        <select value={sizeBand} onChange={(e) => setSizeBand(e.target.value)} className="rounded border border-borderline bg-[#0d1620] px-3 py-2 text-sm">
          <option value="all">All size bands</option>
          {[...new Set(db.companies.map((c) => c.sizeBand))].map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={companyType} onChange={(e) => setCompanyType(e.target.value)} className="rounded border border-borderline bg-[#0d1620] px-3 py-2 text-sm">
          <option value="all">All company types</option>
          {[...new Set(db.companies.map((c) => c.companyType))].map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="panel">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="small-label">Assessment Summary</p>
            <h1 className="text-2xl font-semibold text-white">{selected.name}</h1>
            <p className="mt-1 text-sm text-slate-300">{industryObj?.name} • {regionObj?.name} • {selected.sizeBand} • {selected.companyType}</p>
          </div>
          <Link href={`/company/${selected.id}`} className="rounded border border-borderline px-3 py-2 text-sm">Open detail</Link>
        </div>
        <p className="mt-3 text-sm text-slate-300">{selected.summary}</p>
        <p className="mt-3 text-xs text-slate-400">Prototype note: curated sample company records with simplified assumptions for phase 1.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Scorecard label="Digital Maturity" score={selected.digitalMaturityScore} />
        <Scorecard label="Operational Maturity" score={selected.opsMaturityScore} />
        <Scorecard label="Commercial Maturity" score={selected.commercialMaturityScore} />
        <Scorecard label="Market Signal Score" score={selected.marketSignalScore} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MaturityLadder score={Math.round((selected.digitalMaturityScore + selected.opsMaturityScore + selected.commercialMaturityScore) / 3)} />
        <div className="panel md:col-span-2">
          <div className="small-label">Opportunity Thesis</div>
          <p className="mt-2 text-sm text-slate-200">{selected.thesis}</p>
          <div className="mt-4 small-label">Likely Risks / Watchouts</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {selected.watchouts.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </div>
      </div>

      <LeverChips levers={topLevers} />

      <div className="panel">
        <div className="small-label">Market Signal Panel</div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {selsignals.map((s) => (
            <div key={s.id} className="rounded border border-borderline p-3 text-sm">
              <div className="font-medium text-white">{s.label} <span className="text-xs text-slate-400">({s.strengthLabel})</span></div>
              <div className="text-slate-300">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="small-label">Operator Notes / Narrative</div>
        <p className="mt-2 text-sm text-slate-200">{selected.summary}</p>
      </div>

      <ComparableStrip items={comps} />
    </div>
  );
}

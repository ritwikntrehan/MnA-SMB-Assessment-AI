import companies from '@/data/companies.json';
import industries from '@/data/industries.json';
import levers from '@/data/levers.json';
import comparables from '@/data/comparables.json';
import signals from '@/data/signals.json';
import regions from '@/data/regions.json';
import questions from '@/data/questions.json';
import type { Company, Comparable, Industry, Lever, Question, Region, Signal } from './types';

export const db = {
  companies: companies as Company[],
  industries: industries as Industry[],
  levers: levers as Lever[],
  comparables: comparables as Comparable[],
  signals: signals as Signal[],
  regions: regions as Region[],
  questions: questions as Question[]
};

export const byId = <T extends { id: string }>(arr: T[], id: string) => arr.find((x) => x.id === id);

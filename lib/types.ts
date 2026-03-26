export type Company = {
  id: string;
  name: string;
  industryId: string;
  geographyId: string;
  sizeBand: string;
  companyType: string;
  website: string;
  shortDescription: string;
  digitalMaturityScore: number;
  opsMaturityScore: number;
  commercialMaturityScore: number;
  marketSignalScore: number;
  summary: string;
  topLeverIds: string[];
  comparableIds: string[];
  keyQuestionIds: string[];
  thesis: string;
  watchouts: string[];
};

export type Industry = {
  id: string;
  name: string;
  description: string;
  commonLevers: string[];
  commonRisks: string[];
  marketNotes: string;
};

export type Lever = {
  id: string;
  name: string;
  category: string;
  rationale: string;
  expectedImpactLabel: string;
  implementationDifficultyLabel: string;
};

export type Comparable = {
  id: string;
  name: string;
  industryId: string;
  geographyId: string;
  note: string;
};

export type Signal = {
  id: string;
  companyId: string;
  type: string;
  label: string;
  strengthLabel: string;
  note: string;
};

export type Region = {
  id: string;
  name: string;
  type: string;
  note: string;
};

export type Question = {
  id: string;
  text: string;
  category: string;
};

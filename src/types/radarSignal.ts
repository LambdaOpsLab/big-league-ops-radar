export type RadarSignalSourceType =
  | 'official'
  | 'company'
  | 'research'
  | 'regulatory'
  | 'media'
  | 'market-intelligence';

export type RadarSignalDomain =
  | 'ai-first'
  | 'government'
  | 'defense'
  | 'cloud'
  | 'chips'
  | 'data-centers'
  | 'energy'
  | 'governance'
  | 'operations'
  | 'agents'
  | 'regulation';

export type RadarSignalRecommendedAction = 'ignore' | 'observe' | 'study' | 'project-candidate';

export type RadarSignalConfidence = 'low' | 'medium' | 'high';

export type RadarSignalStatus = 'candidate' | 'review' | 'approved' | 'archived' | 'project-candidate';

export interface RadarSignal {
  id: string;
  title: string;
  source: string;
  sourceType: RadarSignalSourceType;
  domain: RadarSignalDomain;
  summary: string;
  whyItMatters: string;
  pattern: string;
  lambdaTranslation: string;
  recommendedAction: RadarSignalRecommendedAction;
  confidence: RadarSignalConfidence;
  status: RadarSignalStatus;
  publishedAt: string;
  sourceUrl: string;
  reviewNotes?: string;
}

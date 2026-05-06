export type Domain =
  | 'AI-first operations'
  | 'Government'
  | 'Defense'
  | 'Cloud'
  | 'Chips'
  | 'Data centers'
  | 'Energy'
  | 'Regulation'
  | 'Agents'
  | 'Operations'
  | 'Governance';

export type Action =
  | 'Monitor'
  | 'Review procurement'
  | 'Assess exposure'
  | 'Track execution'
  | 'Prepare briefing';

export type SignalStatus = 'Verified' | 'Emerging' | 'Sustained';

export interface Signal {
  id: string;
  headline: string;
  domain: Domain;
  action: Action;
  status: SignalStatus;
  confidence: 'High' | 'Medium';
  summary: string;
  implication: string;
  evidence: string;
  horizon: string;
  tags: string[];
}

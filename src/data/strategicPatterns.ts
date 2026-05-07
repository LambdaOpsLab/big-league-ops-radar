export type StrategicPatternConfidence = 'low' | 'medium' | 'high';

export interface StrategicPattern {
  id: string;
  title: string;
  description: string;
  relatedSignalIds: string[];
  confidence: StrategicPatternConfidence;
  operationalImpact: string;
}

export const strategicPatterns: StrategicPattern[] = [
  {
    id: 'ai-first-government',
    title: 'AI-first government adoption',
    description:
      'Government AI is showing up as managed deployment, procurement, and education programs rather than informal experimentation.',
    relatedSignalIds: ['chatgpt-gov', 'openai-for-greece', 'white-house-ai-action-plan'],
    confidence: 'high',
    operationalImpact:
      'Watch procurement, controlled access, and public-sector operating models as one policy-adoption cluster.'
  },
  {
    id: 'sovereign-ai-infrastructure',
    title: 'Sovereign AI infrastructure',
    description:
      'Cloud, local control, and national deployment goals are converging into sovereign infrastructure programs.',
    relatedSignalIds: ['openai-for-countries', 'nvidia-sovereign-ai', 'oracle-nvidia-sovereign-ai'],
    confidence: 'high',
    operationalImpact:
      'Treat sovereign AI as a combined signal across cloud, chips, and data-center planning.'
  },
  {
    id: 'human-in-the-loop-governance',
    title: 'Human-in-the-loop governance',
    description:
      'Signals are promoted only after human review, source verification, and decision logging.',
    relatedSignalIds: ['artificial-analysis-benchmarking', 'white-house-ai-action-plan', 'chatgpt-gov'],
    confidence: 'high',
    operationalImpact:
      'Use review state and decision trails to block unexplained project creation.'
  },
  {
    id: 'infrastructure-race',
    title: 'Infrastructure race',
    description:
      'Compute commitments are expanding earlier, and at larger scale, to secure future model and deployment capacity.',
    relatedSignalIds: ['anthropic-emea-expansion', 'anthropic-google-broadcom-compute', 'nvidia-sovereign-ai'],
    confidence: 'high',
    operationalImpact:
      'Track chips, cloud, and power as a single capacity-planning problem.'
  },
  {
    id: 'operational-ai-systems',
    title: 'Operational AI systems',
    description:
      'Frontier AI is being productized into secure workflows, managed access, and mission-support systems.',
    relatedSignalIds: ['genai-mil-chatgpt', 'anthropic-emea-expansion', 'chatgpt-gov'],
    confidence: 'medium',
    operationalImpact:
      'Evaluate AI deployment as an operations and controls problem, not only a model-selection problem.'
  },
  {
    id: 'regulation-acceleration-balance',
    title: 'Regulation plus acceleration balance',
    description:
      'Policy is still pushing adoption while tightening procurement, governance, and control expectations.',
    relatedSignalIds: ['white-house-ai-action-plan', 'oracle-nvidia-sovereign-ai', 'openai-for-greece'],
    confidence: 'medium',
    operationalImpact:
      'Keep regulatory compliance and deployment acceleration in the same planning frame.'
  }
];

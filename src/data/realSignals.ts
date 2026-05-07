import type { RadarSignal } from '../types/radarSignal';

export const realSignals: RadarSignal[] = [
  {
    id: 'openai-for-countries',
    title: 'OpenAI for Countries formalizes sovereign AI partnerships',
    source: 'OpenAI',
    sourceType: 'company',
    domain: 'government',
    summary:
      'OpenAI says it will help partner countries build in-country data center capacity, localized ChatGPT, and startup funds.',
    whyItMatters:
      'Sovereign AI is moving from policy language into infrastructure and procurement design.',
    pattern:
      'National AI initiatives increasingly bundle compute, localization, and startup support.',
    lambdaTranslation:
      'Profile A should watch sovereign compute, localization, and public-sector procurement as one signal cluster.',
    recommendedAction: 'project-candidate',
    confidence: 'high',
    status: 'approved',
    publishedAt: '2025-05-07',
    sourceUrl: 'https://openai.com/global-affairs/openai-for-countries/'
  },
  {
    id: 'anthropic-emea-expansion',
    title: 'Anthropic expands EMEA leadership as Claude adoption grows in Europe',
    source: 'Anthropic',
    sourceType: 'company',
    domain: 'operations',
    summary:
      'Anthropic announced 100+ new roles across Europe and said Claude had seen rapid organic growth among businesses and consumers.',
    whyItMatters:
      'European enterprise AI demand is material enough to drive regional staffing, support, and compliance investment.',
    pattern:
      'Vendor footprint expands when regional adoption, security, and privacy requirements tighten.',
    lambdaTranslation:
      'Profile A should interpret European adoption as a procurement and governance signal, not just a sales signal.',
    recommendedAction: 'observe',
    confidence: 'high',
    status: 'review',
    publishedAt: '2025-04-08',
    sourceUrl: 'https://www.anthropic.com/news/head-of-EMEA-new-roles'
  },
  {
    id: 'nvidia-sovereign-ai',
    title: 'NVIDIA frames sovereign AI as national infrastructure',
    source: 'NVIDIA Blog',
    sourceType: 'company',
    domain: 'data-centers',
    summary:
      'NVIDIA defines sovereign AI as producing AI with domestic infrastructure, data, workforce, and business networks.',
    whyItMatters:
      'Compute sovereignty is becoming a planning variable for governments, infrastructure operators, and regulated industries.',
    pattern:
      'Sovereign AI programs pair local control with data-center and workforce investment.',
    lambdaTranslation:
      'Profile A should treat sovereign AI as a cross-domain signal spanning chips, cloud, data centers, and energy.',
    recommendedAction: 'study',
    confidence: 'high',
    status: 'approved',
    publishedAt: '2024-02-28',
    sourceUrl: 'https://blogs.nvidia.com/blog/what-is-sovereign-ai/'
  },
  {
    id: 'white-house-ai-action-plan',
    title: 'White House AI Action Plan links adoption, infrastructure, and procurement',
    source: 'The White House',
    sourceType: 'official',
    domain: 'government',
    summary:
      'The plan ties AI adoption to data center buildout, procurement rules, and export strategy.',
    whyItMatters:
      'Federal policy is treating AI as infrastructure and procurement policy, not only as software policy.',
    pattern:
      'Government AI initiatives increasingly combine adoption mandates with infrastructure and supply-chain goals.',
    lambdaTranslation:
      'Profile A should watch federal AI policy as an operating constraint and a demand driver.',
    recommendedAction: 'observe',
    confidence: 'high',
    status: 'approved',
    publishedAt: '2025-07-23',
    sourceUrl: 'https://www.whitehouse.gov/releases/2025/07/white-house-unveils-americas-ai-action-plan/'
  },
  {
    id: 'artificial-analysis-benchmarking',
    title: 'Artificial Analysis keeps independent benchmarking and pricing in active rotation',
    source: 'Artificial Analysis',
    sourceType: 'market-intelligence',
    domain: 'ai-first',
    summary:
      'The platform updates its Intelligence Index, pricing, and provider comparisons on a frequent cadence.',
    whyItMatters:
      'Independent benchmarking is becoming a practical procurement input for model selection and governance.',
    pattern:
      'Buyers increasingly rely on third-party evaluation layers rather than vendor claims alone.',
    lambdaTranslation:
      'Profile A should use benchmark intelligence as an external control against vendor narratives.',
    recommendedAction: 'study',
    confidence: 'medium',
    status: 'review',
    publishedAt: '2026-05-04',
    sourceUrl: 'https://artificialanalysis.ai/',
    reviewNotes: 'Curated from the homepage changelog and Intelligence Index exposure.'
  }
];

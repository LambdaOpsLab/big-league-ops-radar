import type { Signal } from '../types';

export const signals: Signal[] = [
  {
    id: 'ai-ops-control-plane',
    headline: 'AI-first operations are converging on control planes with approvals and telemetry',
    domain: 'AI-first operations',
    action: 'Track execution',
    status: 'Verified',
    reviewState: 'approved',
    confidence: 'High',
    summary:
      'Operational teams are formalizing AI usage through logged workflows, guardrails, and review points.',
    implication:
      'The operating model is shifting toward governed AI execution rather than ad hoc assistant use.',
    evidence:
      'Implementation patterns increasingly include request routing, approval gates, and usage tracing.',
    horizon: '0-6 months',
    tags: ['control plane', 'telemetry', 'approval gates']
  },
  {
    id: 'agentic-ops-platforms',
    headline: 'Agentic operations are moving from pilots into constrained production use',
    domain: 'Agents',
    action: 'Track execution',
    status: 'Verified',
    reviewState: 'review',
    confidence: 'High',
    summary:
      'Organizations are adopting agent workflows where tasks are bounded, measurable, and tied to human review.',
    implication:
      'Operational teams should treat agent rollout as a control-system problem, not a generic productivity feature.',
    evidence:
      'Program notes and vendor roadmaps increasingly emphasize audit logs, permissioning, and approval gates.',
    horizon: '0-6 months',
    tags: ['workflow control', 'human-in-the-loop', 'auditability']
  },
  {
    id: 'cloud-sovereignty',
    headline: 'Cloud procurement is tilting toward sovereign controls and segmented deployments',
    domain: 'Cloud',
    action: 'Review procurement',
    status: 'Sustained',
    reviewState: 'approved',
    confidence: 'High',
    summary:
      'Public sector and regulated buyers are asking for stronger region controls, data boundaries, and tenant isolation.',
    implication:
      'Cloud strategy now needs an explicit sovereignty posture for sensitive workloads.',
    evidence:
      'Procurement language increasingly references residency, isolation, and jurisdictional controls.',
    horizon: '6-12 months',
    tags: ['sovereignty', 'residency', 'tenant isolation']
  },
  {
    id: 'chip-capacity',
    headline: 'Chip supply remains strategically important even as capacity expands unevenly',
    domain: 'Chips',
    action: 'Assess exposure',
    status: 'Verified',
    reviewState: 'review',
    confidence: 'High',
    summary:
      'Advanced compute demand continues to pressure supply chains, packaging, and downstream allocation.',
    implication:
      'Long lead times can still distort deployment plans for AI and data center programs.',
    evidence:
      'Capacity additions are concentrated in specific nodes and packaging paths, not evenly across the stack.',
    horizon: '6-18 months',
    tags: ['supply chain', 'packaging', 'capacity allocation']
  },
  {
    id: 'data-center-power',
    headline: 'Data center power planning is becoming a first-order operating constraint',
    domain: 'Data centers',
    action: 'Prepare briefing',
    status: 'Verified',
    reviewState: 'approved',
    confidence: 'High',
    summary:
      'Power availability, interconnect timing, and cooling density now shape project sequencing.',
    implication:
      'Infrastructure teams should coordinate energy, real estate, and compute demand earlier in the process.',
    evidence:
      'Project schedules increasingly depend on utility capacity, transformer lead times, and site-specific limits.',
    horizon: '0-12 months',
    tags: ['power planning', 'cooling', 'site constraints']
  },
  {
    id: 'energy-load',
    headline: 'Electric load growth is reshaping the planning horizon for compute-intensive programs',
    domain: 'Energy',
    action: 'Monitor',
    status: 'Emerging',
    reviewState: 'candidate',
    confidence: 'Medium',
    summary:
      'Demand growth for AI infrastructure is forcing closer coordination with grid operators and utilities.',
    implication:
      'Load forecasting should be treated as a strategic dependency, not a facilities detail.',
    evidence:
      'Utility planning and interconnection queues are receiving more attention in technology deployment cycles.',
    horizon: '12-24 months',
    tags: ['load growth', 'interconnection', 'utility coordination']
  },
  {
    id: 'governance-controls',
    headline: 'Governance controls are shifting toward traceability and approval discipline',
    domain: 'Governance',
    action: 'Track execution',
    status: 'Sustained',
    reviewState: 'project-candidate',
    confidence: 'High',
    summary:
      'Boards and operators are asking for explicit ownership, escalation paths, and model-use controls.',
    implication:
      'Governance programs need concrete controls rather than policy-only language.',
    evidence:
      'Risk committees are increasingly focused on usage logs, exception handling, and accountability maps.',
    horizon: '0-6 months',
    tags: ['control environment', 'traceability', 'ownership']
  },
  {
    id: 'public-sector-ai',
    headline: 'Public-sector AI adoption remains selective and heavily governed',
    domain: 'Government',
    action: 'Prepare briefing',
    status: 'Verified',
    reviewState: 'review',
    confidence: 'High',
    summary:
      'Agencies are testing targeted AI use cases while retaining restrictions on sensitive workflows.',
    implication:
      'Delivery teams should expect procurement, compliance, and review requirements to remain central.',
    evidence:
      'Pilot scope is commonly limited to low-risk tasks, with oversight requirements baked into implementation.',
    horizon: '6-12 months',
    tags: ['procurement', 'compliance', 'pilot scope']
  },
  {
    id: 'defense-autonomy',
    headline: 'Defense interest in autonomy is rising, but operational boundaries remain narrow',
    domain: 'Defense',
    action: 'Assess exposure',
    status: 'Emerging',
    reviewState: 'candidate',
    confidence: 'Medium',
    summary:
      'Program interest is increasing around decision support and autonomous coordination under supervision.',
    implication:
      'Vendors and internal teams should expect stricter assurance and oversight requirements.',
    evidence:
      'Acquisition conversations emphasize safety case documentation and mission-specific limits.',
    horizon: '12-24 months',
    tags: ['autonomy', 'assurance', 'supervision']
  },
  {
    id: 'ops-automation',
    headline: 'Operational automation is shifting from task reduction to exception management',
    domain: 'Operations',
    action: 'Monitor',
    status: 'Sustained',
    reviewState: 'approved',
    confidence: 'High',
    summary:
      'Automation programs are more valuable when they route exceptions clearly and reduce review burden.',
    implication:
      'Process owners should optimize for exception handling, not only throughput.',
    evidence:
      'Organizations report better outcomes when automation includes escalation logic and operational telemetry.',
    horizon: '0-6 months',
    tags: ['automation', 'exceptions', 'telemetry']
  },
  {
    id: 'regulatory-ai',
    headline: 'Regulatory expectations are converging on documentation, oversight, and explainability',
    domain: 'Regulation',
    action: 'Review procurement',
    status: 'Verified',
    reviewState: 'archived',
    confidence: 'High',
    summary:
      'Buyers face a growing requirement to document model use, decision boundaries, and review responsibilities.',
    implication:
      'Commercial and public-sector deployments need evidence-ready operating procedures.',
    evidence:
      'Policy language increasingly references transparency, governance, and audit trails for AI systems.',
    horizon: '0-12 months',
    tags: ['documentation', 'oversight', 'audit trail']
  }
];

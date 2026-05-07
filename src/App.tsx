import { useEffect, useMemo, useState } from 'react';
import { signals as demoSignals } from './data/signals';
import { realSignals } from './data/realSignals';
import { strategicPatterns } from './data/strategicPatterns';
import type { Action, Domain, Signal } from './types';
import type { RadarSignal } from './types/radarSignal';

type SignalMode = 'demo' | 'real';

type FilterValue = string;

interface DisplaySignal {
  id: string;
  title: string;
  domain: string;
  action: string;
  status: string;
  reviewBadge: string;
  summary: string;
  source: string;
  sourceType?: string;
  sourceUrl?: string;
  publishedAt?: string;
  confidence: string;
  sourceCategory?: 'primary' | 'secondary';
  footerLabel: string;
  detailBlocks: Array<{ heading: string; body: string }>;
  tags?: string[];
  decisionTrail?: Array<{
    date: string;
    actor: 'human-reviewer' | 'system';
    action: 'captured' | 'reviewed' | 'approved' | 'archived' | 'promoted-to-project-candidate' | 'updated';
    note: string;
  }>;
}

const demoDomains: Array<Domain | 'All'> = [
  'All',
  'AI-first operations',
  'Government',
  'Defense',
  'Cloud',
  'Chips',
  'Data centers',
  'Energy',
  'Regulation',
  'Agents',
  'Operations',
  'Governance'
];

const demoActions: Array<Action | 'All'> = [
  'All',
  'Monitor',
  'Review procurement',
  'Assess exposure',
  'Track execution',
  'Prepare briefing'
];

const demoStatuses: Array<Signal['status'] | 'All'> = ['All', 'Verified', 'Emerging', 'Sustained'];

const realDomains: Array<RadarSignal['domain'] | 'All'> = [
  'All',
  'ai-first',
  'government',
  'defense',
  'cloud',
  'chips',
  'data-centers',
  'energy',
  'governance',
  'operations',
  'agents',
  'regulation'
];

const realActions: Array<RadarSignal['recommendedAction'] | 'All'> = [
  'All',
  'ignore',
  'observe',
  'study',
  'project-candidate'
];

const realStatuses: Array<RadarSignal['status'] | 'All'> = [
  'All',
  'candidate',
  'review',
  'approved',
  'archived',
  'project-candidate'
];

const operationalTakeaways = [
  'Watch government procurement and secure deployment patterns as a single signal family.',
  'Treat compute capacity, cloud topology, and chips supply as one planning constraint.',
  'Keep evidence, review status, and decision trail ahead of project promotion.'
];

const weeklyOperationalReview = [
  { label: 'Review cadence', value: 'Weekly' },
  { label: 'Signals reviewed', value: 'Curated real set' },
  { label: 'Focus', value: 'Patterns and decisions' }
];

function domainCount(items: DisplaySignal[], domain: string) {
  return items.filter((item) => item.domain === domain).length;
}

function normalizeDemoSignal(signal: Signal): DisplaySignal {
  return {
    id: signal.id,
    title: signal.headline,
    domain: signal.domain,
    action: signal.action,
    status: signal.status,
    reviewBadge: signal.reviewState,
    summary: signal.summary,
    source: 'Profile A demo dataset',
    confidence: signal.confidence,
    publishedAt: signal.horizon,
    sourceCategory: 'secondary',
    footerLabel: signal.horizon,
    detailBlocks: [
      { heading: 'Operational implication', body: signal.implication },
      { heading: 'Evidence note', body: signal.evidence }
    ],
    tags: signal.tags
  };
}

function normalizeRealSignal(signal: RadarSignal): DisplaySignal {
  return {
    id: signal.id,
    title: signal.title,
    domain: signal.domain,
    action: signal.recommendedAction,
    status: signal.status,
    reviewBadge: signal.status,
    summary: signal.summary,
    source: signal.source,
    sourceType: signal.sourceType,
    sourceUrl: signal.sourceUrl,
    publishedAt: signal.publishedAt,
    confidence: signal.confidence,
    sourceCategory: signal.sourceType === 'official' || signal.sourceType === 'regulatory' ? 'primary' : 'secondary',
    footerLabel: signal.publishedAt,
    detailBlocks: [
      { heading: 'Why it matters', body: signal.whyItMatters },
      { heading: 'Pattern', body: signal.pattern },
      { heading: 'Lambda translation', body: signal.lambdaTranslation }
    ],
    tags: signal.reviewNotes ? [signal.reviewNotes] : undefined,
    decisionTrail: signal.decisionTrail
  };
}

function formatReviewLabel(label: string) {
  return label.replace('-', ' ');
}

function formatSourceMeta(signal: DisplaySignal) {
  if (!signal.sourceType || !signal.publishedAt) {
    return signal.source;
  }

  return `${signal.source} · ${signal.sourceType} · ${signal.publishedAt}`;
}

function formatSourceTypeLabel(value?: string) {
  if (!value) {
    return 'Source';
  }

  return value.replace('-', ' ');
}

function resolveSignalSet(mode: SignalMode) {
  return mode === 'demo' ? demoSignals.map(normalizeDemoSignal) : realSignals.map(normalizeRealSignal);
}

function resolveDomains(mode: SignalMode) {
  return mode === 'demo' ? demoDomains : realDomains;
}

function resolveActions(mode: SignalMode) {
  return mode === 'demo' ? demoActions : realActions;
}

function resolveStatuses(mode: SignalMode) {
  return mode === 'demo' ? demoStatuses : realStatuses;
}

function isSelectableDomain(value: string): value is Domain {
  return value !== 'All';
}

export default function App() {
  const [mode, setMode] = useState<SignalMode>('real');
  const [domain, setDomain] = useState<FilterValue>('All');
  const [action, setAction] = useState<FilterValue>('All');
  const [status, setStatus] = useState<FilterValue>('All');
  const [selectedId, setSelectedId] = useState(realSignals[0]?.id ?? demoSignals[0]?.id ?? '');
  const [selectedPatternId, setSelectedPatternId] = useState(strategicPatterns[0]?.id ?? '');

  useEffect(() => {
    setDomain('All');
    setAction('All');
    setStatus('All');
    setSelectedId((mode === 'demo' ? demoSignals[0]?.id : realSignals[0]?.id) ?? '');
    setSelectedPatternId(strategicPatterns[0]?.id ?? '');
  }, [mode]);

  const availableSignals = useMemo(() => resolveSignalSet(mode), [mode]);

  const filteredSignals = useMemo(
    () =>
      availableSignals.filter((signal) => {
        const matchesDomain = domain === 'All' || signal.domain === domain;
        const matchesAction = action === 'All' || signal.action === action;
        const matchesStatus = status === 'All' || signal.status === status;
        return matchesDomain && matchesAction && matchesStatus;
      }),
    [availableSignals, action, domain, status]
  );

  const selectedSignal = useMemo(
    () => filteredSignals.find((signal) => signal.id === selectedId) ?? filteredSignals[0] ?? null,
    [filteredSignals, selectedId]
  );

  const domains = resolveDomains(mode);
  const actions = resolveActions(mode);
  const statuses = resolveStatuses(mode);
  const signalCountLabel = mode === 'demo' ? 'demo signals' : 'real signals';
  const isRealMode = mode === 'real';
  const detailDateLabel = isRealMode ? 'Published date' : 'Planning horizon';
  const realApprovedCount = realSignals.filter((signal) => signal.status === 'approved').length;
  const realProjectCandidateCount = realSignals.filter(
    (signal) => signal.status === 'project-candidate'
  ).length;
  const projectCandidateSignals = availableSignals.filter(
    (signal) => signal.status === 'project-candidate'
  );
  const selectedPattern =
    strategicPatterns.find((pattern) => pattern.id === selectedPatternId) ?? strategicPatterns[0] ?? null;

  return (
    <main className={`app-shell mode-${mode}`}>
      <section className={`operational-banner ${isRealMode ? 'is-operational' : 'is-experimental'}`}>
        <strong>Profile A operates on manually reviewed strategic signals.</strong>
        <span>{isRealMode ? 'Operational mode' : 'Demo mode'}</span>
      </section>

      <section className="hero">
        <div>
          <p className="eyebrow">Big League Ops Radar</p>
          <h1>Profile A strategic intelligence dashboard</h1>
          <p className="lede">
            Static view for high-signal operational context across AI-first operations,
            government, defense, cloud, chips, data centers, energy, regulation, agents,
            operations, and governance.
          </p>
        </div>

        <div className="hero-meta">
          {isRealMode ? (
            <>
              <div>
                <span>Real signals</span>
                <strong>{availableSignals.length}</strong>
              </div>
              <div>
                <span>Approved</span>
                <strong>{realApprovedCount}</strong>
              </div>
              <div>
                <span>Project candidates</span>
                <strong>{realProjectCandidateCount}</strong>
              </div>
            </>
          ) : (
            <>
              <div>
                <span>Coverage</span>
                <strong>{availableSignals.length} {signalCountLabel}</strong>
              </div>
              <div>
                <span>View</span>
                <strong>Demo Signals</strong>
              </div>
              <div>
                <span>Deployment</span>
                <strong>Static Vite app</strong>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="metrics">
        {domains
          .filter(isSelectableDomain)
          .map((item) => (
            <article className="metric-card" key={item}>
              <span>{item}</span>
              <strong>{domainCount(availableSignals, item)}</strong>
            </article>
          ))}
      </section>

      <section className="workspace">
        <aside className="controls panel">
          <div className="panel-heading">
            <h2>Filters</h2>
            <p>Use domain and action to narrow the current signal set.</p>
          </div>

          <div className="mode-toggle" role="group" aria-label="Signal source toggle">
            <button
              type="button"
              className={mode === 'demo' ? 'is-active' : ''}
              aria-pressed={mode === 'demo'}
              onClick={() => setMode('demo')}
            >
              Demo Signals
            </button>
            <button
              type="button"
              className={mode === 'real' ? 'is-active' : ''}
              aria-pressed={mode === 'real'}
              onClick={() => setMode('real')}
            >
              Real Signals
            </button>
          </div>

              <div className="mode-note">
            <strong>Real signals are manually reviewed and curated.</strong>
            <p>
              The real set uses public sources, human interpretation, and the RadarSignal model.
            </p>
          </div>

          {isRealMode ? (
            <div className="verification-note">
              Signals are manually reviewed and linked to public sources.
            </div>
          ) : null}

          {isRealMode ? (
            <section className="sidebar-section" aria-label="Strategic patterns">
              <div className="section-heading">
                <h3>Strategic Patterns</h3>
                <p>Patterns emerge through repeated reviewed signals over time.</p>
              </div>
              <div className="pattern-list">
                {strategicPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    type="button"
                    className={`pattern-item ${selectedPattern?.id === pattern.id ? 'is-active' : ''}`}
                    onClick={() => setSelectedPatternId(pattern.id)}
                  >
                    <strong>{pattern.title}</strong>
                    <span>{pattern.description}</span>
                    <em>{pattern.confidence} confidence · {pattern.relatedSignalIds.length} signals</em>
                  </button>
                ))}
              </div>
              {selectedPattern ? (
                <div className="pattern-detail">
                  <h4>Why it matters</h4>
                  <p>{selectedPattern.description}</p>
                  <div className="pattern-impact">
                    <span>Operational impact</span>
                    <strong>{selectedPattern.operationalImpact}</strong>
                  </div>
                  <div className="pattern-signals">
                    <span>Related signals</span>
                    <strong>{selectedPattern.relatedSignalIds.join(' • ')}</strong>
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <label className="field">
            <span>Domain</span>
            <select value={domain} onChange={(event) => setDomain(event.target.value)}>
              {domains.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Recommended action</span>
            <select value={action} onChange={(event) => setAction(event.target.value)}>
              {actions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className="filter-note">
            <span>{filteredSignals.length} matching signals</span>
            <p>All entries are local and static. No live ingestion is used.</p>
          </div>

          {isRealMode ? (
            <section className="sidebar-section" aria-label="Operational takeaways">
              <div className="section-heading">
                <h3>Operational Takeaways</h3>
                <p>What should LambdaOpsLab pay attention to?</p>
              </div>
              <ul className="takeaway-list">
                {operationalTakeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="review-note" aria-label="Human-in-the-loop review">
            <h3>Human-in-the-loop review</h3>
            <p>
              Signals are not automatically trusted. They are reviewed before being approved,
              archived, or promoted as project candidates.
            </p>
          </section>

          {isRealMode ? (
            <section className="sidebar-section" aria-label="Project candidate signals">
              <div className="section-heading">
                <h3>Project Candidate Signals</h3>
                <p>Signals promoted to possible future projects.</p>
              </div>
              {projectCandidateSignals.length > 0 ? (
                <div className="candidate-list">
                  {projectCandidateSignals.map((signal) => (
                    <div className="candidate-item" key={signal.id}>
                      <strong>{signal.title}</strong>
                      <span>{signal.domain} · {signal.action}</span>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="empty-state">No project-candidate signals in the current view.</p>
              )}
            </section>
          ) : null}

          <section className="sidebar-section" aria-label="Weekly operational review">
            <div className="section-heading">
              <h3>Weekly Operational Review</h3>
              <p>The radar is intended for recurring strategic observation, not one-time analysis.</p>
            </div>
            <div className="review-grid">
              {weeklyOperationalReview.map((item) => (
                <div className="review-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="signal-list panel" aria-label="Signal cards">
          <div className="panel-heading">
            <h2>{mode === 'demo' ? 'Signal cards' : 'Real signal cards'}</h2>
            <p>
              {mode === 'demo'
                ? 'Verified and emerging indicators framed for operational review.'
                : 'Manually curated public signals framed for strategic review.'}
            </p>
          </div>

          <div className="cards-grid">
            {filteredSignals.length > 0 ? (
              filteredSignals.map((signal) => (
                <button
                  key={signal.id}
                  type="button"
                  className={`signal-card ${selectedSignal?.id === signal.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(signal.id)}
                >
                  <div className="card-topline">
                    <span className="chip">{signal.domain}</span>
                    <span className={`status status-review status-${signal.reviewBadge}`}>
                      Review: {formatReviewLabel(signal.reviewBadge)}
                    </span>
                  </div>
                  <h3>{signal.title}</h3>
                  <p>{signal.summary}</p>
                  <div className="signal-meta-line">
                    <span>
                      {mode === 'demo'
                        ? signal.status
                        : `${signal.source} · ${formatSourceTypeLabel(signal.sourceType)}`}
                    </span>
                  </div>
                  <div className="card-footer">
                    <span>{signal.action}</span>
                    <span>{signal.footerLabel}</span>
                  </div>
                </button>
              ))
            ) : (
              <p className="empty-state">No signals match the current filter set.</p>
            )}
          </div>
        </section>

        <aside className="detail panel" aria-label="Signal detail">
          <div className="panel-heading">
            <h2>Detail panel</h2>
            <p>Selected signal context for internal briefing or portfolio review.</p>
          </div>

          {selectedSignal ? (
            <article className="detail-card">
              <div className="card-topline">
                <span className="chip">{selectedSignal.domain}</span>
                <span className={`status status-review status-${selectedSignal.reviewBadge}`}>
                  Review: {formatReviewLabel(selectedSignal.reviewBadge)}
                </span>
              </div>
              <h3>{selectedSignal.title}</h3>
              <p className="detail-summary">{selectedSignal.summary}</p>

              <div className="signal-meta-line">
                <span>{mode === 'demo' ? selectedSignal.status : formatSourceMeta(selectedSignal)}</span>
              </div>

              <dl className="detail-grid">
                <div>
                  <dt>Recommended action</dt>
                  <dd>{selectedSignal.action}</dd>
                </div>
                <div>
                  <dt>Confidence</dt>
                  <dd>{selectedSignal.confidence}</dd>
                </div>
                <div>
                  <dt>Source</dt>
                  <dd>{selectedSignal.source}</dd>
                </div>
                <div>
                  <dt>Source type</dt>
                  <dd>{formatSourceTypeLabel(selectedSignal.sourceType)}</dd>
                </div>
                <div>
                  <dt>Source category</dt>
                  <dd>{selectedSignal.sourceCategory === 'primary' ? 'Primary / official' : 'Secondary / media analysis'}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{selectedSignal.status}</dd>
                </div>
                <div>
                  <dt>{detailDateLabel}</dt>
                  <dd>{selectedSignal.publishedAt ?? 'Demo-only'}</dd>
                </div>
                {selectedSignal.sourceUrl ? (
                  <div>
                    <dt>Source URL</dt>
                    <dd>
                      <a href={selectedSignal.sourceUrl} target="_blank" rel="noreferrer">
                        Open source
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>

              {selectedSignal.sourceUrl ? (
                <div className="evidence-panel">
                  <h4>Evidence</h4>
                  <p>The radar prioritizes verifiable signals over speed.</p>
                  <a className="source-button" href={selectedSignal.sourceUrl} target="_blank" rel="noreferrer">
                    Open source
                  </a>
                </div>
              ) : null}

              {mode === 'real' && selectedSignal.decisionTrail ? (
                <section className="trail-panel">
                  <div className="trail-heading">
                    <h4>Decision Trail</h4>
                    <p>Decision trails make the radar auditable and prevent unexplained signal promotion.</p>
                  </div>
                  <ol className="trail-list">
                    {selectedSignal.decisionTrail.map((entry) => (
                      <li key={`${entry.date}-${entry.action}-${entry.note}`}>
                        <div className="trail-row">
                          <span className="trail-date">{entry.date}</span>
                          <span className="trail-meta">
                            {entry.actor} · {entry.action.replace('-', ' ')}
                          </span>
                        </div>
                        <p>{entry.note}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              {selectedSignal.detailBlocks.map((block) => (
                <div className="detail-block" key={block.heading}>
                  <h4>{block.heading}</h4>
                  <p>{block.body}</p>
                </div>
              ))}

              {selectedSignal.tags ? (
                <div className="detail-block">
                  <h4>Tags</h4>
                  <p>{selectedSignal.tags.join(' • ')}</p>
                </div>
              ) : null}
            </article>
          ) : (
            <p className="empty-state">No signal matches the current filters.</p>
          )}
        </aside>
      </section>
    </main>
  );
}

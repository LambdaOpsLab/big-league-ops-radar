import { useMemo, useState } from 'react';
import { filterSignals } from './lib/filterSignals';
import { signals } from './data/signals';
import type { Action, Domain, Signal } from './types';

const domains: Array<Domain | 'All'> = [
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

const actions: Array<Action | 'All'> = [
  'All',
  'Monitor',
  'Review procurement',
  'Assess exposure',
  'Track execution',
  'Prepare briefing'
];

function domainCount(items: Signal[], domain: Domain) {
  return items.filter((item) => item.domain === domain).length;
}

function formatReviewState(state: Signal['reviewState']) {
  return state.replace('-', ' ');
}

export default function App() {
  const [domain, setDomain] = useState<Domain | 'All'>('All');
  const [action, setAction] = useState<Action | 'All'>('All');
  const [selectedId, setSelectedId] = useState(signals[0]?.id ?? '');

  const filteredSignals = useMemo(
    () => filterSignals(signals, { domain, action }),
    [domain, action]
  );

  const selectedSignal = useMemo(
    () => filteredSignals.find((signal) => signal.id === selectedId) ?? filteredSignals[0] ?? null,
    [filteredSignals, selectedId]
  );

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Big League Ops Radar</p>
          <h1>Profile A strategic intelligence dashboard</h1>
          <p className="lede">
            Static demo view for high-signal operational context across AI-first operations,
            government, defense, cloud, chips, data centers, energy, regulation, agents,
            operations, and governance.
          </p>
        </div>

        <div className="hero-meta">
          <div>
            <span>Coverage</span>
            <strong>{signals.length} signals</strong>
          </div>
          <div>
            <span>Dominant posture</span>
            <strong>Governed execution</strong>
          </div>
          <div>
            <span>Deployment</span>
            <strong>Static Vite app</strong>
          </div>
        </div>
      </section>

      <section className="metrics">
        {domains
          .filter((item): item is Domain => item !== 'All')
          .map((item) => (
            <article className="metric-card" key={item}>
              <span>{item}</span>
              <strong>{domainCount(signals, item)}</strong>
            </article>
          ))}
      </section>

      <section className="workspace">
        <aside className="controls panel">
          <div className="panel-heading">
            <h2>Filters</h2>
            <p>Use domain and recommended action to narrow the signal set.</p>
          </div>

          <label className="field">
            <span>Domain</span>
            <select value={domain} onChange={(event) => setDomain(event.target.value as Domain | 'All')}>
              {domains.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Recommended action</span>
            <select value={action} onChange={(event) => setAction(event.target.value as Action | 'All')}>
              {actions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className="filter-note">
            <span>{filteredSignals.length} matching signals</span>
            <p>All entries are demo data with no live ingestion.</p>
          </div>

          <section className="review-note" aria-label="Human-in-the-loop review">
            <h3>Human-in-the-loop review</h3>
            <p>
              Signals are not automatically trusted. They are reviewed before being approved,
              archived, or promoted as project candidates.
            </p>
          </section>
        </aside>

        <section className="signal-list panel" aria-label="Signal cards">
          <div className="panel-heading">
            <h2>Signal cards</h2>
            <p>Verified and emerging indicators framed for operational review.</p>
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
                    <span className={`status status-review status-${signal.reviewState}`}>
                      Review: {formatReviewState(signal.reviewState)}
                    </span>
                  </div>
                  <h3>{signal.headline}</h3>
                  <p>{signal.summary}</p>
                  <div className="signal-status-line">
                    <span className={`status status-${signal.status.toLowerCase()}`}>{signal.status}</span>
                  </div>
                  <div className="card-footer">
                    <span>{signal.action}</span>
                    <span>{signal.horizon}</span>
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
                <span className={`status status-review status-${selectedSignal.reviewState}`}>
                  Review: {formatReviewState(selectedSignal.reviewState)}
                </span>
              </div>
              <h3>{selectedSignal.headline}</h3>
              <p className="detail-summary">{selectedSignal.summary}</p>

              <div className="signal-status-line">
                <span className={`status status-${selectedSignal.status.toLowerCase()}`}>
                  {selectedSignal.status}
                </span>
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
                  <dt>Horizon</dt>
                  <dd>{selectedSignal.horizon}</dd>
                </div>
                <div>
                  <dt>Tags</dt>
                  <dd>{selectedSignal.tags.join(' • ')}</dd>
                </div>
              </dl>

              <div className="detail-block">
                <h4>Operational implication</h4>
                <p>{selectedSignal.implication}</p>
              </div>

              <div className="detail-block">
                <h4>Evidence note</h4>
                <p>{selectedSignal.evidence}</p>
              </div>
            </article>
          ) : (
            <p className="empty-state">No signal matches the current filters.</p>
          )}
        </aside>
      </section>
    </main>
  );
}

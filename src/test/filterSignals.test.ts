import { describe, expect, it } from 'vitest';
import { signals } from '../data/signals';
import { filterSignals } from '../lib/filterSignals';

describe('filterSignals', () => {
  it('returns all signals when no filters are applied', () => {
    expect(filterSignals(signals, { domain: 'All', action: 'All' })).toHaveLength(signals.length);
  });

  it('filters by domain and action together', () => {
    const filtered = filterSignals(signals, {
      domain: 'Cloud',
      action: 'Review procurement'
    });

    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.id).toBe('cloud-sovereignty');
  });
});

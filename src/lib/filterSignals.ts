import type { Action, Domain, Signal } from '../types';

export type FilterState = {
  domain: Domain | 'All';
  action: Action | 'All';
};

export function filterSignals(signals: Signal[], filters: FilterState): Signal[] {
  return signals.filter((signal) => {
    const matchesDomain = filters.domain === 'All' || signal.domain === filters.domain;
    const matchesAction = filters.action === 'All' || signal.action === filters.action;
    return matchesDomain && matchesAction;
  });
}

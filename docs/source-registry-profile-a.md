# Source Registry Profile A

## Purpose

The source registry keeps Big League Ops Radar from becoming a hype feed.

It defines which sources are acceptable for Profile A, what evidence is required before a signal is accepted, and when a signal should be rejected or archived.

## Source tiers

### Tier 1 - Primary / official sources

These are the highest-trust sources for Profile A.

- Government and institutional sources
- Official company blogs / announcements
- Regulatory agencies
- Standards bodies
- Research labs publishing directly

Tier 1 sources are preferred whenever they are available because they describe the signal closest to its origin.

### Tier 2 - Specialist analysis

These sources are useful when they add technical context or structured interpretation.

- Market intelligence sites
- Technical analysis publications
- Infrastructure / AI industry analysis
- Benchmarking platforms such as Artificial Analysis

Tier 2 sources can support a signal, but they should not replace primary evidence when a primary source is available.

### Tier 3 - Media / secondary reporting

These sources can help surface new developments and provide coverage context.

- Reputable media articles
- Interviews
- Conference coverage

Tier 3 sources are acceptable for discovery and context, but they usually require follow-up before a signal is promoted.

## Acceptance rules

Each real signal must include:

- source name
- source URL
- publication date
- source type
- confidence level
- review status

If any of these are missing, the signal should stay in review or be rejected.

## Rejection rules

Reject or archive signals that are:

- unsourced
- pure speculation
- social media noise
- unverifiable claims
- duplicate hype without primary evidence

These rules prevent the radar from accumulating weak signals that look important but do not hold up under review.

## Human-in-the-loop relation

Even Tier 1 sources still require interpretation and review.

A primary source can confirm that something happened, but it does not automatically prove strategic relevance for Profile A. Human review is still needed to decide whether the signal matters, how strong it is, and whether it should influence action.

## Current limits

- No automated verification
- No scraping
- No source scoring engine yet
- Manual registry only

## Definition of done for CP8

CP8 is complete when:

- `docs/source-registry-profile-a.md` defines the trusted source categories for Profile A
- source tiers and acceptance rules are documented clearly
- rejection rules are documented clearly
- the role of human review is explained
- current limits are stated
- `npm run build` passes


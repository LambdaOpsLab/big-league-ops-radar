# Signal Model v1

## What a signal is

A signal is a human-reviewed strategic observation that suggests something is changing, stabilizing, or becoming important in a domain that Profile A tracks.

A signal is not a raw feed item, a scraped headline, or an automated alert. It is a deliberate entry that has been assessed for relevance and usefulness.

## Why the model exists

The model exists to make strategic observations consistent, reviewable, and easy to compare.

It gives the project a structured way to represent signals without turning the dashboard into a vague content list. That supports:

- clearer review
- better prioritization
- more disciplined decision-making
- future compatibility with a fuller product

## Field guide

- `id`: Stable internal identifier for the signal.
- `title`: Short name for the signal.
- `source`: Human-readable name of the source.
- `sourceType`: Broad source category, such as official, company, research, regulatory, media, or market-intelligence.
- `domain`: The strategic area the signal belongs to.
- `summary`: Plain-language description of the signal.
- `whyItMatters`: Why the signal matters strategically.
- `pattern`: The repeatable pattern or shape being observed.
- `lambdaTranslation`: How the signal should be interpreted for Profile A.
- `recommendedAction`: The next step the reviewer should take.
- `confidence`: Assessment of how strong the signal appears.
- `status`: Review lifecycle state for the signal.
- `publishedAt`: When the signal was published or observed.
- `sourceUrl`: Link to the underlying source.
- `reviewNotes`: Optional notes from the human reviewer.

## Human-in-the-loop review

This model is designed for human review, not autonomous acceptance.

The structure encourages a reviewer to check:

- whether the source is credible
- whether the pattern is real or incidental
- whether the translation for Profile A is justified
- whether the recommended action is appropriate

That makes the workflow auditable and easier to explain in a portfolio setting.

## Current limits

- Manual entry only
- No scraping
- No backend
- No automated verification

These limits are intentional in CP6. They keep the model honest and focused on structure rather than ingestion.

## Definition of done for CP6

CP6 is complete when:

- `src/types/radarSignal.ts` defines the `RadarSignal` type
- the required field set is present and typed
- `docs/signal-model-v1.md` explains the model in plain language
- the documentation covers human review, limits, and purpose
- `npm run build` passes


# Architecture Notes

## System shape

Big League Ops Radar is a static front end with three primary layers:

1. Strategy layer
2. Data model layer
3. Presentation layer

The app is intentionally small, but the separation is explicit so the codebase remains understandable and extensible.

## Strategy layer

The strategy layer defines the product boundary:

- Profile A only
- Verified strategic signal domains
- Demo-only scope
- No backend, scraping, or persistence

This layer ensures the product reads like a deliberate portfolio artifact rather than an unfinished platform.

## Data model layer

The data model is a typed list of signals. Each signal uses a consistent schema so the UI can render, filter, and describe items without special-case logic.

The model separates:

- descriptive fields
- operational meaning
- recommended action
- confidence and time horizon

This is important because it supports structured decision-making instead of free-form content dumps.

## Presentation layer

The UI is a React application with:

- a hero section for positioning
- metrics for quick scanning
- filter controls
- signal cards for overview
- a detail panel for deeper reading

The layout is responsive and designed to communicate hierarchy quickly.

## Filtering logic

Filtering is local and synchronous. That choice keeps the implementation transparent and avoids implying any server-side intelligence pipeline.

## Why v0 is static

Static v0 creates a stable baseline for:

- UI composition
- content hierarchy
- signal taxonomy
- recruiter communication

It also keeps the project honest. There is no live data layer, no scraping, no automation, and no persistence.

## Future roadmap boundaries

Possible next steps should only be added when the product requirements justify them:

- real-time ingestion
- ingestion pipelines
- persistence
- alerting
- automated workflow actions
- report generation

These are future capabilities, not current claims.

# Big League Ops Radar

Live demo:
https://big-league-ops-radar.vercel.app/

Big League Ops Radar is a static Vite + React + TypeScript portfolio demo for **Profile A** only. It presents a strategic intelligence dashboard with a controlled signal model, local filters, and a detail panel designed to communicate product judgment and operational clarity.

The project now also includes a Profile A source registry that defines trusted source categories and review rules.
It now also includes real signals, evidence/source verification, and a decision trail so the portfolio can show how review and traceability work together.
CP14 adds a real-use mode with more manually reviewed signals, pattern observations, operational takeaways, and project-candidate tracking.
CP15 adds a weekly operational review template for recurring strategic observation.
CP16 adds strategic pattern memory to capture repeated reviewed themes over time.
CP17 adds a strategic report section and Markdown template for copy-friendly operational summaries.

## Project purpose

The project demonstrates how to turn complex operating signals into a clear, recruiter-friendly decision interface. It is intentionally scoped as a static front end so the portfolio emphasizes product thinking, system design, and presentation quality rather than backend complexity.

## Tech stack

- Vite
- React
- TypeScript
- Vitest
- CSS

## What it shows

- Signal cards with domain, status, confidence, and recommended action
- A detail panel for the selected signal
- Filters by domain and recommended action
- Source verification and decision trail support for real signals
- Strategic report export in a copy-friendly Markdown format
- A responsive layout suitable for portfolio review and Vercel deployment

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run test
npm run build
```

## Portfolio value

This project shows:

- React UI composition
- TypeScript modeling and typed filtering
- Product thinking around information hierarchy
- Operations and AI governance framing
- Structured decision systems
- Human-in-the-loop review design
- Source and evidence traceability
- Portfolio communication and documentation

## Definition of done

- `npm install` works
- `npm run build` passes
- The app remains static and deployable to Vercel
- README documents purpose, scope, and limits
- Recruiter-facing docs explain the design and roadmap

## Limits

- No scraping
- No backend
- No real-time intelligence
- No automation yet
- No automatic intake or promotion engine
- No authentication
- No database
- No Profile B or Profile C

## Roadmap

Future work should focus on intake and automation only after review governance is stable. That means adding real ingestion, persistence, and workflow automation only when there is a clear operating need and a defined review process to support it.

## Deployment

This app is ready for Vercel as a static Vite site. The build output is `dist/`.

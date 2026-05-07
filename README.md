# Big League Ops Radar

Live demo:
https://big-league-ops-radar.vercel.app/

Big League Ops Radar is a static Vite + React + TypeScript portfolio demo for **Profile A** only. It presents a strategic intelligence dashboard with a controlled signal model, local filters, and a detail panel designed to communicate product judgment and operational clarity.

The project now also includes a Profile A source registry that defines trusted source categories and review rules.

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
- No authentication
- No database
- No Profile B or Profile C

## Deployment

This app is ready for Vercel as a static Vite site. The build output is `dist/`.

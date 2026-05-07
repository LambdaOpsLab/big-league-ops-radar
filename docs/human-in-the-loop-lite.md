# Human-in-the-Loop Lite

## Why human review exists

Big League Ops Radar uses human review to avoid treating every signal as equally trustworthy. In strategic work, source quality, context, and timing matter. A review step helps keep the dashboard disciplined.

Human review also gives the project a clearer operating model: signals are entered, inspected, and then either accepted, set aside, or promoted only when they are worth acting on.

## What each status means

- `candidate`: A signal has been captured, but it still needs review.
- `review`: A reviewer is actively checking the signal.
- `approved`: The signal has been accepted as sufficiently credible and useful.
- `archived`: The signal is no longer active or useful for current decisions.
- `project-candidate`: The signal may justify a project or larger initiative, but only after review.

## Why this matters

This layer protects the product from:

- hype
- weak or incomplete sources
- premature project creation
- overconfident interpretation

It keeps the dashboard closer to a real operational workflow and less like an automatic content feed.

## Current limit

The review state is represented in static demo data only.

There is no backend, no scraping, no automation, and no automated verification. That is intentional for CP7 because the goal is to demonstrate the review concept without pretending to solve ingestion or trust validation.


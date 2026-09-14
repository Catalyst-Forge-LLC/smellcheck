---
title: Files
---

Markdown you install and point an agent at. Canon lives in `rules/` in this repo. The [skill](/docs/install) folder carries copies of the `.md` files, not `cursor.mdc`.

| File | Use |
| --- | --- |
| `rules/core.md` | Shared law. Always. Register, applicability heuristic, teaching antithesis, hard bans, cadence budgets, chat vs publish. |
| `rules/audit.md` | Paste-in smell audit (score, flags, protect list, top 5). Additive to core. |
| `rules/claims.md` | Skeptical peer review. Substance first, voice after. |
| `rules/essays.md` | Longform: one register, author in the essay, concrete instance, talk extras. Not for reference docs. |
| `rules/landing.md` | Page copy: pronouns, rhetorical budgets, substance, read-aloud. |
| `rules/outreach.md` | Email / DM / text. Relationship first, one ask. |
| `rules/launch.md` | Shipping posts. Open on a specific moment or the artifact. |
| `rules/civic.md` | Filings, testimony, legal-adjacent memos. Ceremony is earned. |
| `rules/academic.md` | Papers and methods. Precision and citations, not the costume. |
| `rules/cursor.mdc` | Always-on digest. Copy into `.cursor/rules/`. |
| `rules/agents.md` | Host pointer. Paste into `AGENTS.md` or `CLAUDE.md`. |
| `skills/smellcheck/` | Host-agnostic skill. `SKILL.md` plus `rules/*.md`. |

Genre files assume `core.md` and are additive: surface law only. Do not copy the bans. Do not fork `core.md`.

When drafting a specific surface, open that genre file. Filings and testimony: `civic.md`. Papers: `academic.md`. Reference docs, changelogs, API pages, UI chrome: core only.

Raw on this host: [core.md](/rules/core.md), [audit.md](/rules/audit.md), [claims.md](/rules/claims.md), [essays.md](/rules/essays.md), [landing.md](/rules/landing.md), [outreach.md](/rules/outreach.md), [launch.md](/rules/launch.md), [civic.md](/rules/civic.md), [academic.md](/rules/academic.md), [cursor.mdc](/rules/cursor.mdc), [agents.md](/rules/agents.md). Overlay examples: [skeleton](/examples/overlay.md), [this package](/examples/overlay.smellcheck.md).

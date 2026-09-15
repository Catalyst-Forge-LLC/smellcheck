---
title: Have you smell-checked that?
description: An installable writing skill for AI agents. Review prose for vague claims, inflated language, and wording that has not earned its place.
order: 0
---

An installable writing skill for AI agents. Smell Check reviews prose for vague claims, inflated language, and wording that has not earned its place. It gives a writing agent a shared editorial standard, with genre rules and room for a project's voice.

An agent reads the rules and edits. Nothing scans the tree. v1 has no CLI.

## Before / after

Labeled example. The retry button is a **supplied fact**, not something the vague sentence already contains.

**Facts.** This release adds a Retry button to the failed-deploy screen. It reruns the last failed job without opening a terminal.

**Before.** This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

**After.** This release adds a retry button on the failed-deploy screen. Operators can rerun the last job without opening a terminal.

What changed: empty intensifiers. "Transformative" and "fundamentally change" claim a category shift they do not describe. The after version uses only the supplied facts and drops the unearned elevation. Without those facts, asking what concrete change landed is an acceptable result. Do not invent capabilities.

A strong word can stay when the sentence earns it:

**Kept.** The 2025 rewrite was transformative: checkout went from three forms to one.

"Transformative" names a before and an after. That is the earn-the-word test, not a banned-word list.

[Install in your agent](/docs/install) · [See the files](/docs/files)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A page, essay, note, or other publishable prose |
| Writes | Edits in the file you pointed at |
| Changes | The prose. Smell Check is a spray, not a report-only pass |

The npm package also exports `readRule` so a script can load the same files. That helper does not score prose.

## Boundaries

Smell Check does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. Same standard either way. Fuller positioning: [About](/about).

Core law, then a genre file if you need one, then a project overlay. Overlay precedence is only this deep to start: do not fork `core.md`, and do not copy the bans into the overlay.

## The package

| File | Use |
| --- | --- |
| `core.md` | Shared law. Always. |
| `essays.md` / `landing.md` / `outreach.md` / `launch.md` / `civic.md` / `academic.md` | Surface extras only. Do not copy the bans. |
| `audit.md` | Smell. |
| `claims.md` | Substance first, then voice. |
| `cursor.mdc` | Pocket card. Copy into `.cursor/rules/`. |
| `agents.md` | Pointer. Paste into `AGENTS.md` or `CLAUDE.md`. |

Maintained file map: [Files](/docs/files).

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.

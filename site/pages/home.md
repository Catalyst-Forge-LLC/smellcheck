---
title: Have you smell-checked that?
description: Review prose for vague claims, inflated language, and wording that has not earned its place.
order: 0
---

Review prose for vague claims, inflated language, and wording that has not earned its place. Smell Check gives your writing agent a shared editorial standard, with genre rules and room for your project's voice.

An agent reads the rules and edits. Nothing scans the tree. v1 has no CLI.

## Before / after

**Before.** This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

**After.** This release adds a retry button on the failed-deploy screen. Operators can rerun the last job without opening a terminal.

What changed: `core.md` escalation ("not just X") is not in this sentence, but the empty intensifiers are. "Transformative" and "fundamentally change" claim a category shift they do not describe. The after version keeps the same fact, a retry from the UI, and drops the unearned elevation.

A strong word can stay when the sentence earns it:

**Kept.** The 2025 rewrite was transformative: checkout went from three forms to one.

"Transformative" names a before and an after. That is the earn-the-word test, not a banned-word list.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [npm](https://www.npmjs.com/package/smellcheck) · [GitHub](https://github.com/Catalyst-Forge-LLC/smellcheck)

## How you run it

Install the Markdown rules, or the [skill](/docs/skill) folder. Point an agent at them and ask for a smell-check or a publish pass. The npm package also exports `readRule` so a script can load the same files. That helper does not score prose.

Supported first route:

```bash
pnpm add -D smellcheck
```

Copy `node_modules/smellcheck/rules/cursor.mdc` to `.cursor/rules/smellcheck.mdc`, write `docs/smellcheck.md`, then ask the agent to smell-check the page. Or skip npm and [install the skill](/docs/skill) as a folder.

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

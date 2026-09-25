---
title: Have you smell-checked that?
description: An installable writing skill for AI agents. Smell Check edits the prose you give it to remove vague claims, inflated language, and wording that has not earned its place.
order: 0
---

An installable writing skill for AI agents. Smell Check edits the prose you give it to remove vague claims, inflated language, and wording that has not earned its place. You get revised text back, not a report.

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

After installing the skill, save the facts and the draft as `deploy.md` and ask:

> Use Smell Check to revise `deploy.md` using only the supplied facts. Follow the installed Smell Check skill. Edit that file. Do not add capabilities.

[Install in your agent](/docs/install) · [See the files](/docs/files)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A page, essay, note, or other publishable prose |
| Writes | Edits in the file you named, or the revised prose in chat when you paste it |
| Changes | The prose. Smell Check is a spray, not a report-only pass |

## Boundaries

Smell Check does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. Same standard either way. Fuller positioning: [About](/about).

## Which pass

Use the claims pass when the problem is truth or scope. Use the prose pass when the meaning is sound but the wording gets in the way. Add a house-style overlay when your publication has its own rules.

The skill reads shared law, then a genre file if the surface needs one, then your project overlay if you wrote one. The bundled defaults are enough for a first run. The file map and load order live in [Files](/docs/files).

The npm package also exports `readRule` so a script can load the same files. That helper does not score prose.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.

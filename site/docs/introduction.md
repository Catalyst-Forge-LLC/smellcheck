---
title: Introduction
---

**Smell Check** is an installable writing rule set for AI agents. Review prose for vague claims, inflated language, and wording that has not earned its place.

An agent reads the Markdown and edits. Nothing scans the tree. v1 has no CLI. The TypeScript export is `readRule`, a file loader, not a checker.

Written **Smell Check**. npm **`smellcheck`**. Prose, not code smells.

## Before / after

**Before.** This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

**After.** This release adds a retry button on the failed-deploy screen. Operators can rerun the last job without opening a terminal.

The after version keeps the same fact. It drops unearned elevation. `core.md` treats that register as a smell, not as a list of forbidden words.

**Kept.** The 2025 rewrite was transformative: checkout went from three forms to one.

## How it fits

```text
core.md          shared law
genre files      surface extras only
project overlay  pronouns, carve-outs, protected lines
                 ↓
drafting
                 ↓
audit.md         smell
claims.md        substance first, then voice
```

Genre files assume `core.md`. Do not fork `core.md`.

## Boundaries

Smell Check does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. Same standard either way. [About](/about).

## Start

- [Install](/docs/install) — npm package, pocket card, overlay at `docs/smellcheck.md`
- [Skill](/docs/skill) — a folder or ZIP the agent loads on demand
- Host pointer — paste [`agents.md`](/rules/agents.md) into `AGENTS.md` or `CLAUDE.md`
- [Files](/docs/files) — the maintained package map

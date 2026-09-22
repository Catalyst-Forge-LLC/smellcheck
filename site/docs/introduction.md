---
title: What it does
---

**Smell Check** is an installable writing skill for AI agents. It edits the prose you give it to remove vague claims, inflated language, and wording that has not earned its place.

An agent reads the Markdown and edits. Nothing scans the tree. v1 has no CLI. The TypeScript export is `readRule`, a file loader, not a checker.

**[Get started](/docs/install):** install the skill in your agent, then use it.

Written **Smell Check**. Prose, not code smells.

## Before / after

Labeled example. The retry button is a **supplied fact**, not something the vague sentence already contains.

**Facts.** This release adds a Retry button to the failed-deploy screen. It reruns the last failed job without opening a terminal.

**Before.** This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

**After.** This release adds a retry button on the failed-deploy screen. Operators can rerun the last job without opening a terminal.

The after version uses only the supplied facts. It drops unearned elevation. Without those facts, asking what concrete change landed is acceptable. `core.md` treats that register as a smell, not as a list of forbidden words.

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

Host pointer: paste [`agents.md`](/rules/agents.md) into `AGENTS.md` or `CLAUDE.md`. File map: [Files](/docs/files).

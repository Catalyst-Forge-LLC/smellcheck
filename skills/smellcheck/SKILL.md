---
name: smellcheck
description: >-
  Editorial rules for publishable prose. Use when drafting pages,
  essays, emails, posts, filings, or papers; or spray, smell-check,
  audit, or publish. Named file or pasted prose. Not for code or diffs.
---

# Smell Check

Editorial rules for prose that actually says something instead of just
sounding like it. AI-assisted or not.

This file is a digest. It is not a second source of truth. If it
conflicts with `core.md`, `core.md` wins.

## Full law

Read `rules/core.md` in this folder. Smell audit: `rules/audit.md`.
Claims: `rules/claims.md`. Do not paste an audit or claims prompt
without `core.md` in context.

If this folder has no `rules/` directory, look for `rules/core.md` at
the project root or in `node_modules/smellcheck/rules/`. Last resort:
https://smellcheck.dev/rules/core.md (same host for `audit.md`,
`claims.md`, and the genre files).

## Target

Sharp, slightly tired colleague. That is the default, not the only
register. Direct > clever. Clear > profound. Useful >
insightful-sounding. A picture the reader can see sticks. Flatten
it only when they have to decode. Em dashes earn their place; most don't. Judge the
sentence, not the byline. Spray the prose, not the author. Earn the
word. Filings use `rules/civic.md`. Papers use `rules/academic.md`.

## Input and delivery

- **Named file.** Edit that file when the user authorizes an edit.
- **Pasted publication prose.** Return the revised prose in chat unless
  the user names an output file. Do not invent a filename such as
  `deploy.md` from surrounding website copy.
- Use only facts the user supplied. If the draft is vague and no facts
  are supplied, ask what concrete change landed rather than inventing
  features.

## Overlay

The bundled rules are enough for a first run. A missing overlay is not
a setup task.

If the project already has `docs/smellcheck.md`, read it. An overlay
is for house terminology, protected wording, and genre preferences.
Point at this package, then only:

- Pronouns per surface
- Terms that pass the applicability heuristic *here*, with one-line why
- Protected maxims / testimony
- Genre extras that are house law

Do not fork `core.md`. Do not restate the hard bans. Do not demand that
the user create an overlay before revising prose.

## When to open a genre file

If you are drafting or revising a specific surface, read that file
from this folder.

- Page / marketing site: `rules/landing.md`
- Essay / talk / long argument: `rules/essays.md`
- Email / DM / text to someone you know: `rules/outreach.md`
- Ship post / announcement: `rules/launch.md`
- Filing / testimony / legal-adjacent: `rules/civic.md`
- Paper / methods / lit review: `rules/academic.md`

Reference docs, changelogs, API pages, UI chrome: core only. Do not
inject a scene to satisfy essay law.

## Publish pass

Read `rules/core.md` plus the overlay if present, then `rules/audit.md`
or `rules/claims.md`. Both are additive. Do not use the prompt alone.

## Example asks

- Smell-check this page.
- Spray this page.
- Run Smell Check on the README.
- Publish pass on the About copy.
- Spray this comment letter.
- Spray this working paper.

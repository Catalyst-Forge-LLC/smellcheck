<p align="center">
  <img src="site/static/logo.png" alt="Smell Check" width="128" />
</p>

# Smell Check

An installable writing skill for AI agents.

Smell Check edits the prose you give it to remove vague claims,
inflated language, and wording that has not earned its place. You get
revised text back, not a report.

Smell Check is Markdown rules plus a skill folder. An agent reads
them and edits. Nothing scans the tree. v1 has no CLI.

Written **Smell Check**. Prose, not code smells.

**Get started:** pick the agent, install the skill, then run the
before sentence:
[smellcheck.dev/docs/install](https://smellcheck.dev/docs/install).

- [Cursor](https://smellcheck.dev/docs/install#cursor)
- [Claude Code](https://smellcheck.dev/docs/install#claude-code)
- [Claude.ai](https://smellcheck.dev/docs/install#claudeai)

**Site:** [smellcheck.dev](https://smellcheck.dev)

## Before / after

Labeled example. The retry button is a **supplied fact**, not something
the vague sentence already contains.

**Facts.** This release adds a Retry button to the failed-deploy screen.
It reruns the last failed job without opening a terminal.

**Before.** This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

**After.** This release adds a retry button on the failed-deploy screen. Operators can rerun the last job without opening a terminal.

A strong word can stay when the sentence earns it: *The 2025 rewrite was transformative: checkout went from three forms to one.*

Ask (after installing the skill):

> Use Smell Check to revise `deploy.md` using only the supplied facts.
> Follow the installed Smell Check skill. Edit that file. Do not add
> capabilities.

Without those facts, asking what concrete change landed is acceptable.
Do not invent capabilities.

## Other installation methods

npm supplies the rule files and the skill folder. It does not
register the skill with the agent.

```bash
pnpm add -D smellcheck
```

Copy `node_modules/smellcheck/skills/smellcheck/` into the same
destination the [Get started](https://smellcheck.dev/docs/install)
page names for your agent.

To keep the rules in every Cursor chat in that project, copy
`node_modules/smellcheck/rules/cursor.mdc` to
`.cursor/rules/smellcheck.mdc`. Optional: write `docs/smellcheck.md`
as a project overlay for house terms and protected wording, and paste
`rules/agents.md` into `AGENTS.md` or `CLAUDE.md`.

The package also exports `readRule` so a script can load the same
files. That helper does not score prose.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

File map: [Files](https://smellcheck.dev/docs/files). Those paths
exist in the published package under `rules/` and
`skills/smellcheck/`.

## Boundaries

Smell Check does not determine whether a human or a model wrote something, and
it does not try to fool AI detectors. Same standard either way. If the prose
smells, spray it.

<!-- xfacts-label -->

## xFacts label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNp1UUtrAjEQ_ivLd45Kr7kKhRbby3orpYzJmE3NiyS7ZRH_e4krRQ-9TSbfa2bOmCCfBAJ5hkTv2bluO7A6QaDOqTWdPWTKMwRKpToWSJCqdmIIOKs4lIZ6e9kvCHWCPMNRMCOZ9rOfE_cq21RF90oTLTUE8hiqvfq-R83r73IVmJ0NBhLbvofAEEu9vV0c9dFRbr6J1IkMf3kKZDhDIoXkcRHQnArkxxkBEj-ZgnGcG-NBotOcXJw9h4qLWMCG69E6TplLuRF0VGPDULUxdIvZwvkUKJP6M3oI1-LccncUdMfacKeiT-N1lMY9jNbptqf_Bxmi57RscKg1FbnZlHYe1a6z1jw1J06x2BrzfIcytg7jYa2i32ypkptLXT3HbHi1223vNHD5BdsPrdY) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNqdk8FqGzEQhl9lmbNspz2qpxJaMHFP7S2EMJbGu8JaScyM1izG7160beoWclh60-HTP9KnX1eYwH4wkHAksCAjxegGcmcw4GmimAsxWHhExTiLdl8z9wQGJmIJOYGFh-3H7QMYEEWtAhbQaZgaE4OjJC332_4HGDiH5MGCqyyZN3IOMYKBUrnkhfrig2YOGDuukaQ7Ze5KPcYgAx4jdYWz0KdOCuNsOqw-qOkw-TdoU1Cku2Q-n2K-_Nr_eb9BkSBKvrtw0JD6NpPzRAmTI7BXkFy5rWBQLWJ3uz7oUI9bl8fd28U3y8U3h8Pj7h9Jv0e_J-lmICRRrk5DTvLKhG5Y5g0UI1hIOTVNibSdGSyEscRAHgycQiSZRWkEC0zoW5rmHFvMiZiSIw_2-cXAsSYfyb8iazihUwH7fIWCOoCF70_7w2E7-rv9rO2wN_MHWVzvXGZawy3WVwVGDKOsIUkE51VkxORD6teguerie11sTetIF6bgVmly6Gl8n30xQD2TSOuCUqSRlOd7HzyJhoRLadoT3wwMeaSC_d8dvbdw62kCA0wlS_tA8_81Wbkmh9pqpVzp9hMhlmnP) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/skills/smellcheck/SKILL_FACTS.md)


## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`. The maintainer publishes to npm.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)

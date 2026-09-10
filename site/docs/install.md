---
title: Install
---

Wire a project. Node.js 20+. The package is [`smellcheck`](https://www.npmjs.com/package/smellcheck) on npm. Installation supplies Markdown rules, a Cursor pocket card, an optional host pointer, and a skill folder. It does not install a scanner.

```bash
pnpm add -D smellcheck
```

Point an agent at those files and ask for a smell-check. Nothing scans the tree. v1 has no CLI. `readRule` only loads the same Markdown.

No package? [Install the skill](/docs/skill) as a folder.

## Agent setup

Three hooks, same law: Cursor digest, overlay, optional host pointer.

1. Copy `node_modules/smellcheck/rules/cursor.mdc` to `.cursor/rules/smellcheck.mdc` (Cursor digest)
2. Write a project [overlay](/docs/overlay) at `docs/smellcheck.md`. Point "Full rules" at `node_modules/smellcheck/rules/core.md`
3. Optional: paste `node_modules/smellcheck/rules/agents.md` into `AGENTS.md` or `CLAUDE.md` (pointer, not a second digest)
4. When drafting a page, essay, note, ship post, filing, or paper, open that genre file
5. For a publish pass: paste `rules/core.md` plus the overlay, then `rules/audit.md` or `rules/claims.md`. Do not paste the prompt alone.

The pocket card stays in every Cursor chat. The [skill](/docs/skill) loads when you draft publishable prose, or when you name it. The host pointer is for agents that read `AGENTS.md` or `CLAUDE.md`.

Catalog and Node: [Files](/docs/files) · [Node](/docs/node).

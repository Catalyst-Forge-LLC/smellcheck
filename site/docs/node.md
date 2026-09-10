---
title: Node
---

Node 20+. The user-facing product is the Markdown in `rules/` and `skills/smellcheck/`. `readRule` loads those files. It does not smell-check text. Assembling core + genre + overlay is concatenation on purpose.

```ts
import { readRule, files, catalog } from "smellcheck";

const core = readRule("core");
// files.audit is an absolute path to rules/audit.md
```

Markdown is also exported as `smellcheck/rules/core.md` (and the rest), so an agent or a prompt assembler can read the files from `node_modules`.

The skill folder is `smellcheck/skills/smellcheck`.

The maintainer publishes. `pnpm publish` runs a gate first: login, then a patch bump if this version is already on npm. Agents must not run `npm publish`, `pnpm publish`, or `yarn npm publish`.

# Smell Check (host pointer)

Paste this file into `AGENTS.md` or `CLAUDE.md`, or point those files
here. It is a pointer, not a second copy of the bans. If anything
conflicts, `core.md` wins.

**Full rules:** `node_modules/smellcheck/rules/core.md`  
Last resort: https://smellcheck.dev/rules/core.md

**Overlay:** `docs/smellcheck.md` — pronouns, terms that pass here,
protected lines. Write that file. Do not fork `core.md`. Do not restate
the hard bans. Skeleton: `examples/overlay.md` in this package.

Protected maxims (do not rewrite):

- Earn the word.
- Spray the prose, not the author.
- Have you smell-checked that?

When drafting a page, essay, note, ship post, filing, or paper, open
that genre file from `node_modules/smellcheck/rules/` (same names on
https://smellcheck.dev/rules/). Reference docs: core only.

Cursor always-on digest is a different hook: copy `cursor.mdc` to
`.cursor/rules/smellcheck.mdc`. The skill loads on demand:
https://smellcheck.dev/docs/install

Nothing in this package scans the tree.

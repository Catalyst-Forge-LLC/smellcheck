---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Nothing scans the tree. v1 has no CLI.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [smellcheck.zip](/skills/smellcheck.zip).

### Add it

Unzip it. You should see `SKILL.md` and the rule files it reads.

Put that folder in the project you are editing:

`.cursor/skills/smellcheck/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

The zip does not include the always-on pocket card. That is under [Other installation methods](#other-installation-methods).

### Confirm it

Ask Cursor to use Smell Check on the before sentence below. If it edits toward a concrete fact and drops the unearned elevation, it found the skill.

### Try it

Save this sentence as `deploy.md` in the project:

```markdown
This release is a transformative step that will fundamentally change how operators recover from a failed deploy.
```

Then ask:

> Use Smell Check on `deploy.md`. Follow the installed Smell Check skill. Smell-check that sentence.

### Find the result

The file should change. A successful first run looks like this shape, not identical wording from every model:

- The same fact (a retry after a failed deploy)
- The empty intensifiers gone
- No new claims the sentence did not earn

## Claude Code

### Get it

Download [smellcheck.zip](/skills/smellcheck.zip).

### Add it

Unzip, then put the folder in the repo you are editing:

`.claude/skills/smellcheck/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/smellcheck/` instead.

### Confirm it

Same check as Cursor: the first run must edit the sentence.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same file as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [smellcheck.zip](/skills/smellcheck.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent smell-checks the sentence against the installed rules, it loaded the skill.

### Try it

Paste the before sentence, then ask:

> Use Smell Check on this sentence. Follow the installed Smell Check skill. Smell-check it.
>
> This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

### Find the result

The revised sentence appears in the chat. When the agent can write files, it edits `deploy.md`.

## After the review

Smell Check already made the edit. Read the result. Keep a strong word when the sentence earns it. Put project voice and carve-outs in the [overlay](/docs/overlay).

## Other ways to ask

Once the first run works:

- Smell-check this page.
- Spray this page.
- Publish pass on the About copy.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the rule files, the skill folder, and small helpers. It does not register the skill with the agent. `readRule` only loads the same Markdown.

```bash
pnpm add -D smellcheck
```

Then copy `node_modules/smellcheck/skills/smellcheck/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`smellcheck`](https://www.npmjs.com/package/smellcheck) on npm.

To keep Smell Check in every Cursor chat, also copy `node_modules/smellcheck/rules/cursor.mdc` to `.cursor/rules/smellcheck.mdc`, or download [cursor.mdc](/rules/cursor.mdc) to that path. Write a project [overlay](/docs/overlay) at `docs/smellcheck.md`. Optional: paste `node_modules/smellcheck/rules/agents.md` into `AGENTS.md` or `CLAUDE.md`.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/smellcheck) and copy `skills/smellcheck/` and `rules/`.

Catalog and Node: [Files](/docs/files) · [Node](/docs/node).

### Install for all projects

- Cursor: `~/.cursor/skills/smellcheck/`
- Claude Code: `~/.claude/skills/smellcheck/`

Same folder shape. The first-run check is the same.

## One-off

No install. Point an agent at the raw files:

- https://smellcheck.dev/skills/smellcheck/SKILL.md
- https://smellcheck.dev/rules/core.md
- https://smellcheck.dev/rules/audit.md
- https://smellcheck.dev/rules/claims.md

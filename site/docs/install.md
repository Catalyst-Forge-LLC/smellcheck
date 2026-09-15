---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Nothing scans the tree. v1 has no CLI. The bundled defaults are enough for the first run. An overlay is optional later.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project or user skills folder | Readable skill folder | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Readable skill folder | Same |
| Claude.ai | Uploaded skill zip | Chat (or files if the host provides them) | Same |
| Other agents that read `SKILL.md` | Manual copy | Readable skill folder | Unverified |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A polished rewrite alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

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

If Cursor lists installed skills, confirm `smellcheck`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this as `deploy.md` in the project:

```markdown
# Facts

- This release adds a Retry button to the failed-deploy screen.
- It reruns the last failed job without opening a terminal.

# Draft

This release is a transformative step that will fundamentally change how operators recover from a failed deploy.
```

Then ask:

> Use Smell Check to revise `deploy.md` using only the supplied facts. Follow the installed Smell Check skill. Edit that file. Do not add capabilities.

### Find the result

Open `deploy.md`. Success looks like this shape, not identical wording from every model:

- Uses only the supplied facts (retry from the UI)
- Empty intensifiers gone
- No new claims the facts did not supply

That the rewrite worked is not the same check as discovery.

## Claude Code

### Get it

Download [smellcheck.zip](/skills/smellcheck.zip).

### Add it

Unzip, then put the folder in the repo you are editing:

`.claude/skills/smellcheck/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/smellcheck/` instead.

### Confirm it

If Claude Code lists skills, confirm `smellcheck`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this as `deploy.md` in the repo:

```markdown
# Facts

- This release adds a Retry button to the failed-deploy screen.
- It reruns the last failed job without opening a terminal.

# Draft

This release is a transformative step that will fundamentally change how operators recover from a failed deploy.
```

Then ask:

> Use Smell Check to revise `deploy.md` using only the supplied facts. Follow the installed Smell Check skill. Edit that file. Do not add capabilities.

### Find the result

Open `deploy.md`. Look for a concrete rewrite from the supplied facts and no invented features.

## Claude.ai

### Get it

Download [smellcheck.zip](/skills/smellcheck.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

If the product shows installed skills, confirm `smellcheck`. Otherwise ask the chat to name the Smell Check core rule file it must read.

### Try it

Paste, then ask:

> Use Smell Check on this pasted publication prose. Follow the installed Smell Check skill. Return the revised prose in chat. Use only the supplied facts. Do not add capabilities. Do not invent a file named deploy.md.
>
> Facts: This release adds a Retry button to the failed-deploy screen. It reruns the last failed job without opening a terminal.
>
> Draft: This release is a transformative step that will fundamentally change how operators recover from a failed deploy.

### Find the result

The revised sentence appears in the chat. Pasted prose stays in chat unless you name an output file. Do not expect an edit to `deploy.md` from this route.

## After the review

Smell Check already made the edit (or returned the revision in chat). Read the result. Keep a strong word when the sentence earns it.

### Update or remove

Replace the installed `smellcheck` folder (or re-upload the zip) to update. Delete that folder or remove the uploaded skill to uninstall. Copied skills do not refresh when you bump the npm package. Overlays you write stay yours.

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

Optional, after the first run works:

- Write a project [overlay](/docs/overlay) at `docs/smellcheck.md` for house terminology and protected wording. A missing overlay is not a setup failure.
- To keep Smell Check guidance in more Cursor chats, copy `node_modules/smellcheck/rules/cursor.mdc` to `.cursor/rules/smellcheck.mdc`, or download [cursor.mdc](/rules/cursor.mdc). Project rules stay project-local unless you put them in a user-wide rules path your host documents.
- Paste `node_modules/smellcheck/rules/agents.md` into `AGENTS.md` or `CLAUDE.md` if you want a pointer there.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/smellcheck) and copy `skills/smellcheck/` and `rules/`.

Catalog and Node: [Files](/docs/files) · [Node](/docs/node).

### Install for all projects

- Cursor: `~/.cursor/skills/smellcheck/`
- Claude Code: `~/.claude/skills/smellcheck/`

Same folder shape. Discovery and first-use checks are the same.

## One-off

No install. Point an agent at the raw files:

- https://smellcheck.dev/skills/smellcheck/SKILL.md
- https://smellcheck.dev/rules/core.md
- https://smellcheck.dev/rules/audit.md
- https://smellcheck.dev/rules/claims.md

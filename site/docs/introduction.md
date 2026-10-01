---
title: What it does
---

**Smell Check** is an installable writing skill for AI agents. It finds the habits that make writing sound generated or padded: the "it's not just X" pivot, the hope-this-finds-you-well opener, the claim nobody could check. Then it rewrites them and keeps your voice.

An agent reads the Markdown and edits. Nothing scans the tree. v1 has no CLI. The TypeScript export is `readRule`, a file loader, not a checker.

**[Get started](/docs/install):** install the skill in your agent, then use it.

Written **Smell Check**. Prose, not code smells.

## Before / after

### A job announcement

**Before.** I'm thrilled to share that after an incredible journey, I've officially taken the next step in my career and joined Acme as Head of Partnerships. This isn't just a new role — it's a chance to shape the future of how teams work together.

**After.** Some news: I started at Acme this week as Head of Partnerships, and I'm thrilled about it.

The feeling stays. The journey, the next step, and the "not just X, it's Y" pivot go.

### An email that buries the ask

**Before.** I hope this message finds you well. I wanted to reach out to let you know that, unfortunately, we will need to reschedule Thursday's meeting. I truly apologize for any inconvenience this may cause, and I appreciate your understanding and flexibility.

**After.** I need to move Thursday's meeting. Sorry for the shuffle. What time works for you instead?

### A cover-letter claim

**Before.** I have extensive experience leading high-impact teams.

**Smell Check asks.** How many people, for how long, and what changed?

**After** (with your answer). I ran a four-person crew at the county pool for two summers and cut the swim-lesson waitlist in half.

Smell Check does not invent the numbers. When a claim has nothing behind it, it asks.

### A strong word that stays

**Kept.** The renovation transformed the kitchen: we took out the wall, and now it's one room.

`core.md` treats inflated register as a smell, not as a list of forbidden words.

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

Smell Check does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. It goes after the style people now call AI writing, whoever typed it. [About](/about).

Host pointer: paste [`agents.md`](/rules/agents.md) into `AGENTS.md` or `CLAUDE.md`. File map: [Files](/docs/files).

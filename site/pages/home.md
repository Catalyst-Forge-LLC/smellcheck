---
title: "Keep your voice. Lose the padded prose."
description: "Give your agent an email, page, or draft. Smell Check rewrites inflated phrasing and unsupported claims while preserving the facts, feeling, and ask. You get revised text you can use."
order: 0
---

<section class="value-hero" aria-label="Smell Check overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Writing skill for your AI agent</p><h1>Keep your voice. Lose the padded prose.</h1></div><div class="value-pitch"><p class="value-lede">Give your agent an email, page, or draft. Smell Check rewrites inflated phrasing and unsupported claims while preserving the facts, feeling, and ask. You get revised text you can use.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Smell Check</a><a class="cta cta-secondary" href="#an-email-that-buries-the-ask">See the complete email edit</a></div><p class="value-limit">An editorial method. It does not detect who wrote a text or invent evidence for a claim.</p></div></div>
<figure class="value-proof worked-example example-pair" id="an-email-that-buries-the-ask" tabindex="-1">
<figcaption>Put the meeting change where the reader can find it</figcaption>
<p class="example-context">Illustrative email edit. The request and apology stay; the padding goes.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>Before · your draft</span> The ask is buried in the middle</h2>
<blockquote><p>I hope this message finds you well. I wanted to reach out to let you know that, unfortunately, we will need to reschedule Thursday’s meeting. I truly apologize for any inconvenience this may cause, and I appreciate your understanding and flexibility.</p></blockquote>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>After · Smell Check’s rewrite</span> The change comes first, with a clear reply</h2>
<blockquote><p>I need to move Thursday’s meeting. Sorry for the shuffle. What time works for you instead?</p></blockquote><p class="example-payoff">The recipient can see what changed and how to answer. The apology is still there.</p>
</section>
<p class="value-note">Smell Check returns revised prose or edits the file you named. You review the wording before sending it. It does not send the email.</p>
<p class="example-links"><a href="#before--after">See different examples: an announcement and a supported claim</a></p>
</figure></section>

## Before / after

### A job announcement

**Before.** I'm thrilled to share that after an incredible journey, I've officially taken the next step in my career and joined Acme as Head of Partnerships. This isn't just a new role — it's a chance to shape the future of how teams work together.

**After.** Some news: I started at Acme this week as Head of Partnerships, and I'm thrilled about it.

The feeling stays. "Incredible journey," "next step," and "isn't just a role, it's a chance" are the parts that read as generated.

### A cover-letter claim

**Before.** I have extensive experience leading high-impact teams.

**Smell Check asks.** How many people, for how long, and what changed?

**Your answer.** I ran a crew of four at the county pool for two summers. We cut the swim-lesson waitlist in half.

**After.** I ran a four-person crew at the county pool for two summers and cut the swim-lesson waitlist in half.

Smell Check does not invent the numbers. When a claim has nothing behind it, it asks.

### A strong word that stays

**Kept.** The renovation transformed the kitchen: we took out the wall, and now it's one room.

A strong word stays when it points at something you can see. That is the earn-the-word test, not a banned-word list.

[Install in your agent](/docs/install) to try it on your own draft.

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A page, essay, note, or other publishable prose |
| Writes | Edits in the file you named, or the revised prose in chat when you paste it |
| Changes | The prose. Smell Check is a spray, not a report-only pass |

## Boundaries

Smell Check does not guess whether a human or a model wrote the sentences, and it does not try to fool detectors. It goes after the style people now call AI writing, whoever typed it. Fuller positioning: [About](/about).

## Which pass

Use the claims pass when the problem is truth or scope. Use the prose pass when the meaning is sound but the wording gets in the way. Add a house-style overlay when your publication has its own rules.

The skill reads shared law, then a genre file if the surface needs one, then your project overlay if you wrote one. The bundled defaults are enough for a first run. An agent reads the rules and edits; nothing scans the tree, and v1 has no CLI. The file map and load order live in [Files](/docs/files).

The npm package also exports `readRule` so a script can load the same files. That helper does not score prose.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.

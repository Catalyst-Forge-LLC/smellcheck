# AI smell audit prompt

Reusable prompt for auditing any copy (landing pages, emails, blog posts,
social posts, docs, filings) for signs it was AI-generated or AI-flavored.

**This prompt is additive.** Paste into a model, in order:

1. [`core.md`](./core.md) (required) and the project's overlay
2. Everything below the divider in this file
3. The copy to audit

Do not treat the lists below as the house law. Hunt core's hard bans,
cadence budgets, and applicability heuristic from `core.md`, then the
extras here.

**When substance is in question** (overclaim, thin evidence, bad
attribution), use [`claims.md`](./claims.md) instead of or before a
smell-only pass.

---

You are an expert copy editor with a specialty in detecting "AI smell":
the patterns, tics, and vocabulary that make writing feel
machine-generated, generic, or untrustworthy. Audit the copy I provide
below. You have `core.md` (and any overlay) in this context. Apply them.

If `core.md` is not in this context, stop and say so. Do not run a smell
pass that skips the house bans.

## Your task

1. **Score the copy 1-10 for AI smell** (1 = unmistakably human, 10 =
   obviously generated), with a one-paragraph justification. A human
   draft with two marketing words is not a 7. Score the pattern, not
   the word count.
2. **Flag tells that change how the piece reads**, plus every hard ban
   and cadence tell in `core.md` that actually fires. Quote the
   offending text, name the tell, explain briefly. Do not dump every
   vocab-list hit. Apply the applicability heuristic first. A single
   "robust" that names a real property is not a finding.
3. **Suggest a rewrite** for flagged items that are worth changing.
   Preserve meaning. Sound like a sharp, specific human.
4. **Identify what's working.** Quote the most human, distinctive lines so
   they get protected in any rewrite.
5. **End with a prioritized fix list**: the 5 changes that would most
   reduce the AI smell, in order of impact. The top 5 is the
   deliverable. The flag list is evidence, not a to-do of 40 rewrites.

## The tells to hunt

### From core.md (do not re-list)

Hunt every hard ban and cadence tell in `core.md`: escalation formula,
honest framing (including Look / Let's be clear / Here's the thing),
validation+profundity, mechanism inflation, narrative
theater, genuinely-stacks, dramatic apology, suspense, cataphoric
teasers, setup sentences, em-dash furniture, triad packing including
prefix-repetition and Not X. Not Y. But Z., empty marketing
vocab, helper theater, signpost openers, mic-drop closers, permission-slip
offer, intensifier
filler, parallel-zinger density, flattened visual, bold-lead lists,
riddle labels, cozy
machinery, operator notes in the brochure, hand-holding the obvious,
unparseable sentences (including orphaned referent), hidden verb
(including *in*/*out* as the action: "Markdown in, site out", and
dummy maxim: "This one is for the reading," "Four is the whole set"),
sense collision, haughty hero-noun, participial afterthoughts,
topic-sentence pinning. Hidden verb, unparseable (orphaned
referent, insider code), and flattened visual fail in one sentence.
The other cadence tells are density. Hero-noun is a register tell: flag the mission
sentence, not the word. Apply the
corpus-applicability heuristic before rewriting overlay terms. Teaching
antithesis is allowed only when categories differ, never as
synonym-escalation. One concrete landing chant is a named exception,
not a free pass for every triad.

### Rhetorical extras (cluster here; not a second copy of core)

- **"Not X, but Y" antithesis (broader than escalation).** One careful
  teaching contrast per piece can be spice. More than two is a pattern,
  and patterns smell generated.
- **Triadic chants.** "No fluff. No jargon. No BS." / "Faster. Smarter.
  Better." Groups of three parallel fragments, especially negations.
  Budget: one per piece, max, and only if core's protected-maxim
  exception or a genre overlay (landing: one concrete chant) permits it.
- **Symmetrical parallel constructions.** "We speak your language and the
  machine's." Clever-sounding mirror phrases that a million landing pages
  already used.
- **The rule of three in lists everywhere.** When every sentence
  enumerates exactly three items, a model wrote it.
- **Rhetorical questions as transitions.** "So what does this mean for
  you?" / "The result?" / "The best part?"
- **The hedge-flourish.** Winking qualifiers like "(yet)" or "at least
  for now" that perform humility instead of having it.
- **False concessions.** "To be fair…", "It's not all bad…", "That said,
  there is another side." A real limit stays. A performed even-hand
  before the pitch does not.
- **False momentum closers.** "The future is here." / "And this is just
  the beginning." / "The only question is whether you'll be ready."
- **Setup-payoff formula on every heading.** Colon constructions: "The
  problem: you're drowning in tools." Once is fine. Every heading is a
  template.
- **Outline-first filler.** An H2 with a sentence of nothing under it,
  then the next H2. The outline shipped; the prose did not.
- **Engagement bait.** "Agree?", "a thread 🧵", "I'm humbled to
  announce."

### Vocabulary tells

Suspects, not automatic flags. Apply the corpus-applicability heuristic
first. Flag empty marketing use and close variants. Leave terms of art,
product names, and words that would get less precise if swapped for
"important."

- delve, dive deep, deep dive, unpack, explore (as a section-verb with
  no object worth exploring)
- intricate, realm, tapestry (as atmosphere with no object)
- unlock, unleash, harness, empower, supercharge, turbocharge
- leverage (as empty marketing verb: "leverage your workflow"), utilize
  (instead of use), underscore (as pomp: "this underscores the need").
  Domain projects may carve out doctrinal "leverage"
  (force / fulcrum sense) in an overlay.
- seamless, seamlessly, effortless, frictionless, streamline
- game-changer, game-changing, revolutionary, cutting-edge, next-level
- cut through the noise, separate signal from noise, rise above the noise
- landscape (as in "the AI landscape"), ecosystem-as-hype, "in this
  space" as market-speak (not state space / design space as terms of art)
- journey (as in "your AI journey"), transformation-as-hype (not
  org-change when that is the subject)
- robust, comprehensive, holistic, tailored, bespoke: filler adjectives
  only, not a named requirement ("robust to partition")
- "In today's fast-paced world" and any "In today's X" opener
- "Whether you're a X or a Y" audience straddles
- "at the end of the day," "when it comes to," "it's worth noting"
- crucial, vital, essential when stacked or used as filler more than
  once
- "real" as an intensifier used more than twice (real results, real
  value, real impact)
- boost, take it to the next level, elevate-as-hype
- "the power of" anything

### Structural extras

- **Emoji as content furniture.** Checkmarks, rockets, and lightbulbs
  doing the work that words or design should do, especially in lists and
  result badges.
- **Title Case On Every Heading** in body copy contexts where sentence
  case would be natural.
- **Uniform paragraph lengths.** Every paragraph 2-3 sentences, every
  sentence medium-length. Human writing has variance: a one-word
  sentence, then a long one.
- **Bro-etry / short-line stanzas.** Prose broken into one clause per
  line, with blank lines as drama, when the piece is not a poem. Flag
  the formatting, then the sentences.
- **Do not flag Oxford commas** or other house punctuation as AI tells.
  A serial comma is a style choice. Em dashes are a density budget in
  `core.md`, not a mark to erase.
- **Perfectly balanced sections.** Every section the same length, every
  card grid filled to an even number, every argument given exactly equal
  weight.
- **The wrap-up paragraph that restates everything.** "In short, …"
  conclusions that add nothing.
- **Markdown tables as a substitute for prose.** A table that should
  have been three sentences.

### Substance tells

Use [`claims.md`](./claims.md) when truth or scope is the question. Here,
flag only the generated-consensus shape.

Do not demand a fight from a changelog, API doc, or reference page. Do
not demand a dinner-table voice from UI chrome, labels, or error
strings.

- **Claims with no evidence.** "Proven results," "trusted by teams
  everywhere," with zero numbers, names, or examples anywhere.
- **Fake specificity.** Concrete-sounding but unverifiable details: "a
  clear plan by Friday," "10x your output," deadlines and multipliers
  with no mechanism behind them.
- **Pain lists that pitch.** Sections framed as the reader's problems
  where half the items are actually the vendor selling ("That's where we
  come in...").
- **Vague benefits stated as outcomes.** "Save time and money" without
  saying whose time, on what, or how.
- **Metaphor overextension.** A brand metaphor (forge, bridge, compass,
  engine) ridden through every heading. On a **page**, budget two
  references. A long essay whose subject *is* the metaphor may use more;
  riding it through every heading is still the smell. Do not strip a
  picture that landed just to stay under the budget.
- **Interchangeability test.** Could a competitor swap in their logo and
  ship this copy unchanged? If yes, it says nothing. Pages and posts,
  not reference.
- **No opinion anywhere.** On essays and thought-leadership, copy that
  never takes a side reads as generated consensus. Not for reference
  docs or release notes.
- **Perfect politeness.** No edge, no specificity of voice, nothing that
  sounds like one particular person on one particular day. Same scope:
  essays and pages that should have a person. Not man pages.

### The final test

For prose aimed at a human reader (pages, essays, notes, posts): read
the copy aloud. Flag any sentence that a smart person would never
actually say to a friend across a table. That's the sentence to rewrite.

Do not apply the dinner-table test to reference docs, changelogs, or UI
chrome.

## Output format

1. **Score and verdict** (one paragraph)
2. **Flagged items** (quote, tell name, why, suggested rewrite). Evidence,
   not a 40-item homework list.
3. **What's working** (quotes to protect)
4. **Top 5 fixes by impact**

---

## COPY TO AUDIT

[paste copy here]

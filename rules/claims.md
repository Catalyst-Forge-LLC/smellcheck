# Claims + voice review prompt

Reusable prompt for a hard review of any essay, landing page,
announcement, filing, paper, or internal doc. It answers two questions at once:

1. **Does what we're claiming hold up?** (truth, scope, evidence,
   overclaim)
2. **Does it still smell like AI?** (smell-check it, after
   substance)

Use this when the piece needs a skeptical peer, not just a polish pass.
Substance first so you do not cologne a lie. For smell-only audits, use
[`audit.md`](./audit.md).

**This prompt is additive.** Paste into a model, in order:

1. [`core.md`](./core.md) (required) and the project's overlay
2. Everything below the divider in this file
3. The document to review

Pass E names core's bans. It does not restate them. If `core.md` is not
in context, stop and say so.

---

You are a skeptical senior colleague reviewing a draft. You care whether
the claims are true, scoped, and earned. You also enforce house voice
(Smell Check). You are not here to flatter the draft or to rewrite it
unless asked.

If `core.md` is not in this context, stop and say so.

## Inputs you will receive

1. **Document** to review (full text or a linked path + excerpt).
2. Optional: **author intent** (audience, thesis in one sentence, what
   must stay).
3. Optional: **known sources** the author meant to rely on.
4. Optional: **house overlays** (default: this package's `core.md`, plus
   any project overlay named in the request). Use `audit.md` only when
   you want a separate smell dump; Pass E already covers voice.

If intent is missing, infer audience and thesis from the piece and state
your inference.

## Review order (do not skip)

### Pass A: Map the claims

Extract a **claim ledger** of the load-bearing assertions the piece asks
the reader to believe. Include:

- Factual claims (events, products, quotes, metrics, "industry does X")
- Causal claims (X because Y; X makes Y worse/better)
- Scope claims (always / never / every / the industry / nobody)
- Normative claims presented as fact ("the hard part is…", "you don't
  pick…")
- Attribution claims ("Anthropic says…", "research shows…")

Skip pure atmosphere and obvious definitions unless they smuggle a
stronger claim.

If you have more than about 20 rows, you are listing clauses. Merge
until the ledger is the spine, not the sentence list.

For each claim, note: paraphrase, approximate location (section /
quote), claim type.

### Pass B: Stress-test each claim

For each ledger row, judge:

| Status | Meaning |
| --- | --- |
| **Holds** | True enough for this audience; evidence in piece or widely established |
| **Holds if scoped** | True for a narrower audience / time / product than the prose implies |
| **Plausible, thin** | Directionally right; needs example, cite, or softening |
| **Overclaim** | Stronger than evidence (absolute, consensus, inevitability) |
| **False / shaky** | Conflicts with sources or known fact |
| **Misattributed** | Right idea, wrong mouth, missing cite, or cite doesn't support the line |
| **Stale risk** | True today; will rot fast (feature parity, "nobody has won") |

Ask:

1. What would a skeptical expert in this domain push back on first?
2. Is this **analogy** dressed up as **identity**?
3. Is a **local or lab-specific setup** being sold as **how the field
   works**?
4. Does the title / lede / closer claim more than the body proves?
5. Are citations present, and do they actually contain the quoted
   advice?

### Pass C: Strengthen, don't only cut

List claims that hold but underperform:

- Missing one concrete example (a first-person failure, a named
  instance)
- Missing counter-beat (when the advice fails)
- Missing a source that isn't the piece's home vendor or home blog
- Missing audience scope that would make later absolutes safe

Prefer the **smallest edit** that earns the claim: one sentence, one
cite, one softening word.

### Pass D: Internal consistency

Check for contradictions or quiet tensions:

- Advice that contradicts itself two sections later
- "Never do X" next to a case that has to do X
- Essay "I" vs marketing "we" bleed in the argument body
- Section order that buries the real thesis

### Pass E: Voice / smell check (after substance)

Only after Passes A-D:

1. Score AI smell 1-10 with one-paragraph justification (same scale as
   `audit.md`).
2. Flag hard bans from `core.md`: escalation formula, honest-framing,
   validation+profundity, narrative theater, setup-only
   sentences, synonym antithesis, helper theater.
3. Flag cadence budgets: signpost openers, mic-drop closers,
   permission-slip offer, intensifier
   filler, em-dash furniture, parallel-zinger density, flattened visual,
   bold-lead lists,
   riddle labels, cozy machinery, operator notes in the brochure,
   hand-holding the obvious, unparseable sentences.
4. Apply **corpus-applicability**: do not "correct" overlay terms when
   they are structural.
5. Quote lines to **protect** (distinctive human voice).
6. Do **not** let voice polish invent new overclaims.

If substance fails and voice is clean, say so. A clean-smelling wrong
essay is still wrong.

## Output format (required)

### 1. Verdict (short)

One paragraph: does the spine hold? Where does it overclaim? Publish /
revise / block?

### 2. Claim ledger

Table or numbered list: claim | status | note (cite gap, scope,
soften/strengthen).

### 3. Overclaims and soft spots

Each item: severity **H / M / L**, quote or paraphrase, problem,
smallest fix.

### 4. Strengthen list

What to add (examples, counter-beats, cites) without bloating the piece.

### 5. Consistency check

Only real tensions; no nitpicking.

### 6. Smell check / AI smell

Score, flags, protect list, top voice fixes (max 5). Skip rewrite dumps
unless asked.

### 7. Prioritized edit list

Ordered 5-8 actions for the next authoring pass. Substance before
cologne.

### 8. Pass / fail for publish

Explicit: what must change before draft → live (or before send, for
email/landing).

## Rules of engagement

- Be direct. No "honest evaluation" theater. No validation + profundity.
- Prefer quoting the draft over paraphrasing when the wording is the
  problem.
- Distinguish **author opinion** (allowed, should be owned) from
  **presented fact**.
- Do not demand academic citation density for practitioner essays; do
  demand that named attributions be real.
- Do not flatten voice into bland safe prose. Cut theater; keep dialect
  and a picture that lands.
- If the piece is marketing ("we"), judge claims and interchangeability
  too ("could a competitor ship this unchanged?").
- If asked only for the review spec, do not rewrite the source document
  in the same turn unless explicitly requested.

## Severity guide

- **H:** Wrong cite, false fact, title/lede overreach that mis-sells the
  body, or advice that could cause harm if believed (e.g. security).
- **M:** Absolute where a hedge is earned; missing example; convergence
  without evidence; fragile "as of today" lines stated as law.
- **L:** Metaphor budget, closer cadence, optional soften, taste.

---

## DOCUMENT TO REVIEW

**Title / path:**

**Author intent (optional):**

**Known sources (optional):**

**House overlays:** smellcheck `core.md` (plus any project overlay named
here)

**Copy:**

[paste full copy here]

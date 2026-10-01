<p align="center">
  <img src="site/static/logo.png" alt="Smell Check" width="128" />
</p>

# Smell Check

An installable writing skill for AI agents.

Smell Check finds the habits that make writing sound generated or
padded: the "it's not just X" pivot, the hope-this-finds-you-well
opener, the claim nobody could check. Then it rewrites them and keeps
your voice. You get revised text back, not a report.

Smell Check is Markdown rules plus a skill folder. An agent reads
them and edits. Nothing scans the tree. v1 has no CLI.

Written **Smell Check**. Prose, not code smells.

**Get started:** pick the agent, install the skill, then run the
first try-it on that page:
[smellcheck.dev/docs/install](https://smellcheck.dev/docs/install).

- [Cursor](https://smellcheck.dev/docs/install#cursor)
- [Claude Code](https://smellcheck.dev/docs/install#claude-code)
- [Claude.ai](https://smellcheck.dev/docs/install#claudeai)

**Site:** [smellcheck.dev](https://smellcheck.dev)

## Before / after

**A job announcement.**

> I'm thrilled to share that after an incredible journey, I've
> officially taken the next step in my career and joined Acme as Head
> of Partnerships. This isn't just a new role — it's a chance to shape
> the future of how teams work together.

becomes

> Some news: I started at Acme this week as Head of Partnerships, and
> I'm thrilled about it.

The feeling stays. The journey, the next step, and the "not just X,
it's Y" pivot go.

**An email that buries the ask.**

> I hope this message finds you well. I wanted to reach out to let you
> know that, unfortunately, we will need to reschedule Thursday's
> meeting. I truly apologize for any inconvenience this may cause, and
> I appreciate your understanding and flexibility.

becomes

> I need to move Thursday's meeting. Sorry for the shuffle. What time
> works for you instead?

**A cover-letter claim.** "I have extensive experience leading
high-impact teams" gets a question back: how many people, for how
long, and what changed? With your answer, it becomes "I ran a
four-person crew at the county pool for two summers and cut the
swim-lesson waitlist in half." Smell Check does not invent the numbers.

**A strong word that stays.** *The renovation transformed the kitchen:
we took out the wall, and now it's one room.* A strong word stays when
it points at something you can see.

The [install guide](https://smellcheck.dev/docs/install) has a file to
try it on.

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
it does not try to fool AI detectors. It goes after the style people now call
AI writing, whoever typed it. If the prose smells, spray it.

<!-- xfacts-label -->

## xFacts label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNp1UUtrAjEQ_ivLd45Kr7kKhRbby3orpYzJmE3NiyS7ZRH_e4krRQ-9TSbfa2bOmCCfBAJ5hkTv2bluO7A6QaDOqTWdPWTKMwRKpToWSJCqdmIIOKs4lIZ6e9kvCHWCPMNRMCOZ9rOfE_cq21RF90oTLTUE8hiqvfq-R83r73IVmJ0NBhLbvofAEEu9vV0c9dFRbr6J1IkMf3kKZDhDIoXkcRHQnArkxxkBEj-ZgnGcG-NBotOcXJw9h4qLWMCG69E6TplLuRF0VGPDULUxdIvZwvkUKJP6M3oI1-LccncUdMfacKeiT-N1lMY9jNbptqf_Bxmi57RscKg1FbnZlHYe1a6z1jw1J06x2BrzfIcytg7jYa2i32ypkptLXT3HbHi1223vNHD5BdsPrdY) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eJydlEFrGzEQhf-KmLN27bhQyvZUQguh7qm9hWDG0nhXWCstmpEXY_zfixQnDTSHJWd9epp580YX4KPzfndAI7w7UWIXA3Swbu_aNWgIOBJ08Hsk79X9QOYIGiydyMeJEnRwj4L-zKJ-xNQTaHir8and3IEGFpTM0AEacacCeWcocFH-9fAHNBxdsNCByYljampJoGHKaYqV-m6dxOTQq5Q9sTrEpKa8944H3HtSU4pMXxVPCc9aYbZOtMJgX6BmQmY1x3Q8-Dg_3__20CCzYyGr5uTEhR40DHGkCfvy6CAycbdacWnelN5bSyfQkGiKXAo6v6F6J0PetyaOqxdPmupJs93ev9EofaV4ooDBEHQX4JiToQ8qPbf33iSuGlxgSdmIi4F3idAM9b2BvIcOQgxlFIGk-AIduHHyjixoODhPfGahETpIhLYpBlVNidEXsQMlCoYsdI9PGvY5WE92h0lcjRJ0jxeYUIYSnp8P22072n9zjlJKvupXpE51ZWKiJVyd7yJBj27kJSQx43kR6TFYF_olaMxSXV8mm8My0riTM4tsMmhpXMj2FOTd_p80UJ-IuWRHyNNIUoN_y48lFhewhqyE4aqhp0AJpYTjAhalhHuz3nxu1l-aTflVbkAssR0w2AazDDGRLQkziayT-tyr0G52tdjXlSw_RA3abSX32XnZ7c__7YFq1MuleZ5bczs8lLO6YnC9_gWKW7kk) · [raw](https://github.com/Catalyst-Forge-LLC/smellcheck/blob/main/skills/smellcheck/SKILL_FACTS.md)


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

import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import {
	assertRulesPresent,
	catalog,
	files,
	packageRoot,
	readRule,
	ruleIds,
} from "./index.js";

test("every catalog entry has a file", () => {
	for (const entry of catalog) {
		assert.ok(entry.id in files, `catalog id missing from files: ${entry.id}`);
	}
});

test("every rule id is in files", () => {
	for (const id of ruleIds) {
		assert.ok(id in files, id);
	}
});

test("all rule files exist on disk", () => {
	assert.deepEqual(assertRulesPresent(), []);
});

test("core names the brand, the escalation ban, and the heuristic", () => {
	const core = readRule("core");
	assert.match(core, /Smell Check/);
	assert.match(core, /Prose, not code smells/);
	assert.match(core, /not just X, it's Y/i);
	assert.match(core, /unearned language/i);
	assert.match(core, /Judge the sentence, not the byline/);
	assert.match(core, /Earn the word/);
	assert.match(core, /Spray the prose, not the author/);
	assert.match(core, /Have you smell-checked that/);
});

test("em dashes earn their place; they are not a hard ban", () => {
	const core = readRule("core");
	assert.doesNotMatch(core, /No em dashes in publishable prose/);
	assert.match(core, /Em dashes earn their place/);
	assert.match(core, /comma, period, or colon/i);
	assert.match(core, /Do not treat the mark as an AI tell to erase/);
	assert.doesNotMatch(readRule("cursor"), /No em dashes in publishable prose/);
	assert.doesNotMatch(readRule("audit"), /Core already bans them/);
});

test("core names the riddle-label and cozy-machinery tells", () => {
	const core = readRule("core");
	assert.match(core, /Riddle labels/);
	assert.match(core, /Cozy machinery/);
	assert.match(core, /where the machine literally sleeps/);
	const card = readRule("cursor");
	assert.match(card, /Riddle labels/);
	assert.match(card, /Cozy machinery/);
});

test("core names cataphoric teasers and participial afterthoughts", () => {
	const core = readRule("core");
	assert.match(core, /Cataphoric teasers|cataphoric teasers/);
	assert.match(core, /nobody tells you/);
	assert.match(core, /Participial afterthoughts/);
	assert.match(core, /looking out the window/);
	const card = readRule("cursor");
	assert.match(card, /cataphoric/);
	assert.match(card, /Participial afterthoughts/);
	assert.doesNotMatch(core, /Oxford comma/);
	assert.match(readRule("audit"), /Do not flag Oxford commas/);
});

test("core names operator-notes, hand-holding, and unparseable-sentence tells", () => {
	const core = readRule("core");
	assert.match(core, /Operator notes in the brochure/);
	assert.match(core, /Hand-holding the obvious/);
	assert.match(core, /Unparseable sentence/);
	const card = readRule("cursor");
	assert.match(card, /Operator notes in the brochure/);
	assert.match(card, /Hand-holding the obvious/);
	assert.match(card, /Unparseable sentence/);
});

test("core names hidden verb, sense collision, and haughty hero-noun", () => {
	const core = readRule("core");
	assert.match(core, /Hidden verb/);
	assert.match(core, /understanding is in a person/);
	assert.match(core, /folder of Markdown in/);
	assert.match(core, /dummy maxim/);
	assert.match(core, /This one is for the reading/);
	assert.match(core, /Four is the whole set/);
	assert.match(core, /schoolteacher ban/);
	assert.match(core, /Sense collision/);
	assert.match(core, /nearest noun stole the verb/);
	assert.match(core, /Haughty hero-noun/);
	assert.match(core, /hero of a mission sentence/);
	assert.match(core, /Do not hunt the noun/);
	assert.match(core, /work of the committee/);
	assert.match(core, /Hidden verb and unparseable/);
	assert.match(core, /Flattened visual/);
	assert.match(core, /picture the reader can see/);
	assert.doesNotMatch(core, /Hidden verb, haughty hero-noun, and unparseable/);
	assert.doesNotMatch(core, /Nothing I teach them lands/);
	assert.match(core, /orphaned referent/);
	const card = readRule("cursor");
	assert.match(card, /Hidden verb/);
	assert.match(card, /dummy frame/);
	assert.match(card, /Markdown in, site out/);
	assert.match(card, /Dummy maxim/);
	assert.match(card, /Four is the whole set/);
	assert.match(card, /heading resets/);
	assert.match(card, /Sense collision/);
	assert.match(card, /stole the reading/);
	assert.doesNotMatch(card, /Haughty hero-noun/);
});

test("essays names picture-before-theory and obligation as object", () => {
	const essays = readRule("essays");
	assert.match(essays, /Picture before theory/);
	assert.match(essays, /midterm question/);
	assert.match(essays, /Obligation as object/);
	assert.match(essays, /Walk-vs-stage/);
	assert.match(essays, /Do not flag every use\s+of the noun/);
	assert.doesNotMatch(essays, /\*\*Decode tax\.\*\*/);
	assert.doesNotMatch(essays, /\*\*Honest verbs\.\*\*/);
	assert.match(readRule("academic"), /meaning this study still passes/);
	assert.match(readRule("civic"), /names a real oath/);
});

test("audit prompt has a paste slot", () => {
	assert.match(readRule("audit"), /COPY TO AUDIT/);
});

test("claims prompt has a paste slot", () => {
	assert.match(readRule("claims"), /DOCUMENT TO REVIEW/);
});

test("genre files point at core instead of restating it", () => {
	for (const id of ["essays", "landing", "outreach", "launch", "civic", "academic"] as const) {
		const text = readRule(id);
		assert.match(text, /core\.md/, `${id} should point at core.md`);
		assert.doesNotMatch(
			text,
			/It's not just X/i,
			`${id} restates the escalation ban`,
		);
		assert.doesNotMatch(
			text,
			/The honest evaluation/i,
			`${id} restates honest-framing`,
		);
	}
});

test("audit prompt is additive to core", () => {
	const audit = readRule("audit");
	assert.match(audit, /core\.md/);
	assert.match(audit, /This prompt is additive/);
	assert.doesNotMatch(audit, /Cadence tells \(budget, not ban\)/);
	assert.match(audit, /If `core\.md` is not in this context/);
	assert.match(audit, /Suspects, not automatic flags/);
	assert.match(audit, /fail in one sentence/);
	assert.match(audit, /register tell/);
});

test("essays do not require anecdote in reference docs", () => {
	assert.match(readRule("essays"), /not the file for reference docs/i);
});

test("pocket card points at genre files", () => {
	const card = readRule("cursor");
	assert.match(card, /When to open a genre file/);
	assert.match(card, /landing\.md/);
	assert.match(card, /essays\.md/);
	assert.match(card, /civic\.md/);
	assert.match(card, /academic\.md/);
	assert.match(card, /node_modules\/smellcheck\/rules/);
	assert.match(card, /docs\/smellcheck\.md/);
	assert.doesNotMatch(card, /\]\(\.\//);
});

test("host pointer points at core and does not copy the bans", () => {
	const pointer = readRule("agents");
	assert.match(pointer, /core\.md/);
	assert.match(pointer, /docs\/smellcheck\.md/);
	assert.match(pointer, /AGENTS\.md/);
	assert.match(pointer, /CLAUDE\.md/);
	assert.match(pointer, /Nothing in this package scans the tree/);
	assert.match(pointer, /smellcheck\.dev\/docs\/install/);
	assert.doesNotMatch(pointer, /It's not just X/i);
	assert.doesNotMatch(pointer, /The honest evaluation/i);
	assert.doesNotMatch(pointer, /## Hard bans/);
});

test("overlay examples exist and do not restate the bans", () => {
	for (const name of ["overlay.md", "overlay.smellcheck.md"]) {
		const text = readFileSync(join(packageRoot, "examples", name), "utf8");
		assert.match(text, /docs\/smellcheck\.md|Smell Check \/ it/);
		assert.doesNotMatch(text, /It's not just X/i, `${name} restates the escalation ban`);
		assert.doesNotMatch(text, /The honest evaluation/i, `${name} restates honest-framing`);
	}
});

test("no rule file still carries the old brand", () => {
	for (const id of Object.keys(files) as Array<keyof typeof files>) {
		assert.doesNotMatch(readRule(id), /aibreze/i, `${id} still says aibreze`);
	}
});

test("core inventory stays true in the skill zip", () => {
	const core = readRule("core");
	assert.match(core, /not in the skill ZIP/);
	assert.match(core, /cursor\.mdc/);
});

test("skill facts version and bundle match the package", () => {
	const pkg = JSON.parse(
		readFileSync(join(packageRoot, "package.json"), "utf8"),
	) as { version: string };
	const facts = readFileSync(
		join(packageRoot, "skills", "smellcheck", "SKILL_FACTS.md"),
		"utf8",
	);
	assert.match(facts, new RegExp(`version: "${pkg.version}"`));
	assert.match(facts, new RegExp(`\\| \\*\\*Version\\*\\* \\| ${pkg.version} \\|`));
	assert.match(facts, /rules\/civic\.md/);
	assert.match(facts, /rules\/academic\.md/);
	assert.match(facts, /rules\/agents\.md/);
	assert.match(facts, /SKILL\.md/);
});

test("app facts does not point at a missing png", () => {
	const facts = readFileSync(join(packageRoot, "APP_FACTS.md"), "utf8");
	assert.doesNotMatch(facts, /APP_FACTS\.png/);
	assert.match(facts, /appfacts\.dev\/v#/);
});

test("civic shifts register and core names the floor", () => {
	const civic = readRule("civic");
	assert.match(civic, /core\.md/);
	assert.match(civic, /Ceremony is earned/);
	assert.match(civic, /colleague voice is wrong/i);
	assert.match(civic, /Respectfully submitted/);
	assert.match(readRule("core"), /Clean is a\nfloor/);
});

test("academic rejects the costume and keeps the colleague close", () => {
	const academic = readRule("academic");
	assert.match(academic, /core\.md/);
	assert.match(academic, /Do not put on the academic costume/);
	assert.match(academic, /This paper seeks to/);
	assert.match(academic, /essays\.md/);
	assert.doesNotMatch(academic, /passive voice is required/i);
});

test("skill has hybrid frontmatter and does not restate the escalation ban", () => {
	const skill = readFileSync(
		join(packageRoot, "skills", "smellcheck", "SKILL.md"),
		"utf8",
	);
	assert.match(skill, /^---\nname: smellcheck\n/m);
	assert.match(skill, /Not for code or diffs/);
	assert.match(skill, /Read `rules\/core\.md` in this folder/);
	assert.match(skill, /https:\/\/smellcheck\.dev\/rules\/core\.md/);
	assert.match(skill, /When to open a genre file/);
	assert.doesNotMatch(skill, /It's not just X/i);
	const folded =
		skill
			.match(/^---\n([\s\S]*?)\n---/)?.[1]
			?.match(/description:\s*>-\n([\s\S]*)$/)?.[1]
			?.replace(/\s+/g, " ")
			.trim() ?? "";
	assert.ok(folded.length > 0 && folded.length <= 200, `skill description is ${folded.length} chars`);
});

test("skill folder carries canon markdown and omits cursor.mdc", () => {
	const skillRules = join(packageRoot, "skills", "smellcheck", "rules");
	const canonNames = readdirSync(join(packageRoot, "rules"))
		.filter((name) => name.endsWith(".md"))
		.sort();
	assert.deepEqual(readdirSync(skillRules).sort(), canonNames);
	for (const name of canonNames) {
		assert.equal(
			readFileSync(join(skillRules, name), "utf8"),
			readFileSync(join(packageRoot, "rules", name), "utf8"),
			name,
		);
	}
	assert.ok(!existsSync(join(skillRules, "cursor.mdc")));
	assert.ok(!existsSync(join(packageRoot, "skills", "smellcheck", "cursor.mdc")));
});

test("package exports and packs the skill folder", () => {
	const pkg = JSON.parse(
		readFileSync(join(packageRoot, "package.json"), "utf8"),
	) as { files: string[]; exports: Record<string, unknown> };
	assert.ok(pkg.files.includes("skills"));
	assert.ok(pkg.files.includes("examples"));
	assert.ok("./skills/*" in pkg.exports);
	assert.ok("./examples/*" in pkg.exports);
});

test("static sync copies skill and core onto the site", () => {
	execFileSync("node", [join(packageRoot, "scripts", "sync-skill-static.mjs")], {
		cwd: packageRoot,
	});
	const skillSrc = readFileSync(
		join(packageRoot, "skills", "smellcheck", "SKILL.md"),
		"utf8",
	);
	const skillStatic = readFileSync(
		join(packageRoot, "site", "static", "skills", "smellcheck", "SKILL.md"),
		"utf8",
	);
	const skillCursor = readFileSync(
		join(packageRoot, ".cursor", "skills", "smellcheck", "SKILL.md"),
		"utf8",
	);
	assert.equal(skillStatic, skillSrc);
	assert.equal(skillCursor, skillSrc);
	const coreSrc = readFileSync(join(packageRoot, "rules", "core.md"), "utf8");
	const coreStatic = readFileSync(
		join(packageRoot, "site", "static", "rules", "core.md"),
		"utf8",
	);
	assert.equal(coreStatic, coreSrc);
	assert.ok(
		existsSync(join(packageRoot, "site", "static", "rules", "audit.md")),
	);
	assert.ok(
		existsSync(join(packageRoot, "site", "static", "rules", "agents.md")),
	);
	assert.equal(
		readFileSync(join(packageRoot, "site", "static", "examples", "overlay.md"), "utf8"),
		readFileSync(join(packageRoot, "examples", "overlay.md"), "utf8"),
	);
	assert.equal(
		readFileSync(join(packageRoot, "site", "static", "rules", "cursor.mdc"), "utf8"),
		readFileSync(join(packageRoot, "rules", "cursor.mdc"), "utf8"),
	);
	const siteSkillCore = readFileSync(
		join(packageRoot, "site", "static", "skills", "smellcheck", "rules", "core.md"),
		"utf8",
	);
	assert.equal(siteSkillCore, coreSrc);
	assert.ok(
		!existsSync(
			join(packageRoot, "site", "static", "skills", "smellcheck", "rules", "cursor.mdc"),
		),
	);
	const zipPath = join(packageRoot, "site", "static", "skills", "smellcheck.zip");
	assert.ok(existsSync(zipPath));
	const zip = readFileSync(zipPath);
	assert.equal(zip.readUInt32LE(0), 0x04034b50);
	const zipNames = storeZipNames(zip);
	assert.ok(zipNames.includes("smellcheck/SKILL.md"));
	assert.ok(zipNames.includes("smellcheck/rules/core.md"));
	assert.ok(!zipNames.some((name) => name.includes("cursor.mdc")));
});

function storeZipNames(buf: Buffer): string[] {
	const names: string[] = [];
	let i = 0;
	while (i + 30 <= buf.length) {
		if (buf.readUInt32LE(i) !== 0x04034b50) break;
		const compSize = buf.readUInt32LE(i + 18);
		const nameLen = buf.readUInt16LE(i + 26);
		const extraLen = buf.readUInt16LE(i + 28);
		names.push(buf.subarray(i + 30, i + 30 + nameLen).toString("utf8"));
		i += 30 + nameLen + extraLen + compSize;
	}
	return names;
}

test("readme states what the package is", () => {
	const readme = readFileSync(join(packageRoot, "README.md"), "utf8");
	assert.match(readme, /Markdown rules plus a skill folder/);
	assert.match(readme, /## Boundaries/);
	assert.match(readme, /does not try to fool AI detectors/);
	assert.match(readme, /That helper does not score prose/);
	assert.match(readme, /smellcheck\.dev\/docs/);
	assert.match(readme, /Nothing scans the tree/);
});

test("install and files pages name the three hooks and finish the raw list", () => {
	const install = readFileSync(
		join(packageRoot, "site", "docs", "install.md"),
		"utf8",
	);
	assert.match(install, /Nothing scans the tree/);
	assert.match(install, /Which agent do you use/);
	assert.match(install, /Other installation methods/);
	assert.match(install, /AGENTS\.md/);
	assert.match(install, /CLAUDE\.md/);
	assert.match(install, /docs\/smellcheck\.md/);
	assert.doesNotMatch(install, /Short version on the site/);
	assert.ok(!existsSync(join(packageRoot, "site", "pages", "install.md")));
	assert.ok(!existsSync(join(packageRoot, "site", "pages", "skill.md")));
	const skill = readFileSync(
		join(packageRoot, "site", "docs", "skill.md"),
		"utf8",
	);
	assert.match(skill, /Download smellcheck\.zip/);
	assert.doesNotMatch(skill, /Short version on the site/);
	const filesDoc = readFileSync(
		join(packageRoot, "site", "docs", "files.md"),
		"utf8",
	);
	assert.match(filesDoc, /essays\.md/);
	assert.match(filesDoc, /landing\.md/);
	assert.match(filesDoc, /outreach\.md/);
	assert.match(filesDoc, /launch\.md/);
	assert.match(filesDoc, /agents\.md/);
	const redirects = readFileSync(
		join(packageRoot, "site", "static", "_redirects"),
		"utf8",
	);
	assert.match(redirects, /\/install \/docs\/install 301/);
	assert.match(redirects, /\/skill \/docs\/skill 301/);
	const filepress = readFileSync(
		join(packageRoot, "site", "filepress.config.ts"),
		"utf8",
	);
	assert.match(filepress, /href: '\/docs\/install'/);
	assert.match(filepress, /Get started/);
	assert.doesNotMatch(filepress, /label: 'Skill'/);
	assert.doesNotMatch(filepress, /label: 'Install'/);
	assert.doesNotMatch(filepress, /href: '\/install'/);
	assert.doesNotMatch(filepress, /href: '\/skill'/);
});

test("docs nav has a markdown file for every item", () => {
	const nav = JSON.parse(
		readFileSync(join(packageRoot, "site", "docs", "_nav.json"), "utf8"),
	) as {
		sections: Array<{ items: Array<{ id: string }> }>;
		aliases?: Array<{ id: string }>;
	};
	for (const section of nav.sections) {
		for (const item of section.items) {
			assert.ok(
				existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)),
				item.id,
			);
		}
	}
	for (const item of nav.aliases ?? []) {
		assert.ok(
			existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)),
			item.id,
		);
	}
	execFileSync("node", [join(packageRoot, "site", "scripts", "build-docs.mjs")], {
		cwd: join(packageRoot, "site"),
	});
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "index.html")));
	assert.ok(
		existsSync(join(packageRoot, "site", "docs", "dist", "skill", "index.html")),
	);
});

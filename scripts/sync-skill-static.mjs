#!/usr/bin/env node
/**
 * Assemble the installable skill folder from canon `rules/`, then copy
 * it to the site (raw Markdown + ZIP) and `.cursor/skills/smellcheck/`.
 * `cursor.mdc` stays out of the skill; that is the always-on rule.
 */
import {
	copyFileSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillName = "smellcheck";
const skillSrcDir = join(root, "skills", skillName);
const rulesCanon = join(root, "rules");
const skillRulesDir = join(skillSrcDir, "rules");
const siteSkillDir = join(root, "site", "static", "skills", skillName);
const siteRulesDir = join(root, "site", "static", "rules");
const siteZipPath = join(root, "site", "static", "skills", `${skillName}.zip`);
const cursorSkillDir = join(root, ".cursor", "skills", skillName);
const examplesDir = join(root, "examples");
const siteExamplesDir = join(root, "site", "static", "examples");

function ruleMarkdownNames() {
	return readdirSync(rulesCanon)
		.filter((name) => name.endsWith(".md"))
		.sort();
}

function syncDir(fromDir, toDir, names) {
	mkdirSync(toDir, { recursive: true });
	const keep = new Set(names);
	for (const name of names) {
		copyFileSync(join(fromDir, name), join(toDir, name));
	}
	for (const name of readdirSync(toDir)) {
		if (!keep.has(name)) unlinkSync(join(toDir, name));
	}
}

function copySkillTree(destDir) {
	rmSync(destDir, { recursive: true, force: true });
	mkdirSync(join(destDir, "rules"), { recursive: true });
	copyFileSync(join(skillSrcDir, "SKILL.md"), join(destDir, "SKILL.md"));
	copyFileSync(join(skillSrcDir, "SKILL_FACTS.md"), join(destDir, "SKILL_FACTS.md"));
	for (const name of ruleMarkdownNames()) {
		copyFileSync(join(skillRulesDir, name), join(destDir, "rules", name));
	}
}

/** STORE zip (no compression). Paths use forward slashes. */
function crc32(buf) {
	let c = 0xffffffff;
	for (let i = 0; i < buf.length; i++) {
		c ^= buf[i];
		for (let j = 0; j < 8; j++) {
			c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
		}
	}
	return (c ^ 0xffffffff) >>> 0;
}

function writeStoreZip(entries, destPath) {
	const locals = [];
	const centrals = [];
	let offset = 0;

	for (const { name, data } of entries) {
		const nameBuf = Buffer.from(name, "utf8");
		const crc = crc32(data);
		const local = Buffer.alloc(30);
		local.writeUInt32LE(0x04034b50, 0);
		local.writeUInt16LE(20, 4);
		local.writeUInt16LE(0, 6);
		local.writeUInt16LE(0, 8);
		local.writeUInt16LE(0, 10);
		local.writeUInt16LE(0, 12);
		local.writeUInt32LE(crc, 14);
		local.writeUInt32LE(data.length, 18);
		local.writeUInt32LE(data.length, 22);
		local.writeUInt16LE(nameBuf.length, 26);
		local.writeUInt16LE(0, 28);

		const central = Buffer.alloc(46);
		central.writeUInt32LE(0x02014b50, 0);
		central.writeUInt16LE(20, 4);
		central.writeUInt16LE(20, 6);
		central.writeUInt16LE(0, 8);
		central.writeUInt16LE(0, 10);
		central.writeUInt16LE(0, 12);
		central.writeUInt16LE(0, 14);
		central.writeUInt32LE(crc, 16);
		central.writeUInt32LE(data.length, 20);
		central.writeUInt32LE(data.length, 24);
		central.writeUInt16LE(nameBuf.length, 28);
		central.writeUInt16LE(0, 30);
		central.writeUInt16LE(0, 32);
		central.writeUInt16LE(0, 34);
		central.writeUInt16LE(0, 36);
		central.writeUInt32LE(0, 38);
		central.writeUInt32LE(offset, 42);

		locals.push(local, nameBuf, data);
		centrals.push(central, nameBuf);
		offset += local.length + nameBuf.length + data.length;
	}

	const centralStart = offset;
	const centralSize = centrals.reduce((n, b) => n + b.length, 0);
	const eocd = Buffer.alloc(22);
	eocd.writeUInt32LE(0x06054b50, 0);
	eocd.writeUInt16LE(0, 4);
	eocd.writeUInt16LE(0, 6);
	eocd.writeUInt16LE(entries.length, 8);
	eocd.writeUInt16LE(entries.length, 10);
	eocd.writeUInt32LE(centralSize, 12);
	eocd.writeUInt32LE(centralStart, 16);
	eocd.writeUInt16LE(0, 20);

	writeFileSync(destPath, Buffer.concat([...locals, ...centrals, eocd]));
}

const ruleNames = ruleMarkdownNames();
const exampleNames = readdirSync(examplesDir)
	.filter((name) => name.endsWith(".md"))
	.sort();
syncDir(rulesCanon, skillRulesDir, ruleNames);
syncDir(rulesCanon, siteRulesDir, [...ruleNames, "cursor.mdc"]);
syncDir(examplesDir, siteExamplesDir, exampleNames);
copySkillTree(siteSkillDir);
copySkillTree(cursorSkillDir);

const zipEntries = [
	{
		name: `${skillName}/SKILL.md`,
		data: readFileSync(join(skillSrcDir, "SKILL.md")),
	},
	{
		name: `${skillName}/SKILL_FACTS.md`,
		data: readFileSync(join(skillSrcDir, "SKILL_FACTS.md")),
	},
	...ruleNames.map((name) => ({
		name: `${skillName}/rules/${name}`,
		data: readFileSync(join(skillRulesDir, name)),
	})),
];
mkdirSync(dirname(siteZipPath), { recursive: true });
writeStoreZip(zipEntries, siteZipPath);

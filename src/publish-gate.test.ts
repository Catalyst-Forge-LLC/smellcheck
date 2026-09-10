import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { packageRoot } from "./index.js";
import {
	applySkillFactsVersion,
	applyVersion,
	bumpPatch,
	compareSemver,
	nextPublishVersion,
} from "./publish-gate.js";

test("compareSemver orders patch, minor, major", () => {
	assert.equal(compareSemver("0.1.2", "0.1.2"), 0);
	assert.equal(compareSemver("0.1.3", "0.1.2"), 1);
	assert.equal(compareSemver("0.1.2", "0.1.4"), -1);
	assert.equal(compareSemver("0.2.0", "0.1.9"), 1);
});

test("nextPublishVersion bumps only when local is not ahead", () => {
	assert.equal(nextPublishVersion("0.1.4", null), null);
	assert.equal(nextPublishVersion("0.1.4", "0.1.2"), null);
	assert.equal(nextPublishVersion("0.1.4", "0.1.4"), "0.1.5");
	assert.equal(nextPublishVersion("0.1.3", "0.1.4"), "0.1.5");
	assert.equal(bumpPatch("1.0.0"), "1.0.1");
});

test("applyVersion keeps package.json formatting", () => {
	const raw = '{\n\t"name": "smellcheck",\n\t"version": "0.1.4",\n}\n';
	assert.equal(
		applyVersion(raw, "0.1.5"),
		'{\n\t"name": "smellcheck",\n\t"version": "0.1.5",\n}\n',
	);
});

test("applySkillFactsVersion updates yaml and table", () => {
	const raw =
		'---\nversion: "0.3.4"\n---\n\n| **Version** | 0.3.4 |\n';
	assert.equal(
		applySkillFactsVersion(raw, "0.3.5"),
		'---\nversion: "0.3.5"\n---\n\n| **Version** | 0.3.5 |\n',
	);
});

test("prepublishOnly runs the login and bump gate", () => {
	const pkg = JSON.parse(
		readFileSync(join(packageRoot, "package.json"), "utf8"),
	) as { scripts: { prepublishOnly: string } };
	assert.match(pkg.scripts.prepublishOnly, /publish-gate/);
});

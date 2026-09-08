import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { access, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const expected = {
  name: "writing",
  version: "0.5.0",
  url: "https://github.com/PedroAVJ/writing",
};

async function json(...parts) {
  return JSON.parse(await readFile(join(root, ...parts), "utf8"));
}

test("standalone plugin metadata and tracked icon contract are synchronized", async () => {
  const codex = await json(".codex-plugin", "plugin.json");
  const claude = await json(".claude-plugin", "plugin.json");
  const pkg = await json("package.json");

  assert.equal(codex.name, expected.name);
  assert.equal(codex.version, expected.version);
  assert.equal(codex.homepage, expected.url);
  assert.equal(codex.repository, expected.url);
  assert.equal(codex.interface.category, "Productivity");
  assert.equal(codex.interface.composerIcon, "./assets/writing-icon.svg");
  assert.equal(codex.interface.logo, "./assets/writing-icon.svg");

  assert.equal(claude.name, codex.name);
  assert.equal(claude.version, codex.version);
  assert.equal(claude.homepage, expected.url);
  assert.equal(claude.repository, expected.url);
  assert.deepEqual(claude.dependencies ?? [], []);
  assert.equal(pkg.version, expected.version);
  assert.equal(pkg.homepage, expected.url + "#readme");
  assert.equal(pkg.repository.url, "git+" + expected.url + ".git");

  for (const path of [
    "README.md",
    "AGENTS.md",
    "ICON-SOURCES.md",
    "THIRD-PARTY-NOTICES.md",
    "assets/writing-icon.svg",
    "skills/impersonating/SKILL.md",
    "skills/impersonating/agents/openai.yaml",
    "skills/impersonating/scripts/check_draft.py",
  ]) {
    await access(join(root, path));
  }
  assert.ok((await stat(join(root, "assets", "writing-icon.svg"))).size > 0);
  assert.ok(
    (await stat(join(root, "skills", "impersonating", "scripts", "check_draft.py")))
      .mode & 0o100,
  );
});

test("exact public skill names are discoverable and point to their own skill", async () => {
  const { readdir } = await import("node:fs/promises");
  assert.deepEqual((await readdir(join(root, "skills"))).sort(), ["impersonating"]);
  for (const name of ["impersonating"]) {
    const skill = await readFile(join(root, "skills", name, "SKILL.md"), "utf8");
    const metadata = await readFile(join(root, "skills", name, "agents", "openai.yaml"), "utf8");
    assert.ok(skill.startsWith(`---\nname: ${name}\n`));
    assert.ok(metadata.includes(`Use $${name} `));
    assert.match(metadata, /allow_implicit_invocation: true/);
  }
});

test("Brief ownership moved without automatically coupling impersonation", async () => {
  const skill = await readFile(join(root, "skills", "impersonating", "SKILL.md"), "utf8");
  const readme = await readFile(join(root, "README.md"), "utf8");
  assert.match(skill, /`toolchain:brief` owns briefs and their independent style/);
  assert.match(skill, /Do not apply Impersonating automatically to requirements briefs/);
  assert.match(skill, /only when the user explicitly requests voice imitation/);
  assert.doesNotMatch(skill, /`writing:brief`/);
  assert.match(readme, /`toolchain@package-manager`/);
  await assert.rejects(access(join(root, "skills", "brief", "SKILL.md")));
});

test("the checker rejects prohibited dash punctuation without echoing drafts", async () => {
  const checker = join(
    root,
    "skills",
    "impersonating",
    "scripts",
    "check_draft.py",
  );
  const run = (input) => spawnSync("python3", [checker], { encoding: "utf8", input });

  for (const [input, violation] of [
    ["private-alpha — private-omega", "em_dash"],
    ["private-alpha – private-omega", "en_dash"],
    ["private-alpha -- private-omega", "spaced_double_hyphen"],
  ]) {
    const result = run(input);
    assert.equal(result.status, 1);
    assert.equal(JSON.parse(result.stdout).ok, false);
    assert.equal(JSON.parse(result.stdout).violations[violation], 1);
    assert.equal(result.stdout.includes(input), false);
    assert.equal(result.stderr.includes(input), false);
  }

  const clean = run(
    "A voice-first assistant can monitor long-running work through full-duplex audio.",
  );
  assert.equal(clean.status, 0);
  assert.deepEqual(JSON.parse(clean.stdout), { ok: true, violations: {} });
});

test("the Humanizer adaptation records exact source provenance and license", async () => {
  const notice = await readFile(join(root, "THIRD-PARTY-NOTICES.md"), "utf8");
  assert.match(notice, /Humanizer 2\.11\.2/);
  assert.match(notice, /e2e92e7b4b8229253ed5c8e81dc65463fdeddda5/);
  assert.match(notice, /Copyright \(c\) 2025 Siqi Chen/);
  assert.match(notice, /MIT/);
});

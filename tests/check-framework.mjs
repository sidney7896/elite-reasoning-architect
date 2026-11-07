#!/usr/bin/env node
// Structural contract tests. They cannot prove behavior of an external AI model.
// Run from any directory: node tests/check-framework.mjs
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const names = ['README.md','PREFERENCES.md','INTAKE.md','PROMPT_ENGINEERING.md','QUALITY_GATES.md','STARTER.md','VALIDATION.md'];
const docs = Object.fromEntries(names.map(name => [name, readFileSync(resolve(root, name), 'utf8')]));
const pref = docs['PREFERENCES.md'];
const intake = docs['INTAKE.md'];
const prompt = docs['PROMPT_ENGINEERING.md'];
const quality = docs['QUALITY_GATES.md'];
const starter = docs['STARTER.md'];
const readme = docs['README.md'];
let pass = 0;
const check = (name, fn) => { fn(); pass++; console.log('PASS ' + name); };

check('18 unique approved decisions', () => {
  const ids = [...pref.matchAll(/\| (Q\d+) \|/g)].map(x => x[1]);
  assert.equal(ids.length, 18);
  assert.deepEqual(new Set(ids), new Set(Array.from({length:18}, (_,i) => 'Q'+(i+1))));
  assert.match(pref, /Specification approved for implementation/);
});
check('approval gate in intake and quality gates', () => {
  assert.match(intake, /explicit approval of this current specification/i);
  assert.match(quality, /current compact specification was explicitly approved/i);
  assert.doesNotMatch(intake, /generate the final prompt immediately/i);
});
check('English execution prompt and Dutch output are separate', () => {
  assert.match(intake, /\*\*English\*\* standalone prompt/i);
  assert.match(prompt, /standalone, model-agnostic English prompt/i);
  assert.match(quality, /entirely in English/i);
  assert.match(prompt, /Dutch final user-facing result/i);
});
check('canonical starter points to main, not the review branch', () => {
  const block = starter.match(/```text\n([\s\S]*?)```/);
  assert.ok(block, 'missing copyable prompt');
  assert.match(block[1], /https:\/\/github\.com\/sidney7896\/elite-reasoning-architect/);
  assert.doesNotMatch(block[1], /personalization-intake/);
});
check('material user choice and hard conflicts protected', () => {
  assert.match(intake, /user decides material changes/i);
  assert.match(intake, /one recommendation and no more than two meaningful alternatives/i);
  assert.match(intake, /Never silently override a hard requirement/i);
});
check('verified vs user-reported facts distinguished', () => {
  assert.match(intake, /user-reported but unverified claim/i);
  assert.match(prompt, /user-reported until actually verified/i);
  assert.match(quality, /not independently verified/i);
});
check('executor autonomy does not expand write permission', () => {
  assert.match(prompt, /Broad intellectual autonomy does not create external permissions/i);
  assert.match(quality, /external write access is not blanket permission/i);
});
check('handoff includes source dossier and original attachments', () => {
  assert.match(prompt, /separate, thorough research dossier/i);
  assert.match(prompt, /original attachments explicitly/i);
  assert.match(intake, /attachment list/i);
});
check('whole Matt catalog discoverable but conditionally loaded', () => {
  assert.match(readme, /entire current skills repository is discoverable/i);
  assert.match(intake, /on demand/i);
  assert.match(starter, /relevant SKILL\.md/i);
});
check('no outdated provider- or language-default rule', () => {
  assert.doesNotMatch(readme, /Grok acts as the intake/i);
  assert.doesNotMatch(readme, /Final prompt in Dutch by default/i);
  assert.doesNotMatch(intake, /select the best-supported default, unless a comparison is requested/i);
});
check('linked local markdown files exist', () => {
  for (const [name, body] of Object.entries(docs)) {
    for (const m of body.matchAll(/\]\((?!https?:\/\/)([^)#]+\.md)(?:#[^)]+)?\)/g)) {
      assert.ok(existsSync(resolve(root, dirname(name), m[1])), name+' -> '+m[1]);
    }
  }
});
check('separate validation evidence and release limitations', () => {
  assert.match(docs['VALIDATION.md'], /live-model/i);
  assert.match(docs['VALIDATION.md'], /Static/i);
  assert.match(quality, /does not establish/i);
});
console.log('PASS '+pass+' structural contract checks');

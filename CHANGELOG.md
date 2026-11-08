# Changelog

Human-readable change history for Elite Reasoning Architect. Release status and version chronology are tracked in [`RELEASES.md`](RELEASES.md).

This log records material changes to behavior, user preferences, instruction documents, validation, and delivery. Record observed evidence separately from intended behavior.

## [Unreleased]

Changes after the current candidate belong here until a version is assigned. No additional release is claimed by this section.

## [0.1.0-rc.2] — 2026-11-08 (candidate; not released)

### Changed
- Added the user's explicit **visual-first Pro/frontier output preference**: premium interactive HTML as the default format for substantial research, process blueprints, architectural reports and audits when supported and helpful; compact visuals instead for simple questions or unavailable artifact tooling.
- Added optional, task-scoped design reference to the private `premium-interactieve-interface@0.1.0` prompt without auto-activating it, transferring credentials, or requiring downstream access.
- Updated output engineering, quality gates, README, and structural checks to honor the preference alongside Dutch final output, English execution prompts and minimal noise.

### Verification and release status
- Candidate documentation-only update; **not a new published release**, and behavioral gains on the target host are not claimed.
- PR #2 remains the review vehicle; merge still requires explicit approval.

## [0.1.0-rc.1] — 2026-11-07 (candidate; not released)

### Added
- Approved personal configuration: 18 intake/execution preferences plus provider-neutral architecture, a canonical starter, and selective access to the full Matt Pocock skills library.
- Research dossier and original-attachment handoff rules; explicit action-authorization boundaries.
- `VALIDATION.md` with behavioral scenarios and audit disposition; `tests/check-framework.mjs` for repeatable structural checks.
- Version registry and release/change tracking (`VERSION`, `RELEASES.md`, `CHANGELOG.md`).

### Changed
- Consolidated `README.md`, `INTAKE.md`, `PROMPT_ENGINEERING.md`, and `QUALITY_GATES.md` around the approved two-stage workflow.
- Mandatory compact specification approval before producing the execution prompt.
- English-only execution instructions, Dutch final user-facing output by default.
- Greater independent factual verification, source attribution, and treatment of conflicting hard constraints.
- Canonical `STARTER.md` points to `main` for post-release use; branch-specific testing must explicitly load `personalization-intake`.

### Review and verification
- 12/12 static structural checks observed against the candidate source in the consolidation review (see `VALIDATION.md`); this does **not** prove behavior on the target AI host.
- A separate behavioral evaluation was reported with 72 intake sessions, 17 executor sessions and no complete target-host tool traces; improvements to the approval gate were observed, but superiority of final deliverables was not established. Evaluation artifacts are not imported into this repository as authoritative release evidence.
- Consolidated [PR #2](https://github.com/sidney7896/elite-reasoning-architect/pull/2) remains the review vehicle. The earlier audit [PR #1](https://github.com/sidney7896/elite-reasoning-architect/pull/1) was closed as superseded without merge.

### Known limitations
- Complete real-world Stage A → Stage B validation on the intended intake/execution hosts remains pending.
- GitHub source access and external skill availability depend on the actual host and permissions.
- This candidate has **not** been merged into `main` or published as a GitHub Release by this change.

## Historical baseline — unversioned

- `main` baseline: `c8236e0546ffad65462f732eed210486508fdf9f`.
- Original five-document framework before the approved personalization consolidation.
- No historical semantic version is retroactively invented.

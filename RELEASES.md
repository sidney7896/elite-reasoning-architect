# Release and version register

This is the source of truth for **version chronology, status, release references, and promotion decisions**. [`CHANGELOG.md`](CHANGELOG.md) describes what changed; `VERSION` is the machine-readable candidate version on the branch.

## Version ledger

| Version | Date | Source / commit | Status | Review / release reference |
|---|---|---|---|---|
| `0.1.0-rc.1` | 2026-11-07 | `personalization-intake` (commit recorded in PR #2) | **Release candidate — not published** | [PR #2](https://github.com/sidney7896/elite-reasoning-architect/pull/2); target-host validation pending |
| Unversioned baseline | 2026-11-07 snapshot | `main` @ `c8236e0546ffad65462f732eed210486508fdf9f` | Current baseline, not a new release | Existing baseline before PR #2 |

**No GitHub tag or GitHub Release is being created in this change.** Draft PR creation is not a release, and implementation approval does not imply merge approval.

## Versioning policy

Use [Semantic Versioning](https://semver.org/) for new versions:

- `MAJOR`: intentional incompatible changes in how consumers must invoke or interpret the framework.
- `MINOR`: new backwards-compatible capability or materially expanded workflow.
- `PATCH`: backwards-compatible corrections to instructions, tests, or documentation.
- `-rc.N`: candidate under review; **not** evidence of successful host validation or general availability.

Version `0.1.0-rc.1` is the first proposed numbered candidate. The baseline is **unversioned**, not an invented previous release.

## Updating the register

For each future substantive repository change:

1. Add an entry to the `[Unreleased]` section of `CHANGELOG.md` describing user-visible behavior or evaluation changes and linking supporting evidence.
2. Change `VERSION` only when deliberately assigning a new candidate or release version; do not increment versions for every minor commit without a release decision.
3. When promoting a version, add a row here with date, immutable commit SHA, target branch, validation evidence and PR/tag/release link.
4. Create a GitHub tag or GitHub Release **only with explicit authorization** and after the chosen release checks. Record the actual link after successful creation; never claim publication before it occurs.

Keep this log concise, factual and separate from the runtime intake instructions. This file does not authorize merging or deployments.

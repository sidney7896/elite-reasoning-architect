# Personalization decisions — draft

Status: **in progress; not approved for merge**.
Source: explicit user choices during the Matt Pocock–style design interview.
Apply these preferences when the intake design is approved. Do not silently infer unsettled choices.

## Round 1 — Confirmed decisions

| ID | Decision | Confirmed behavior |
|---|---|---|
| Q1 | **B — Adviser, user decides** | Grok should surface meaningful alternatives, explain consequences, recommend an option, and let the user decide material trade-offs. Routine decisions can use sensible defaults. |
| Q2 | **B — Approval before final prompt** | Once intake is sufficient, Grok presents a concise summary of the proposed deliverable and material assumptions and asks for user approval before producing the final execution prompt. |
| Q3 | **C — Hybrid, task-dependent output contract** | Explicitly specify necessary deliverables, constraints and exclusions, but allow the execution model freedom on presentation and depth where that improves usefulness. No irrelevant output. |
| Q4 | **User-specific override: always English prompt** | The prompt Grok ultimately generates for the frontier reasoning model must **always be written in English**, regardless of domain or apparent model preference. The execution prompt must request **Dutch as the default language of the final user-facing output**, unless the user explicitly asks for another language. Code, API names and technical artifacts can remain in English as appropriate. |

## Clarifications

- **Intake conversation language:** Dutch.
- **Generated execution prompt language:** always English; this supersedes the prior adaptive-language option.
- **Language of the execution model's final deliverable:** Dutch by default, explicit user preference overrides. Preserve original language where essential (e.g. code, identifiers, quoted sources, data).
- **No merge or activation yet:** further interview rounds may refine this specification; apply as a coherent set after explicit approval.

## Pending decisions

Questions about intake depth and grouping, source verification, recommendation breadth, and preview format are not yet answered; do not assume them.

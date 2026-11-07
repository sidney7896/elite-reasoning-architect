# Stage B — Frontier reasoning prompt construction

Create a **standalone, model-agnostic English prompt** that a separate exceptionally capable reasoning model can execute. Reflect the **approved task specification**, not an unapproved guess about the user's goals. Read [`PREFERENCES.md`](PREFERENCES.md) for settled priorities.

## What the execution prompt must convey

Include the following **only to the extent the task needs them**, in a structure that serves the deliverable rather than a rigid universal template:

1. **Outcome and acceptance criteria:** the actual job and the concrete end product (answer, decision, audit, code, working artifact, etc.). Do not deliver a plan when implementation was requested.
2. **Relevant context with provenance:** facts the intake verified (and citations), user-reported claims that remain unverified, material assumptions, critical counter-evidence and unresolved uncertainty.
3. **Boundaries:** approved scope, hard constraints, excluded actions, available tools (only if actually known), confidential-data boundaries and explicit approval requirements for risky, production or irreversible external changes.
4. **Reasoning autonomy:** allow the executor to select methods, subproblems, research approaches and even a substantially better solution direction **within the approved goal and hard boundaries**. It may change implementation details without asking; it must disclose a material departure from what the user approved and obtain approval when the goal, hard scope or authorization would change.
5. **Independent verification:** actively seek disconfirming evidence, check critical claims and calculations with available tools, test important edge cases, and distinguish observation from inference. Check dossier claims independently when material. State what could not be checked; never invent tests or sources. Stop investigating when additional work is unlikely to change the outcome, while preserving high-stakes rigor.
6. **Missing information:** proactively find reliable information, make explicitly attributed defensible assumptions where safe, and continue autonomously. Ask only when a user-only authorization or decision is indispensable. Otherwise produce the best valid partial result, with the specific blocker and its consequence.
7. **Output contract:** request the final **user-facing result in Dutch** by default (unless the user specified otherwise). Demand all decision- or task-essential details, but exclude irrelevant preambles, repetitions, arbitrary option counts, boilerplate and private reasoning transcripts. Show meaningful evidence, actual checks, limits and uncertainty — **not the full internal research process**.

The generated **instructions themselves are always English**, irrespective of task domain. Code, API names, data and exact source quotes may naturally remain in their own language.

## Evidence and claims

Treat an externally verifiable user assertion as **user-reported until actually verified**; do not relabel a personal preference as a factual hypothesis. Where the executor must verify an unconfirmed important premise, say so in the prompt. Cite primary sources wherever available, and keep sources distinct from assumptions. Do not claim tools or references can be accessed by the executor unless those capabilities are known.

## Dossier and original attachments

For substantial investigation, transfer a **separate, thorough research dossier** with only relevant evidence, source URLs/identifiers, dates where material, disconfirming evidence, rejected alternatives, verification status and open questions. This is a supporting artifact, **not** a demand for a long user-facing final answer.

List original attachments explicitly by **identity, purpose and availability**. Instruct the executor to inspect original files itself where authorized, rather than relying on lossy summaries. A URL is not a substitute for access. Do not insert sensitive customer material into a public repository or a prompt destined for an unauthorized recipient.

The English prompt must stand on its own even if the dossier and listed attachments are required inputs; it may name those artifacts precisely, but must not depend on the intake chat, undocumented model memory, this framework repository, or the Matt Pocock skills repository.

## Boundaries and efficiency

Broad intellectual autonomy does not create external permissions. Authorized task-scoped edits, local tests and PR creation are allowed **only when the user requested execution and the necessary tools and permissions actually exist**. Production deployment, destructive/irreversible changes and materially risky external actions require separate explicit user approval.

Do not force synthetic multi-agent teams, arbitrary thinking-step counts, hidden chain-of-thought disclosure or ornamental role claims. Optimize for the shortest **complete and accurate** answer, not the shortest possible answer.

## Release

After the intake specification is approved and all [`QUALITY_GATES.md`](QUALITY_GATES.md) checks pass, provide **one copyable Markdown code block containing the entire English execution prompt**. Include the separate dossier and exact list of necessary attachments outside the code block only when applicable. Do not execute Stage B during Stage A unless the user explicitly changes the assignment.

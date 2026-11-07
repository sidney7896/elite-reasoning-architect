# Model-agnostic reasoning prompt engineering

## Design principle

Specify the intended outcome, the relevant evidence/context, constraints, permitted autonomy and a concrete output contract. Give powerful models freedom to choose an appropriate analytical method; do not micromanage hidden reasoning or request chain-of-thought transcripts.

## Build the final prompt

Include only as needed:

1. **Task and success:** what the model must accomplish and what a usable result looks like.
2. **Relevant inputs:** succinct factual context, source materials, attachment references and known assumptions.
3. **Boundaries:** non-negotiable constraints, in/out of scope, permissions, irreversible actions requiring approval.
4. **Quality:** standards of evidence, uncertainty handling, verification, counterarguments and failure modes, tailored to stakes.
5. **Output contract:** exact deliverable, presentation format, necessary depth, decision-oriented supporting information and unwanted output.
6. **Completion conditions:** objective pass/fail criteria where feasible.

Do not force a seven-section prompt. Compress these into natural task instructions.

## Output engineering

The optimal response is the **shortest complete, accurate, decision-useful response**. Too much irrelevant material is a failure. Too little necessary detail is also a failure.

Explicitly exclude when not needed: long introductions, restatement, generic best practices, redundant summaries, arbitrary number of options, decorative tables, irrelevant history, speculative add-ons, boilerplate disclaimers, praise, and narrated internal reasoning.

Choose the correct product: answer vs recommendation vs audit vs source-backed analysis vs software artifact vs report vs implementation. Never substitute an implementation plan for a requested implementation.

## Evidence discipline

- Distinguish facts, assumptions, hypotheses and judgments where material.
- Verify critical facts with available tools and cite relevant sources; never fabricate citations, retrieved contents or results.
- Do not claim tests or external actions were performed without evidence.
- Highlight uncertainty only when it changes the decision or completeness.
- Check alternatives, counterarguments, failure modes and edge cases proportionately to stakes.
- Correct the user when the evidence supports correction; do not disagree performatively.

## Autonomy

Let the execution model choose sensible subproblems, verification methods and relevant tools. Avoid mandatory simulated councils, rigid step counts, '100% brain' claims, and predetermined frameworks. Specify authorization boundaries for irreversible, production, financial, privacy-sensitive or external actions.

## Priority order

Unless the user overrides a lower-priority preference: safety and hard constraints; truthfulness; goal completion; decision usefulness; appropriate depth; minimal noise; presentation.

## Handoff rules

The final prompt must **stand alone**. Do not refer the execution model to this repository, an unavailable Grok conversation, or implied hidden attachments. Include the relevant distilled constraints directly. Specify required attachments by name or description, without pretending their contents are known.

During intake, don't attempt the final task. The user explicitly has a separate execution model. Only perform the task directly if requested.

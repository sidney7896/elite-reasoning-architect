# Quality gates and failure criteria

Apply internally before output. Do not print the checklist unless requested.

## Gate 1 — Intent

- The actual goal and intended artifact are unambiguous enough to proceed.
- The user's proposed means have not silently replaced the intended outcome.
- The chosen deliverable solves the problem instead of merely discussing it.

## Gate 2 — Information

- Critical context and constraints are present or material assumptions are disclosed.
- Source access and attachment availability are represented accurately.
- Nothing vital was removed during compression.
- Material user-stated facts are verified where feasible or clearly labeled as assumptions in the prompt.

## Gate 3 — Model fit

- The prompt is model-agnostic and does not depend on undocumented model internals.
- It uses outcome-based quality criteria, not rote internal-thinking instructions.
- It permits appropriate autonomous judgment and sets approval boundaries where needed.

## Gate 4 — Output contract

- Output form and detail level match the user's actual use case.
- Critical evidence, confidence or verification is requested where warranted.
- Irrelevant output is explicitly discouraged.
- The final execution prompt is standalone, with attachments specified where necessary.

## Gate 5 — Efficiency

- Remove repeated context, duplicate constraints, ceremonial roles, arbitrary frameworks and unnecessary formatting instructions.
- Ensure any remaining length changes behavior or prevents meaningful failure.
- Do not make the prompt needlessly short if that removes decision-critical detail.

## Explicit failure criteria

A prompt fails if it predictably produces: generic filler; bloated explanations; invented evidence; unjustified certainty; a plan instead of the requested deliverable; unnecessary intake questions; an incorrect output format; missing hard constraints; a final prompt that depends on hidden intake context or an unread repository; or a final prompt that embeds unverified material claims as established facts.

## Release format

Provide **one copy-ready Markdown code block** containing the final model-agnostic execution prompt. No long explanation before or after. After the block, mention only any attachments the user must provide.

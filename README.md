# Elite Reasoning Architect

A model-agnostic intake and prompt design framework. Grok acts as the intake and prompt architect; a separate frontier reasoning model performs the actual task.

**Primary objective:** maximize relevant, correct, usable outcomes while minimizing unnecessary output.

## Usage

1. Give Grok the instructions in [`STARTER.md`](STARTER.md) with this repository attached through GitHub access, or a readable direct link.
2. Describe your request, goal, context, and any supporting attachments.
3. Answer only material intake questions, if any.
4. Receive one standalone final prompt and send it to your chosen reasoning model with any required attachments.

## Instructions (read in order)

1. [`INTAKE.md`](INTAKE.md) — intent, necessary questions, ambiguity, scope and priorities.
2. [`PROMPT_ENGINEERING.md`](PROMPT_ENGINEERING.md) — translate the intake into a reliable, model-agnostic prompt.
3. [`QUALITY_GATES.md`](QUALITY_GATES.md) — release criteria and failure conditions.

## Non-negotiables

- No mandatory intake questions: ask only where answers materially alter the deliverable.
- The final prompt must be self-contained: **the execution model must not need this repository**.
- Separate desired outcomes from the user's suggested implementation.
- Avoid prescribed hidden chains of thought, imaginary agent swarms, inflated role claims and prompt theater.
- Use evidence, tools and verification when available and materially relevant; never invent sources or test results.
- Provide the shortest output that fully accomplishes the actual goal, not the shortest output regardless of usefulness.
- If repository access fails, state that clearly and ask the user to provide the files; do not pretend to have read them.

## Language

Intake in Dutch. Final prompt in Dutch by default; code, technical artifacts, API identifiers, and file names in English where applicable. Follow explicit user language requests.

## Maintenance

Changes to this repository affect future Grok intakes only after Grok reloads the relevant files. A GitHub link does not automatically inject file contents into every model's context.

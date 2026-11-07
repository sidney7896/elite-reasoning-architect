# AUDIT.md

## Executive verdict

The Elite Reasoning Architect framework is already lean, well-structured, and effective at its core goals of adaptive intake, self-contained model-agnostic prompts, and noise reduction. Highest-impact residual risks concern the treatment of user-stated facts as potentially provisional and under-specified handling of contradictions. Targeted, minimal additions address these without increasing complexity. The system remains suitable for both simple and high-stakes requests.

## Findings

| ID | Severity | File/Section | Tekortkoming | Bewijs | Voorgestelde verbetering |
|----|----------|--------------|--------------|--------|--------------------------|
| F1 | Medium | PROMPT_ENGINEERING.md / Evidence discipline; QUALITY_GATES.md / Gate 2 | User-stated factual claims can be embedded as established context without verification or labeling. | Common failure mode in prompt construction; framework distinguishes facts/assumptions downstream but is lighter on intake-stage provisional treatment. Scenario: user asserts unverified technical or legal fact that becomes a premise. | Add explicit rule to treat claims as provisional, verify when feasible, and label/instruct verification in final prompt. |
| F2 | Medium | INTAKE.md / Conversation behavior | Contradiction identification is required, but practical resolution (surfacing, priority, when to ask) is under-specified. | Risk of silent prioritization or repeated questions on incompatible requirements. | Strengthen with explicit surface + outcome-preferring assumption + ask-only-on-material-risk rule. |
| F3 | Low-Medium | README.md / Language | Default Dutch final prompt may limit quality on complex technical tasks for English-dominant frontier models. | 2026 prompting guidance and model training data show English often yields stronger reasoning; override exists but default can be improved with preference. | Clarify preference for English on complex/technical tasks unless user requires Dutch. |
| F4 | Low | Multiple | Complexity adaptation and high-stakes guidance are high-level; agents may under- or over-apply verification. | Sections exist and are proportionate; residual risk of inconsistent application. | No change; residual risk accepted to avoid added complexity. |

## Implemented changes

- README.md: Updated Language section with preference for English on complex/technical tasks.
- INTAKE.md: Expanded contradiction handling sentence under Conversation behavior.
- PROMPT_ENGINEERING.md: Added provisional-claims bullet under Evidence discipline.
- QUALITY_GATES.md: Added labeling/verification requirement to Gate 2 and corresponding failure criterion.
- AUDIT.md: Added this report.

## Validation

Mental simulations (not live model tests):
- Simple request (e.g., factual lookup): Framework produces short prompt with no unnecessary questions; changes do not interfere.
- Ambiguous request (e.g., "improve this"): Still asks one high-value question; provisional claims rule does not force extra verification on non-material points.
- Complex high-stakes (e.g., technical design with user-asserted constraints): Prompt now more reliably labels assumptions and instructs verification; contradiction rule reduces silent resolution risk.
Uncertainties: Actual performance depends on the specific frontier model and precise wording of user inputs; no automated regression suite exists.

## Remaining risks

- Agents may still inconsistently apply the new rules under time pressure or very long contexts.
- Language preference remains advisory; user may still receive Dutch prompts on complex tasks if not explicitly preferred.
- No automated validation of generated prompts against the gates.
- Framework relies on the intake agent correctly interpreting "material" and "feasible."

## Handoff

Pull Request: [to be filled after creation]

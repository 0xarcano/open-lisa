# Lisa

Lisa turns a feature idea into a reviewed specification through a focused interview.

## When To Use Lisa

Use Lisa when the user wants to shape a feature before implementation, clarify scope, or produce a PRD and structured user stories.

## Available Tools

- `lisa_init` initializes a new interview from slash-command arguments.
- `lisa_list` lists in-progress interviews.
- `lisa_read` loads an interview state and draft.
- `lisa_update_draft` replaces the current draft and updates question count.
- `lisa_finalize` writes the final Markdown, JSON, and progress outputs.
- `lisa_cleanup` removes in-progress Lisa state.

## Workflow

1. Start with `/lisa "feature name"` or `/lisa-plan "feature name"`.
2. Ask one focused question at a time.
3. Prefer questions about scope, constraints, data, UX, edge cases, risks, and tradeoffs.
4. If first-principles mode is enabled, spend the first 3-5 questions challenging whether the feature should be built and what the smallest useful solution is.
5. Update the draft every 2-3 answers with `lisa_update_draft`.
6. Finalize only when the user explicitly asks to finish.

## Finalization Rules

- Do not implement the feature.
- Do not edit unrelated files.
- Produce a complete Markdown PRD and Ralph-compatible user story list.
- Call `lisa_finalize` with the slug, description, markdown, and user stories.
- After finalization, output exactly `SPEC COMPLETE` and stop.

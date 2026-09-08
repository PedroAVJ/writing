---
name: brief
description: "Create or revise compact briefs with ordered claims and separate explanatory paragraphs. Use when the user wants this lightweight format for requirements, an essay, or other material."
---

# Brief

Use the requested destination's native elements. Use Markdown when no destination is specified. Preserve the same information hierarchy in either form.

## Structure

Use a simple header followed by a flat sequence of clauses:

1. One descriptive title, normally a noun phrase, with one meaningful icon when the format supports it. The icon identifies the subject or category; a logomark may identify a brand. Do not add a subtitle.
2. One short purpose paragraph explaining why the material matters or the work is needed. The title already serves as its lead, so do not insert another lead sentence or label above the paragraph.
3. A numbered sequence of claims, capabilities, rules, or outcomes. Do not add a heading before the list.

Each clause has a plain lead sentence that states one atomic claim, followed by a separate, indented paragraph that expands that same claim. Keep the lead short and make its verb carry the claim. Keep the lead and explanation in separate paragraphs. Use plain leads by default; a destination may use bold when it is needed to preserve the two reading levels.

```markdown
1. State one claim concisely.

   Expand that claim with the definitions, conditions, enumerations, or precision the reader needs.
```

Include an indented paragraph, or gloss, for every clause. It is not another list item or a second claim, and it stays visible so the reader can choose whether to read it. An independent claim belongs in its own numbered clause; do not create arbitrary nested lists.

Numbers express position and order, not stable identity. Renumber the sequence when inserting or moving a clause. Use stable IDs only when explicitly requested.

Order clauses by the subject's natural sequence: chronological order for historical evidence, workflow order for process requirements, or the progression of an argument for an essay.

## Compression and meaning

The header and clauses share three roles: a glyph marks the subject or position, a sentence names or states the idea, and a short paragraph explains it. The title names; a clause lead makes a claim. The number already fills a clause's glyph role, so do not add a clause emoji. Use each marker for one purpose rather than stacking decorative glyphs or treating a position number as an identifier.

Compress the lead even when supporting information must move out of it. Use familiar domain language in the lead and plain words in the gloss. Put enumerations, conditions, definitions, and precision in the gloss when they support the same atomic claim. Preserve the intended meaning and important uncertainty across the whole clause, without requiring the lead alone to carry every detail or making it misleading.

Review the sentence and paragraph layers separately for roughly similar lengths within each layer. These are editing budgets, not strict word or character counts. Keep enough detail to retain the meaning; move an independent idea into another clause rather than stretching a gloss to cover it.

## Rendering

- In Notion, use the native page title and icon, one purpose paragraph, and native numbered items with plain leads. Give each item a separate indented gray child paragraph for its gloss. Keep glosses expanded and visible. Do not duplicate the page title with a body H1.
- In Markdown, use one H1 and one purpose paragraph, then numbered leads with a blank line and an indented paragraph under each. Preserve separation and indentation even when gray text is unavailable.
- In X Articles, keep the same title, purpose, and numbered sequence. When the editor strips text color or indentation, use bold lead sentences and separate native blockquote blocks for the glosses. This is visual hierarchy, not attribution to a quoted speaker. Verify the saved preview; pasted styling is not proof that it survived.
- In another document format, preserve the title, purpose, flat ordered leads, and visibly subordinate explanatory paragraphs using native elements.

## Content

- Ground the brief in the supplied facts and current evidence. Do not invent scope, metrics, owners, or commitments.
- For business requirements, lead the purpose paragraph with the primary business driver and the problem or risk it creates. Put secondary benefits after the main reason. For other material, explain its own purpose without inventing a business justification.
- Keep a material limit or unresolved decision with the clause it affects. Do not collect open questions in a section at the bottom.
- Keep the brief easy to scan and revise. Remove repeated context, generic setup, and wording that merely sounds formal. Merge clauses that make the same point. Avoid intensifiers such as “really” when they add no meaning; retain emphatic wording when it is intentional and supported by the user's voice. Read all leads alone to check the argument, then read each gloss to check that it explains its lead without adding an unrelated claim.

Do not add metadata tables, executive summaries, objective or scope headings, stakeholder sections, evidence and traceability sections, acceptance-criteria sections, risk sections, timelines, or appendices unless the user explicitly requests them.

This format is an intentionally lightweight working brief. Do not claim that it conforms to a formal BRD or PRD standard.

## Authoring

The active assistant authors and revises the brief directly. Do not delegate writing to Claude or another provider as a prerequisite. A different author requires the user's explicit request.

When the brief should sound like the user, apply `writing:impersonating` at the same time. Brief controls the information structure and visual hierarchy; Impersonating controls language, cadence, and voice. A chat sample does not require turning a public essay into a chat transcript.

When revising existing files, change only the brief or files the user placed in scope.

# Writing

Two skills for writing that is easy to scan and still sounds like you. Works in Codex and Claude Code; the active assistant writes directly without needing another model.

- **`writing:brief`** creates a title with a meaningful glyph, a short purpose paragraph, and a flat ordered sequence of atomic claims. Each claim has its own visible, subordinate explanation. It preserves this hierarchy in Markdown, Notion, and X Articles.
- **`writing:impersonating`** uses relevant user-authored examples to match your voice for the audience and medium. WhatsApp and iMessage are valid sources when the corresponding tools are available, as are email, documents, and supplied text. It reads a bounded sample, preserves facts, and keeps private examples out of the repository.

Use both for an essay in your voice with the brief structure. Writing owns the words and format; destination tools own recipients, draft storage, and authorized delivery. Preparing a draft does not publish it.

## Install

Add the public `PedroAVJ/package-manager` marketplace in your client, then install `writing@package-manager`. No account or provider dependency is required for supplied examples. Reading connected sources requires the corresponding destination tools and access.

## Private preferences

Optional explicit preferences can live in `~/.config/writing/preferences.md`, or a file selected by `WRITING_PREFERENCES_PATH`. Keep that file outside Git. The plugin does not generate or persist a voice profile. Its local checker supports an optional preference against em dashes, en dashes, and spaced double hyphens; it does not impose that preference on everyone.

## Validation and license

Run `npm test` and `claude plugin validate .`. First-party material is MIT licensed. Humanizer-derived review guidance retains its source and license in `THIRD-PARTY-NOTICES.md`.

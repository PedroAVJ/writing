# Writing

Writing drafts directly in your voice from relevant user-authored examples. It
works in Codex and Claude Code; the active assistant writes without requiring
another model.

`writing:impersonating` matches language, cadence, and phrasing to the audience
and medium using a bounded sample. WhatsApp, iMessage, email, documents, and
supplied text can provide evidence through their owning tools. Private examples
and persistent voice profiles stay outside the repository.

Brief authoring has moved to `toolchain:brief` in `toolchain@package-manager`.
Brief uses its own consistent style for requirements. It does not automatically
invoke Impersonating. Compose them only when the user explicitly requests voice
imitation for a brief. The destination tool owns drafts and authorized delivery;
preparing wording does not publish it.

## Install

Add the public `PedroAVJ/package-manager` marketplace in your client, then install `writing@package-manager`. No account or provider dependency is required for supplied examples. Reading connected sources requires the corresponding destination tools and access.

## Private preferences

Optional explicit preferences can live in `~/.config/writing/preferences.md`, or a file selected by `WRITING_PREFERENCES_PATH`. Keep that file outside Git. The plugin does not generate or persist a voice profile. Its local checker supports an optional preference against em dashes, en dashes, and spaced double hyphens; it does not impose that preference on everyone.

## Validation and license

Run `npm test` and `claude plugin validate .`. First-party material is MIT licensed. Humanizer-derived review guidance retains its source and license in `THIRD-PARTY-NOTICES.md`.

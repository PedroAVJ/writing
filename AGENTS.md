# Repository guidance

- This repository is the canonical source for the public `writing` plugin.
- Keep Codex and Claude manifests synchronized. The two skills are exactly `writing:brief` and `writing:impersonating`.
- Brief owns title, purpose, atomic ordered claims, and separate visible glosses. Impersonating owns evidence-backed user wording. They can apply together.
- The active assistant writes directly. Do not add automatic author delegation or a Claude prerequisite.
- Keep private messages, personal style profiles, account identifiers, credentials, and source histories out of Git. Optional user preferences live outside the plugin.
- Preserve implicit invocation and third-party provenance in `THIRD-PARTY-NOTICES.md`.
- Bump the plugin version when agent-loadable behavior changes and validate before release.

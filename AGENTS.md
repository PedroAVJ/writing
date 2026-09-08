# Repository guidance

- This repository is the canonical source for the public `writing` plugin.
- Keep Codex and Claude manifests synchronized. The public skill is `writing:impersonating`; `toolchain:brief` owns Brief.
- Toolchain owns Brief's structure and independent style. Impersonating owns explicitly requested evidence-backed user wording; do not automatically apply it to requirements briefs.
- The active assistant writes directly. Do not add automatic author delegation or a Claude prerequisite.
- Keep private messages, personal style profiles, account identifiers, credentials, and source histories out of Git. Optional user preferences live outside the plugin.
- Preserve implicit invocation and third-party provenance in `THIRD-PARTY-NOTICES.md`.
- Bump the plugin version when agent-loadable behavior changes and validate before release.

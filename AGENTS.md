# AGENTS.md — @kiichan/design-system

Shared React UI library for Kiichan apps. Distributed by **GitHub release tag**, consumed as `@kiichan/design-system`. Documented in Storybook.

## Tech stack

| Concern | Choice |
| --- | --- |
| Package | `@kiichan/design-system` (Vite library build) |
| UI | React + TypeScript + Tailwind |
| Docs | Storybook 10 |
| Structure | Atomic design: atoms / molecules / organisms |
| Primitives base | HeroUI + local wrappers/tokens |
| Package manager | pnpm |

Peers: `react` / `react-dom` `^18.2 || ^19` (React 19 preferred; React 18 support planned removal in v3).

## Commands

```bash
pnpm install
pnpm storybook          # primary local workflow
pnpm dev                # Vite playground
pnpm build              # library dist + types
pnpm build-storybook
pnpm verify:react19     # build + storybook build
pnpm verify:react18     # React 18 override verify (heavier)
pnpm release:patch|minor|major   # tag + changelog (must be on master)
```

## Directory map

```txt
src/
  components/
    atoms/          # Button, Input, Dialog, Select, …
    molecules/      # Table, Toast, ErrorWrapper, Breadcrumbs, …
    organisms/      # WysiwygEditor, OnboardDialog, …
    tokens/         # Design tokens surface
  styles/           # Global / theme styles
  utils/            # e.g. cn()
  index.ts          # Public package exports — must export every public component
.storybook/         # Storybook config
scripts/release.ts  # SemVer release automation
```

Component folder convention (see `atoms/Button/`):

```txt
ComponentName/
  ComponentName.tsx
  ComponentName.stories.tsx
  index.ts
```

## Coding conventions

- **Search before creating.** If a similar atom/molecule exists, extend or compose it — do not fork a parallel API.
- New public components must be:
  1. Implemented under the correct atomic layer
  2. Exported from the component `index.ts`
  3. Re-exported from `src/index.ts`
  4. Covered by a Storybook story (controls/docs when practical)
- Prefer accessible defaults (labels, keyboard, focus). Do not ship decorative-only interactive elements.
- Keep props explicit and typed; avoid `any`.
- Breaking prop/API changes → **major** release; new components/features → **minor**; fixes → **patch**.
- Do not bundle app-specific business logic (booking, auth, tenant rules) into the design system.

## Consumer upgrade (apps)

Apps must **not** rely on `pnpm add` / `npm install` for tag bumps. Documented path:

1. Edit consumer `package.json`: `"@kiichan/design-system": "github:firnazluztian/my-design-system#vX.Y.Z"`
2. `pnpm install`
3. Commit `package.json` + `pnpm-lock.yaml`

See [README.md](./README.md#-upgrading-in-consuming-projects).

## Anti-patterns

- Shipping a component without a story or without adding it to `src/index.ts`
- App-only one-offs that belong in a consumer `features/` folder
- Breaking changes in a patch/minor release
- Assuming CLI install updates consumer pins correctly

## Before you finish

- [ ] Story exists and renders in Storybook
- [ ] Exported from component `index.ts` **and** `src/index.ts`
- [ ] `pnpm build` succeeds (or `pnpm verify:react19` for larger changes)
- [ ] Changelog/release implications considered (patch vs minor vs major)
- [ ] No secrets in the diff

## Docs

- [README.md](./README.md)
- [CHANGELOG.md](./CHANGELOG.md)

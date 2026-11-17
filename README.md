# Tixia Design System

A modern, accessible, and customizable design system built with React, TypeScript, and Tailwind CSS.

## Agent / AI context

- **[AGENTS.md](./AGENTS.md)** — agent entry (commands, structure, component rules, SemVer, checklist)
- **[CLAUDE.md](./CLAUDE.md)** — pointer for Claude Code and similar tools
- **`.cursor/rules/`** — Cursor project rules

## Features

- 🎨 Built with Tailwind CSS for styling  
- ⚛️ React components with TypeScript  
- 📚 Storybook for component documentation  
- 🎯 Atomic design principles  
- 🚀 Vite for fast development and building  
- 📦 Shared as a GitHub-based package for internal projects

---

## Installation (consuming apps)

Declare the package in the app’s `package.json` by GitHub tag (not the public npm registry), then install with pnpm:

```json
"@tixia/design-system": "github:TixiaOTA/design-system#v2.4.10"
```

```bash
pnpm install
```

> Replace `v2.4.10` with the latest release tag (see `CHANGELOG.md` / GitHub releases). Current package version in this repo: **`2.4.10`**.

### Peer dependencies

This design system supports both React 18 and React 19 in consuming projects:

- `react`: `^18.2.0 || ^19.0.0`
- `react-dom`: `^18.2.0 || ^19.0.0`

React and ReactDOM are peer dependencies and are not bundled in `dist`. The consuming app must provide a single deduped React instance.

---

## Usage

```tsx
import { Button } from '@tixia/design-system';

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

---

## Development

This repository uses [pnpm](https://pnpm.io/) for dependency management.

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Start Storybook:
   ```bash
   pnpm storybook
   ```
5. Verify compatibility:
   ```bash
   pnpm verify:react19
   pnpm verify:react18
   ```

---

## Project Structure

```
src/
  ├── components/
  │   ├── atoms/         # Basic building blocks
  │   ├── molecules/     # Groups of atoms
  │   ├── organisms/     # Complex components
  │   └── tokens/        # Design tokens
  ├── styles/            # Global styles and theme
  ├── utils/             # Utility functions
  └── index.ts           # Public package exports
```

---

## Building for Production

```bash
pnpm build
```

This will generate the following files in the `dist` directory:
- `tixia-design-system.umd.js` - UMD bundle
- `tixia-design-system.mjs` - ES module bundle
- `index.d.ts` - TypeScript type definitions

---

## 🔖 Version Management & Automated Releases

We use Semantic Versioning and an automated script (`release.ts`) to manage releases.

### 🛠 Bump Version & Generate Changelog

To release a new version, run one of the following:

```bash
pnpm release:patch   # Bugfixes, internal updates
pnpm release:minor   # New components, features (non-breaking)
pnpm release:major   # Breaking changes, large refactors
```

This will:

- Update the version in `package.json`
- Prepend commit history to `CHANGELOG.md`
- Create a Git tag (e.g. `v0.2.0`)
- Push to the `master` branch

> ⚠️ You must be on the `master` branch to run the release script.

---

### 🧠 Semantic Versioning Guide

| Command         | Example         | Use when...                             | Breaking? |
|----------------|------------------|------------------------------------------|-----------|
| `release:patch`| `0.1.3 → 0.1.4`  | Bug fixes, small internal changes        | ❌ No     |
| `release:minor`| `0.1.4 → 0.2.0`  | New components or features (safe)        | ❌ No     |
| `release:major`| `0.2.0 → 1.0.0`  | API or prop changes, removals            | ✅ Yes    |

---

### 🔼 Upgrading in Consuming Projects

CLI upgrades (`pnpm add` / `npm install` with a GitHub tag) are **unreliable** with our SSH/GitHub setup. **Bump manually:**

1. Edit the consumer `package.json` tag, e.g. `#v2.4.10` → `#v2.4.11`
2. Run `pnpm install`
3. Commit `package.json` and `pnpm-lock.yaml`

> Check `CHANGELOG.md` to review changes before upgrading.

### React migration policy

- React 19 is the recommended target for consuming projects.
- React 18 remains supported in `v2.x` for backward compatibility.
- React 18 support is planned to be removed in `v3.0.0` after all consuming projects complete migration.

---

## Contributing

1. Create a new branch
2. Make your changes
3. Add tests if necessary
4. Submit a pull request

---

## License

MIT

<div align="center">

# 🚀 Vue 3 + TypeScript Project Template

**A modern, production-ready Vue 3 starter template with TypeScript, Vite, Tailwind CSS v4, ESLint, Prettier, and DevContainer support.**

[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38bdf8.svg)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- 🎯 **Vue 3** - Composition API with `<script setup>` syntax
- 🔷 **TypeScript** - Full type safety and IntelliSense
- ⚡ **Vite** - Lightning-fast HMR and optimized builds
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧭 **Vue Router** - File-based routing architecture
- 📏 **ESLint 9** - Flat config with type-aware linting
- 💅 **Prettier** - Automatic code formatting
- 🐳 **DevContainer** - Consistent development environment across teams
- 🔄 **Auto Format** - Format and fix on save
- 📦 **pnpm** - Fast, efficient package management

## 🚀 Quick Start

### Option 1: Local Development

```bash
cd main
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Option 2: DevContainer (Recommended)

1. Open the project in **VSCode**
2. Open `vue-template.code-workspace` file
3. Click **"Reopen in Container"** when prompted
   - Or press `Cmd/Ctrl + Shift + P` → **"Dev Containers: Reopen in Container"**
4. Dev server will start automatically at `http://localhost:5173`

> **Note:** DevContainer provides a consistent, isolated development environment with all dependencies pre-configured.

## 📁 Project Structure

```
.
├── .devcontainer/              # DevContainer configuration
│   └── devcontainer.json       # Container setup and extensions
├── .vscode/                    # VSCode settings (for local development)
│   ├── settings.json           # Editor settings
│   └── extensions.json         # Recommended extensions
├── main/                       # Main Vue 3 application
│   ├── src/
│   │   ├── app/                # Application core
│   │   │   ├── index.html      # HTML entry point
│   │   │   └── providers/      # App-level providers (routers, etc.)
│   │   ├── pages/              # Page components
│   │   │   ├── home/
│   │   │   └── notfound/
│   │   ├── shared/             # Shared utilities and configs
│   │   │   └── router/         # Router configuration
│   │   ├── App.vue             # Root component
│   │   └── main.ts             # Application entry point
│   ├── eslint.config.mjs       # ESLint flat config
│   ├── prettier.config.mjs     # Prettier configuration
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite configuration
│   └── package.json            # Dependencies and scripts
└── vue-template.code-workspace # VSCode workspace configuration
```

## 🛠️ Available Scripts

Navigate to the `main` directory first: `cd main`

```bash
# Development
pnpm dev              # Start development server with HMR

# Build
pnpm build            # Build optimized production bundle
pnpm preview          # Preview production build locally

# Code Quality
pnpm lint             # Lint and auto-fix issues
pnpm lint:check       # Check for lint errors (no fixing)
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting (no fixing)

# Type Checking
pnpm type-check       # Run TypeScript type checking
```

## 🔧 Configuration

### ESLint

Uses **ESLint 9** with modern flat config format:

- ✅ TypeScript ESLint with type-aware linting via `projectService`
- ✅ Vue 3 recommended rules
- ✅ Prettier integration (no style conflicts)
- ✅ Auto-fix on save enabled

### Prettier

Consistent code formatting with:

- Single quotes for strings (except CSS files - uses double quotes for Tailwind v4)
- Trailing commas (ES5 style)
- 120 character print width
- 2 spaces indentation
- Tailwind CSS v4 class sorting via `prettier-plugin-tailwindcss`

### TypeScript

Strict type checking enabled with:

- `strict: true` - All strict type checks
- Path aliases configured (`@/` → `src/`)
- Vue 3 type definitions included

### Mock Service Worker (MSW)

This template can be extended with **MSW** for API mocking during development and testing.

Basic setup (run inside the `main` directory):

```bash
cd main
npx msw init ./public --save
```

This command will generate the MSW `mockServiceWorker.js` in the `public` folder and register it for use in your app.

### Tailwind CSS v4

This project uses **Tailwind CSS v4** with the new `@import` and `@source` directives.

#### ⚠️ Important: `@source` Directive Required

In `main/src/app/styles/main.css`:

```css
@import 'tailwindcss';
@source '../../../src';
```

**Why `@source` is critical:**
- ❌ **Without `@source`**: Tailwind only generates base styles and theme variables
- ❌ **No utility classes**: Classes like `text-3xl`, `font-bold`, `bg-blue-500` won't work
- ✅ **With `@source`**: Tailwind scans your source files and generates all needed utility classes

**Path breakdown:**
```
main/src/app/styles/main.css  (current file)
           ↓
       @source '../../../src'
           ↓
main/src/  (scans all .vue, .ts, .tsx files)
```

#### Prettier Configuration for CSS

Special override for CSS files to preserve double quotes (required for Tailwind v4):

```javascript
overrides: [
  {
    files: '*.css',
    options: {
      singleQuote: false,  // Keep double quotes in CSS
    },
  },
]
```

## 🐳 DevContainer

Pre-configured development container includes:

- **Node.js 20** LTS
- **pnpm** package manager
- All required VSCode extensions
- Auto port forwarding (`5173`, `4173`)
- Automatic `pnpm install` on container creation
- Git configuration preserved

## 💡 Development Tips

### Using the Workspace File

**Local Development:**
```bash
code vue-template.code-workspace
```

**DevContainer Development:**
- Open workspace file → VSCode automatically detects DevContainer
- Settings in workspace apply to both local and container environments

### Code Formatting & Linting

- **Automatic**: Code formats and fixes automatically on save
- **Manual Format**: Press `Shift + Alt + F` (Windows/Linux) or `Shift + Option + F` (Mac)
- **Command Line**: Run `pnpm lint` to lint the entire project

### Hot Module Replacement (HMR)

Vite provides instant HMR - your changes appear in the browser without full page reloads.

## 🌐 Port Configuration

| Port | Service | Description |
|------|---------|-------------|
| `5173` | Vite Dev Server | Development server with HMR |
| `4173` | Vite Preview | Preview production build locally |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

[MIT](LICENSE)

---

<div align="center">

**Built with ❤️ using Vue 3 and TypeScript**

</div>








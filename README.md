# Vue 3 + TypeScript Project Template

Vue 3 + TypeScript + Vite development template with ESLint, Prettier và DevContainer support.

## 🚀 Quick Start

### Option 1: Local Development

```bash
cd main
pnpm install
pnpm dev
```

### Option 2: DevContainer (Recommended)

1. Mở VSCode
2. Mở file `vue-template.code-workspace`
3. VSCode sẽ hiện thông báo "Reopen in Container" → Click để mở trong devcontainer
4. Hoặc: `Cmd + Shift + P` → "Dev Containers: Reopen in Container"

Dev server sẽ tự động chạy tại `http://localhost:5173`

## 📁 Project Structure

```
/
├── .devcontainer/              # DevContainer configuration
│   └── devcontainer.json
├── .vscode/                    # VSCode settings (cho local dev)
│   ├── settings.json
│   └── extensions.json
├── main/                       # Vue 3 project
│   ├── src/
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── components/
│   ├── eslint.config.mjs      # ESLint flat config
│   ├── prettier.config.mjs    # Prettier config
│   ├── tsconfig.json          # TypeScript config
│   ├── vite.config.ts         # Vite config
│   └── package.json
└── vue-template.code-workspace # VSCode workspace file
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server

# Build
pnpm build        # Build for production

# Lint & Format
pnpm lint         # Lint and auto-fix
pnpm lint:check   # Check lint errors only
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

## 🎯 Features

- ✅ **Vue 3** - Composition API with `<script setup>`
- ✅ **TypeScript** - Full type safety
- ✅ **Vite** - Lightning fast HMR
- ✅ **ESLint 9** - Flat config with type-aware linting
- ✅ **Prettier** - Code formatting with Tailwind plugin
- ✅ **DevContainer** - Consistent dev environment
- ✅ **Format on Save** - Auto-format & auto-fix

## 🔧 ESLint Configuration

ESLint sử dụng flat config format (ESLint 9+) với:
- TypeScript ESLint với type-aware linting (`projectService`)
- Vue 3 recommended rules
- Prettier integration (no conflicts)
- Auto-fix on save

## 🎨 Prettier Configuration

- Single quotes
- Trailing commas
- 120 print width
- 2 spaces indent
- Tailwind CSS plugin

## 📦 DevContainer

DevContainer đã được cấu hình với:
- Node.js 20
- Pnpm package manager
- All required VSCode extensions
- Auto port forwarding (5173, 4173)
- Auto `pnpm install` on container creation

## 💡 Tips

### Sử dụng Workspace File

**Local development:**
```bash
code vue-template.code-workspace
```

**DevContainer development:**
- Mở workspace file → VSCode tự động detect devcontainer
- Settings trong workspace sẽ apply cho cả local & container

### Format & Lint

- **Auto on save**: Code tự động format & fix khi save
- **Manual**: `Shift + Option + F` để format
- **Terminal**: `pnpm lint` để lint toàn bộ project

## 🌐 Ports

- `5173` - Vite dev server
- `4173` - Vite preview server

## 📝 License

MIT






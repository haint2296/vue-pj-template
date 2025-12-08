# Vue 3 + TypeScript + Vite + Tailwind CSS v4

Modern Vue 3 project template with TypeScript, Vite, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Vue 3** - Progressive JavaScript Framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js
- **ESLint + Prettier** - Code quality and formatting

## 📦 Installation

```bash
pnpm install
```

## 🛠️ Development

```bash
pnpm dev
```

## 🎨 Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4** with the new `@import` and `@source` directives.

### Important Notes

⚠️ **The `@source` directive is REQUIRED** for Tailwind CSS v4 to work properly.

In `src/app/styles/main.css`:

```css
@import 'tailwindcss';
@source '../../../src';
```

**Why `@source` is needed:**

- Without `@source`, Tailwind only generates base styles and theme variables
- It does NOT generate utility classes (like `text-3xl`, `font-bold`, `text-red-500`)
- The `@source` directive tells Tailwind which directories to scan for class usage

**Path explanation:**

- File location: `main/src/app/styles/main.css`
- `@source '../../../src'` points to `main/src/` directory
- This ensures Tailwind scans all Vue files in the `src/` directory

### Prettier Configuration

The project includes a special Prettier override for CSS files to preserve double quotes (required by Tailwind CSS v4 `@import` directive):

```javascript
overrides: [
  {
    files: '*.css',
    options: {
      singleQuote: false,
    },
  },
];
```

## 📚 Learn More

- [Vue 3 Script Setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Vue TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

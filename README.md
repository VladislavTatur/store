# Store App

A modern **store application** built with **React**, **Vite**, **TypeScript**, and **TailwindCSS**, featuring product listings, shared UI components, and client-side state management.

## Live Demo

[https://VladislavTatur.github.io/store](https://VladislavTatur.github.io/store)

---

## Features

- **Product catalog** with reusable components.
- **Navigation and routing** with React Router v7.
- **Shared UI library** with buttons, inputs, modals, and product cards.
- **State stored in localStorage** – all products, cart, and user data are saved directly in the browser without any backend API.
- **Deployment** via GitHub Pages.

---

### Getting Started

### Installation

```bash
git clone https://github.com/VladislavTatur/store.git
cd store
pnpm install
pnpm dev
```
The app will run on http://localhost:5173
by default.

### Tech Stack

- React 19 – frontend library
- TypeScript 5 – static typing
- React Router 7 – routing
- TailwindCSS 4 – styling
- Vite 7 – build tool

### Linting & Formatting

- ESLint with TypeScript, React, JSX accessibility plugins.
- Prettier for consistent code formatting.
- Husky & lint-staged for pre-commit hooks:
```
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```
> Code is automatically formatted and linted before commit.

### Project Structure

```
src/
├─ hooks/            # Custom hooks
├─ pages/            # App pages (Home, Products, etc.)
├─ shared/           # Shared assets, components, constants, utils
│  ├─ assets/        # Icons, images
│  ├─ components/    # Reusable UI components
│  ├─ constants/     # App constants (links, common values)
│  ├─ utils/         # Helper functions
├─ App.tsx           # Main app
├─ main.tsx          # Entry point
└─ index.css         # Global styles

```

## Deployment
The app is deployed to GitHub Pages:

```
pnpm build
pnpm deploy

```

### Notes

- All data is stored in localStorage, no backend API is used.
- This project was built without design mockups and without responsive layout requirements.
- Clearing localStorage will reset products and the shopping cart.
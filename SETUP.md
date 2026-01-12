# Personal Finance App - Vite + React + TypeScript Setup

This project has been set up with Vite, React, and TypeScript.

## Project Structure

```
├── public/
│   ├── assets/          # Images, fonts, and other static assets
│   └── data.json        # Finance data
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Features

- ✅ Vite for fast development and building
- ✅ React 18 with TypeScript
- ✅ React Router for navigation
- ✅ Type-safe data models
- ✅ Basic routing structure with 5 pages:
  - Overview
  - Transactions
  - Budgets
  - Pots
  - Recurring Bills

## Next Steps

- Implement the UI components for each page
- Add state management (consider Context API or Zustand)
- Implement CRUD operations for budgets and pots
- Add transaction filtering, sorting, and pagination
- Style the application according to the design

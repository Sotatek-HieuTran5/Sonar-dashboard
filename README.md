# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Dashboard Sample

This project is a sample dashboard built with React, TypeScript, and Vite, styled using the Logpresso Sonar5 Design System.

## Features
- Warning/alert box at the top
- Stat summary boxes
- Three charts (Pie, Bar, Column) using Highcharts
- Data grid with pagination
- Fully styled with Sonar5 Design System CSS

## Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Run the development server
```
npm run dev
```

### 3. Open in your browser
Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure
- `src/components/` - Reusable UI components (StatBox, WarningBox, ChartSection, DataGrid)
- `src/Dashboard.tsx` - Main dashboard layout
- `src/App.tsx` - App entry point
- `src/main.tsx` - Main render and CSS imports

## Styling
- Uses `style guide/sonar5-ui.css` for all UI components
- Uses Pretendard font via CDN

## Charting
- Uses [Highcharts](https://www.highcharts.com/) and [highcharts-react-official](https://github.com/highcharts/highcharts-react)

## License
MIT

# Strudel Local

A local Node.js project running Strudel REPL and editor with WAV export functionality.

## Features

- **Strudel REPL**: Live coding environment for pattern-based music
- **Strudel Editor**: Code editor with syntax highlighting and live evaluation
- **WAV Export**: Record your performances and export to WAV format

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:4321`

## Usage

1. **Play Music**: Edit the code in the editor and press `Ctrl+Enter` to evaluate
2. **Start Recording**: Click the "Start Recording" button
3. **Stop Recording**: Click "Stop" when finished
4. **Export WAV**: Click "Export WAV" to download your recording

## Building

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
.
├── index.html          # Main HTML file with Strudel editor
├── vite.config.js      # Vite configuration
├── package.json        # Node.js dependencies
└── dist/              # Production build output
```

## Dependencies

- `@strudel/repl` - Strudel REPL web component
- `@strudel/web` - Strudel web bundle
- `@strudel/core` - Core Strudel library
- `vite` - Build tool and dev server

## License

AGPL-3.0

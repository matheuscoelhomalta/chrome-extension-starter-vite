# Chrome Extension Template

This is a template for building Chrome extensions using Vite, React, and TypeScript. It provides a modern development environment with hot reloading and TypeScript support out of the box.

## Features

- Content script to interact with web pages
- Background script for event handling
- Popup with React and Tailwind CSS
- TypeScript support for type safety
- ESLint for code quality and consistency
- Vite for fast builds and Hot Module Replacement (HMR)
- Built-in support for React 19
- Full TypeScript configuration
- Tailwind CSS for utility-first styling

## Prerequisites

- Node.js 18.x or later (recommended)
- npm 9.x or later
- Chromium browser

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/matheuscoelhomalta/chrome-extension-starter-vite.git
   cd chrome-extension-starter-vite
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run build
   ```

4. Load the extension in Browser:
   - Open Browser and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `dist` folder from your project directory

## Development

- Start the development server:

  ```bash
  npm run dev
  ```

  This will watch for file changes and rebuild automatically.

- For continuous builds during development:
  ```bash
  npm run watch
  ```

## Project Structure

```
src/
├── manifest.ts        # Extension manifest configuration
├── background/        # Background script
├── content/          # Content script for page interaction
├── popup/            # Extension popup UI
└── settings/         # Extension settings page
```

## Customization

- **Manifest Configuration**:

  - Update `src/manifest.ts` to configure:
    - Extension name and description
    - Permissions
    - Content script matches
    - Icons and other metadata

- **Content Script**:

  - Modify `src/content/index.ts` to add webpage interactions
  - Default matches all URLs (`<all_urls>`), customize in manifest

- **Popup UI**:

  - Update `src/popup/App.tsx` to customize the popup interface
  - Style using Tailwind CSS utilities

- **Background Script**:
  - Add background logic in `src/background/index.ts`
  - Handle events, manage state, or perform background tasks

## Notes

- Content script matching can be configured in `manifest.ts` to target specific sites instead of `<all_urls>`
- Tailwind CSS 4.x is included by default but can be removed if not needed
- The project uses TypeScript 5.7+ for better development experience and type safety
- Hot Module Replacement (HMR) is enabled for faster development
- Using latest Vite 6.x for optimal build performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

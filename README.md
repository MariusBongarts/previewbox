# PreviewBox Link

This project includes a web component `<previewbox-link>` that fetches and displays link preview data from a specified URL. It is built using LitElement and TypeScript.

## About this Component

The `<previewbox-link>` component allows you to easily integrate link previews into your web applications. It fetches metadata such as the title, description, and thumbnail image from the provided URL, displaying it in a user-friendly format.

## Setup

To get started, install the necessary dependencies:

```bash
npm install
```

## Usage

To use the `<previewbox-link>` component, include it in your HTML and set the `url` attribute to the desired link:

```html
<previewbox-link url="https://web-highlights.com"></previewbox-link>
```

## Build

This component uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component, run:

```bash
npm run build
```

To watch files and rebuild when they are modified, use:

```bash
npm run build:watch
```

## Testing

This component uses [@web/test-runner](https://www.npmjs.com/package/@web/test-runner) for testing. You can run your tests with:

```bash
npm test
```

For local testing during development, use:

```bash
npm test:watch
```

## Development Server

To preview your component without additional build steps, use [@web/dev-server](https://www.npmjs.com/package/@web/dev-server):

```bash
npm run serve
```

You can view the development HTML file at http://localhost:8000/dev/index.html.

## Linting

Linting is provided by [ESLint](https://eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). To lint the project, run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. You can change the configuration in `.prettierrc.json`.

## Static Site

This project includes a simple website generated with [Eleventy](https://11ty.dev). To build the site, run:

```bash
npm run docs
```

To serve the site locally, use:

```bash
npm run docs:serve
```

To watch the site files and rebuild automatically, run:

```bash
npm run docs:gen:watch
```

The site will usually be served at http://localhost:8000.

## More Information

For more details on using and customizing the `<previewbox-link>` component, please refer to the documentation on [GitHub](https://github.com/your-repo-link).

```
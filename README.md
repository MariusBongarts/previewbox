# PreviewBox &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@mariusbongarts/previewbox.svg?style=flat)](https://www.npmjs.com/package/@mariusbongarts/previewbox) [![CI](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml/badge.svg)](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml)

## Overview

PreviewBox is a collection of components that fetch and display link preview data from a specified URL. It's a straightforward way to add a link thumbnail to any website. Built with Web Components using LitElement and TypeScript, it works seamlessly in any framework.

Find our official documentation at [previewbox.link/docs](https://previewbox.link/docs).

## Components

### `<previewbox-link>`

The `<previewbox-link>` component is a simple link card, similar to those found on websites like Medium or Twitter.

#### Preview

[![PreviewBox Link](https://raw.githubusercontent.com/MariusBongarts/previewbox/main/assets/img/link-preview.webp)](https://web-highlights.com/about)

### `<previewbox-article>`

Our `<previewbox-article>` component is perfect for showing a preview of an article. Simply pass the URL of the article and we will fetch the data for you.

#### Preview

<a href="https://web-highlights.com">
<img src="https://raw.githubusercontent.com/MariusBongarts/previewbox/main/assets/img/article-preview.webp" alt="PreviewBox Article" width="300px">
</a>

## Demo

Check out this [Codepen](https://codepen.io/marius2502/pen/eYqJMwp) for a live demo.

## Installation

### Using CDN

To use our components via CDN, load the following script on the client side. You can either load all components at once or modularly pick the ones you need:

```html
<!-- Load all components -->
<script src="https://cdn.jsdelivr.net/npm/@mariusbongarts/previewbox/dist/index.min.js"></script>

<!-- Or load specific components -->
<script src="https://cdn.jsdelivr.net/npm/@mariusbongarts/previewbox/dist/link/index.min.js"></script>
```

### Using Package Manager

If you are using a bundler, you can install the package via npm:

```bash
npm install @mariusbongarts/previewbox
```

```bash
yarn add @mariusbongarts/previewbox
```

```bash
pnpm add @mariusbongarts/previewbox
```

```bash
bun add @mariusbongarts/previewbox
```

Then, import the component in your JavaScript or TypeScript file:

```javascript
// Load all components
import '@mariusbongarts/previewbox/dist';

// Or load specific components
import '@mariusbongarts/previewbox/dist/link/index';
```

## Usage

To learn more about how to use our components, check out our [official documentation](https://previewbox.link/docs).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) file for details.

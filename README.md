# PreviewBox &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@mariusbongarts/previewbox.svg?style=flat)](https://www.npmjs.com/package/@mariusbongarts/previewbox) [![CI](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml/badge.svg)](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml)

## Overview

PreviewBox is a collection of components that fetch and display link preview data from a specified URL. It's a straightforward way to add a link thumbnail to any website. Built with Web Components using LitElement and TypeScript, it works seamlessly in any framework.

## Components

### `<previewbox-link>`

The `<previewbox-link>` component is a simple link card, similar to those found on websites like Medium or Twitter.

#### Preview

[![PreviewBox Link](https://raw.githubusercontent.com/MariusBongarts/previewbox/main/assets/img/link-preview.webp)](https://web-highlights.com/about)


## Installation

### Using CDN

To use this component via CDN, load the following script on the client side:

```html
<script src="https://cdn.jsdelivr.net/npm/@mariusbongarts/previewbox/dist/link/index.min.js"></script>
```

### Using Package Manager

If you are using a bundler, you can install the package via npm:

```bash
npm install @mariusbongarts/previewbox
```

Then, import the component in your JavaScript or TypeScript file:

```javascript
import '@mariusbongarts/previewbox/dist/link';
```

## Usage

To use the `<previewbox-link>` component, include it in your HTML and set the `href` attribute to the desired link:

```html
<previewbox-link href="https://web-highlights.com/about"></previewbox-link>
```

## Demo

Check out this [Codepen](https://codepen.io/marius2502/pen/eYqJMwp) for a live demo.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) file for details.
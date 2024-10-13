# PreviewBox &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@mariusbongarts/previewbox.svg?style=flat)](https://www.npmjs.com/package/@mariusbongarts/previewbox) [![CI](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml/badge.svg)](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml)

This project includes components that fetch and display link preview data from a specified URL. It's a straight-forward way to add link thumbnails to any website.

It's built with Web Components using LitElement and TypeScript enabling it to work in any framework.

Currently, there are the following components:

## `<previewbox-link>`

The `<previewbox-link>` component is a simple link card as you know it from websites like Medium or Twitter.

Here is how it looks:

![PreviewBox Link](https://raw.githubusercontent.com/MariusBongarts/previewbox/main/assets/img/link-preview.webp)


### Usage

To use this component, load the following script on the client side:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@mariusbongarts/previewbox/dist/link/index.min.js"></script>
```

To use the `<previewbox-link>` component, include it in your HTML and set the `url` attribute to the desired link:

```html
<previewbox-link url="https://web-highlights.com/about"></previewbox-link>
```

### Demo

Check out this [Codepen](https://codepen.io/marius2502/pen/eYqJMwp) for a live demo.

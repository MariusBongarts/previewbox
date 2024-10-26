# PreviewBox &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@mariusbongarts/previewbox.svg?style=flat)](https://www.npmjs.com/package/@mariusbongarts/previewbox) [![CI](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml/badge.svg)](https://github.com/MariusBongarts/previewbox/actions/workflows/main.yml)

## Overview

PreviewBox is a collection of components that fetch and display link preview data from a specified URL. It's a straightforward way to add a link thumbnail to any website. Built with Web Components using LitElement and TypeScript, it works seamlessly in any framework.

Find our official documentation at [previewbox.link/docs](https://previewbox.link/docs).

## Components

### `<previewbox-link>`

The `<previewbox-link>` component is a simple link card, similar to those found on websites like Medium or Twitter.

#### Preview

[![PreviewBox Link](https://raw.githubusercontent.com/MariusBongarts/previewbox/main/assets/img/link-preview.webp)](https://web-highlights.com/about)

## Demo

Check out this [Codepen](https://codepen.io/marius2502/pen/eYqJMwp) for a live demo.

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

To use the `<previewbox-link>` component, you can either set the `href` attribute to fetch link preview data automatically or manually set the attributes for a custom preview.

### Using `href` Attribute

Include the component in your HTML and set the `href` attribute to the desired link:

```html
<previewbox-link href="https://web-highlights.com/about"></previewbox-link>
```

> [!IMPORTANT]
> To retrieve Open Graph data for link previews, you'll need a server to process the requests. Right now, there are no limits on how many API calls you can make. However, as more users join, we may set limits.

### Manually Setting Attributes

You can also manually set the attributes to customize the link preview:

```html
<previewbox-link
  url="https://web-highlights.com/about"
  date="2024-01-01"
  title="About Me | Creating Web Highlights | My Story & Mission"
  description="Hi, I'm Marius, the creator of Web Highlights. Learn how I build this tool since 2019, my mission to organize digital info, and why I stand behind every feature."
  author="Marius Bongarts"
  imageUrl="https://web-highlights.com/images/about-me.png"
  imageAlt="Me at the beach in Portugal"
  faviconUrl="https://web-highlights.com/favicon.ico"
  target="_self"
  rel="nofollow"
></previewbox-link>
```

This allows you to have full control over the content displayed in the link preview.

You can find all properties in the [API documentation](https://mariusbongarts.github.io/previewbox/api/).

### CSS Customization

The `<previewbox-link>` component supports CSS customization through custom properties. You can define these properties in your stylesheet or directly in the HTML using the `style` attribute. Here's an example:

```html
<previewbox-link
  style="--background-color: #f0f0f0; --text-color: #333;"
  href="https://web-highlights.com/about"
></previewbox-link>
```

In your CSS file, you can define these properties globally or for specific elements:

```css
:root {
  --background-color: #f0f0f0;
  --text-color: #333;
}

previewbox-link {
  --border-color: #ddd;
  --metadata-color: rgba(0, 0, 0, 0.5);
}
```

### CSS Custom Properties

The `<previewbox-link>` component supports the following CSS custom properties for styling:

| Property Name                    | Description                            | Default Value              |
| -------------------------------- | -------------------------------------- | -------------------------- |
| `--pb-background-color`             | Background color of the link card      | `#ffffff`                  |
| `--pb-dark-background-color`        | Background color in dark mode          | `#121212`                  |
| `--pb-text-color`                   | Text color of the link card            | `#000000`                  |
| `--pb-dark-text-color`              | Text color in dark mode                | `#e0e0e0`                  |
| `--pb-border-color`                 | Border color of the link card          | `rgb(124 139 154 / 25%)`   |
| `--pb-dark-border-color`            | Border color in dark mode              | `#8080803a`                |
| `--pb-metadata-color`               | Color of the metadata text             | `rgba(0, 0, 0, 0.7)`       |
| `--pb-dark-metadata-color`          | Metadata text color in dark mode       | `rgba(255, 255, 255, 0.7)` |
| `--pb-skeleton-color`               | Color of the loading skeleton          | `rgb(229, 231, 235)`       |
| `--pb-dark-skeleton-color`          | Skeleton color in dark mode            | `rgb(55, 65, 81)`          |
| `--pb-fallback-img-color`           | Color of the fallback image            | `hsl(220, 13%, 80%)`       |
| `--pb-dark-fallback-img-color`      | Fallback image color in dark mode      | `hsl(220, 13%, 40%)`       |
| `--pb-fallback-img-background`      | Background of the fallback image       | `rgb(229, 231, 235)`       |
| `--pb-dark-fallback-img-background` | Fallback image background in dark mode | `rgb(55, 65, 81)`          |
| `--pb-favicon-size`                 | Size of the favicon image              | `20px`                     |

These properties allow you to customize the appearance of the link preview to match your website's design.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MariusBongarts/previewbox/blob/main/LICENSE) file for details.

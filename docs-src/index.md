---
layout: page.11ty.cjs
title: <previewbox-link> ⌲ Home
---

# &lt;previewbox-link>

`<previewbox-link>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<previewbox-link>` is just an HTML element. You can it anywhere you can use HTML!

```html
<previewbox-link></previewbox-link>
```

  </div>
  <div>

<previewbox-link></previewbox-link>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<previewbox-link>` can be configured with attributed in plain HTML.

```html
<previewbox-link name="HTML"></previewbox-link>
```

  </div>
  <div>

<previewbox-link name="HTML"></previewbox-link>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<previewbox-link>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;previewbox-link&gt;</h2>
    <previewbox-link .name=${name}></previewbox-link>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;previewbox-link&gt;</h2>
<previewbox-link name="lit-html"></previewbox-link>

  </div>
</section>

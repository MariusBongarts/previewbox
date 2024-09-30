/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import '../link.js';
import {PreviewBoxLinkElement} from '../link.js';
import { wait } from './test-utils.js';

suite('previewbox-link', () => {
  test('is defined', () => {
    const el = document.createElement('previewbox-link');
    assert.instanceOf(el, PreviewBoxLinkElement);
  });

  test('renders a loading skeleton', async () => {
    const el = await fixture(
      html`<previewbox-link url="https://web-highlights.com/"></previewbox-link>`
    );
    const loading = el.shadowRoot!.querySelector('[data-testid="loading"]')!;
    assert.equal(loading.textContent, 'Loading...');
  });
  test('renders a link with the url', async () => {
    const el = await fixture(
      html`<previewbox-link url="https://web-highlights.com/"></previewbox-link>`
    );
    await wait(2000);
    const link = el.shadowRoot!.querySelector('a')!;
    const img = el.shadowRoot!.querySelector('img')!;
    assert.equal(link.href, 'https://web-highlights.com/');
    assert.equal(img.src, 'https://web-highlights.com/images/wh-thumbnail.png');
  });
});

test('styling applied', async () => {
  const el = (await fixture(
    html`<previewbox-link></previewbox-link>`
  )) as PreviewBoxLinkElement;
  await el.updateComplete;
  assert.equal(getComputedStyle(el).fontFamily, 'Roboto');
});

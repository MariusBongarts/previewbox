/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { fixture, assert, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import '../link.js';
import { PreviewBoxLinkElement } from '../link.js';
import { extractFaviconElement, extractImageElement, wait, } from './test-utils.js';
import { byTestId, TEST_IDS } from '../lib/util/test-helper.js';
import { urlToOrigin } from '../lib/util/url-helper.js';
suite('previewbox-link', () => {
    test('is defined', () => {
        const el = document.createElement('previewbox-link');
        assert.instanceOf(el, PreviewBoxLinkElement);
    });
    test('it applies styles', async () => {
        const el = (await fixture(html `<previewbox-link
        href="https://web-highlights.com/"
      ></previewbox-link>`));
        await el.updateComplete;
        assert.equal(getComputedStyle(el).display, 'block');
    });
    test('renders a link preview with fetched meta data from an externalurl', async () => {
        const el = await fixture(html `<previewbox-link
        href="https://web-highlights.com/"
      ></previewbox-link>`);
        await wait(1500);
        const link = el.shadowRoot.querySelector(byTestId(TEST_IDS.ANCHOR_ELEMENT));
        const img = extractImageElement(el).shadowRoot.querySelector(byTestId(TEST_IDS.IMAGE));
        const favicon = extractFaviconElement(el).shadowRoot?.querySelector('img');
        assert.equal(link.href, 'https://web-highlights.com/');
        assert.equal(img.src, 'https://web-highlights.com/images/wh-thumbnail.png');
        assert.equal(favicon.src, 'https://web-highlights.com/favicon.ico');
    });
    test('renders a link preview with manually set data', async () => {
        const url = 'https://example.org/test';
        const date = '2024-01-01';
        const title = 'Manually set title';
        const description = 'Manually set description';
        const author = 'Jon Doe';
        const imageUrl = 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2';
        const imageAlt = 'Manually set image alt';
        const faviconUrl = 'https://web-highlights.com/favicon.ico';
        const el = await fixture(html `<previewbox-link
        url=${url}
        date=${date}
        title=${title}
        description=${description}
        author=${author}
        imageUrl=${imageUrl}
        imageAlt=${imageAlt}
        faviconUrl=${faviconUrl}
        target="_self"
        rel="nofollow"
      ></previewbox-link>`);
        const linkElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.ANCHOR_ELEMENT));
        const img = extractImageElement(el).shadowRoot.querySelector(byTestId(TEST_IDS.IMAGE));
        const favicon = extractFaviconElement(el).shadowRoot?.querySelector('img');
        const titleElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.TITLE));
        const descriptionElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.DESCRIPTION));
        const authorElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.AUTHOR));
        const originElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.ORIGIN));
        assert.equal(linkElement.href, url);
        assert.equal(linkElement.target, '_self');
        assert.equal(linkElement.rel, 'nofollow');
        assert.equal(img.src, imageUrl);
        assert.equal(favicon.src, faviconUrl);
        assert.equal(favicon.alt, `Favicon`);
        assert.include(titleElement.textContent, title);
        assert.include(descriptionElement.textContent, description);
        assert.equal(authorElement.textContent, author);
        assert.equal(originElement.textContent, urlToOrigin(url));
    });
    test('throws an error if no href or url is provided', async () => {
        try {
            (await fixture(html `<previewbox-link></previewbox-link>`));
            assert.equal(true, false, 'Should not reach this as an error should be thrown');
        }
        catch (e) {
            assert.instanceOf(e, Error);
        }
    });
    test('renders loading skeletons', async () => {
        const el = await fixture(html `<previewbox-link
        href="https://web-highlights.com/"
      ></previewbox-link>`);
        expect(el.shadowRoot.querySelector(byTestId(TEST_IDS.TITLE_SKELETON))).to
            .exist;
        expect(el.shadowRoot.querySelector(byTestId(TEST_IDS.FAVICON_SKELETON)))
            .to.exist;
        expect(extractImageElement(el).shadowRoot.querySelector(byTestId(TEST_IDS.IMAGE_SKELETON))).to.exist;
    });
    test('renders a fallback image and favicon if the image and favicon URLs are not correct', async () => {
        const url = 'https://example.org/test';
        const date = '2024-01-01';
        const title = 'Manually set title';
        const description = 'Manually set description';
        const author = 'Jon Doe';
        const imageUrl = 'https://invalidimage.png';
        const imageAlt = 'Manually set image alt';
        const faviconUrl = 'https://invalidfavicon.ico';
        const el = await fixture(html `<previewbox-link
        url=${url}
        date=${date}
        title=${title}
        description=${description}
        author=${author}
        imageUrl=${imageUrl}
        imageAlt=${imageAlt}
        faviconUrl=${faviconUrl}
        target="_self"
        rel="nofollow"
      ></previewbox-link>`);
        await wait(500);
        const titleElement = el.shadowRoot.querySelector(byTestId(TEST_IDS.TITLE));
        assert.include(titleElement.textContent, title);
        expect(extractImageElement(el).shadowRoot.querySelector(byTestId(TEST_IDS.IMAGE_FALLBACK))).to.exist;
        expect(extractFaviconElement(el)?.shadowRoot.querySelector(byTestId(TEST_IDS.FAVICON_FALLBACK))).to.exist;
    });
});
//# sourceMappingURL=link_test.js.map
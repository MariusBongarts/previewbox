import {fixture, assert, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import '../article.js';
import {PreviewBoxArticleElement} from '../article.js';
import {extractImageElement, wait} from './test-utils.js';
import {byTestId, TEST_IDS} from '../lib/util/test-helper.js';

suite('previewbox-article', () => {
  test('is defined', () => {
    const el = document.createElement('previewbox-article');
    assert.instanceOf(el, PreviewBoxArticleElement);
  });

  test('it applies styles', async () => {
    const el = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).display, 'block');
  });

  test('renders a link preview with fetched meta data from an externalurl', async () => {
    const el = await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
      ></previewbox-article>`
    );
    await wait(1500);
    const link = el.shadowRoot!.querySelector(
      byTestId(TEST_IDS.ANCHOR_ELEMENT)
    )! as HTMLAnchorElement;
    const img = extractImageElement(el)!.shadowRoot!.querySelector(
      byTestId(TEST_IDS.IMAGE)
    )! as HTMLImageElement;
    assert.equal(link.href, 'https://web-highlights.com/');
    assert.equal(img.src, 'https://web-highlights.com/images/wh-thumbnail.png');
  });
  test('renders a link preview with manually set data', async () => {
    const url = 'https://example.org/test';
    const title = 'Manually set title';
    const description = 'Manually set description';
    const imageUrl =
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2';
    const imageAlt = 'Manually set image alt';

    const el = await fixture(
      html`<previewbox-article
        url=${url}
        title=${title}
        description=${description}
        imageUrl=${imageUrl}
        imageAlt=${imageAlt}
        target="_self"
        rel="nofollow"
      ></previewbox-article>`
    );
    const linkElement = el.shadowRoot!.querySelector(
      byTestId(TEST_IDS.ANCHOR_ELEMENT)
    )! as HTMLAnchorElement;
    const img = extractImageElement(el)!.shadowRoot!.querySelector(
      byTestId(TEST_IDS.IMAGE)
    )! as HTMLImageElement;
    const titleElement = el.shadowRoot!.querySelector(
      byTestId(TEST_IDS.TITLE)
    )! as HTMLDivElement;
    const descriptionElement = el.shadowRoot!.querySelector(
      byTestId(TEST_IDS.DESCRIPTION)
    )! as HTMLDivElement;
    assert.equal(linkElement.href, url);
    assert.equal(linkElement.target, '_self');
    assert.equal(linkElement.rel, 'nofollow');
    assert.equal(img.src, imageUrl);
    assert.include(titleElement.textContent, title);
    assert.include(descriptionElement.textContent, description);
  });

  test('throws an error if no href or url is provided', async () => {
    try {
      (await fixture(
        html`<previewbox-article></previewbox-article>`
      )) as PreviewBoxArticleElement;
      assert.equal(
        true,
        false,
        'Should not reach this as an error should be thrown'
      );
    } catch (e) {
      assert.instanceOf(e, Error);
    }
  });

  test('renders loading skeletons', async () => {
    const el = await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
      ></previewbox-article>`
    );

    expect(el.shadowRoot!.querySelector(byTestId(TEST_IDS.TITLE_SKELETON))!).to
      .exist;
    expect(
      extractImageElement(el)!.shadowRoot!.querySelector(
        byTestId(TEST_IDS.IMAGE_SKELETON)
      )!
    ).to.exist;
  });

  test('renders a fallback image and favicon if the image and favicon URLs are not correct', async () => {
    const url = 'https://example.org/test';
    const date = '2024-01-01';
    const title = 'Manually set title';
    const description = 'Manually set description';
    const author = 'Jon Doe';
    const imageUrl = 'https://invalidimage.png';
    const imageAlt = 'Manually set image alt';

    const el = await fixture(
      html`<previewbox-article
        url=${url}
        date=${date}
        title=${title}
        description=${description}
        author=${author}
        imageUrl=${imageUrl}
        imageAlt=${imageAlt}
        target="_self"
        rel="nofollow"
      ></previewbox-article>`
    );
    await wait(500);

    const titleElement = el.shadowRoot!.querySelector(
      byTestId(TEST_IDS.TITLE)
    )! as HTMLDivElement;
    assert.include(titleElement.textContent, title);
    expect(
      extractImageElement(el)!.shadowRoot!.querySelector(
        byTestId(TEST_IDS.IMAGE_FALLBACK)
      )!
    ).to.exist;
  });

  test('shows/hides powered by', async () => {
    const withPoweredByElement = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await withPoweredByElement.updateComplete;
    expect(
      withPoweredByElement.shadowRoot!.querySelector(
        byTestId(TEST_IDS.POWERED_BY)
      )!
    ).to.exist;

    const withoutPoweredByElement = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
        hidePoweredBy="true"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await withoutPoweredByElement.updateComplete;
    expect(
      withoutPoweredByElement.shadowRoot!.querySelector(
        byTestId(TEST_IDS.POWERED_BY)
      )!
    ).not.to.exist;
  });

  test('renders a Read More button with default text', async () => {
    const el = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await el.updateComplete;
    assert.include(
      el.shadowRoot!.querySelector(byTestId(TEST_IDS.READ_MORE_BUTTON))!
        .textContent,
      'Read more'
    );
  });

  test('renders a Read More button with custom text', async () => {
    const el = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
        readMoreBtnText="Open Article"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await el.updateComplete;
    assert.include(
      el.shadowRoot!.querySelector(byTestId(TEST_IDS.READ_MORE_BUTTON))!
        .textContent,
      'Open Article'
    );
  });

  test('hides the Read More button', async () => {
    const el = (await fixture(
      html`<previewbox-article
        href="https://web-highlights.com/"
        hideReadMoreBtn="true"
      ></previewbox-article>`
    )) as PreviewBoxArticleElement;
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector(byTestId(TEST_IDS.READ_MORE_BUTTON))!)
      .not.to.exist;
  });
});

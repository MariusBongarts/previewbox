import { OpenGraphSuccessResult } from '../models/open-graph-scraper-result';
import {LinkPreviewImage, LinkPreviewData} from '../../../domain/models/link-preview-data';

export function resolveFaviconUrl(websiteUrl: string, favicon?: string) {
  if (!favicon) {
    return undefined;
  }

  // Check if the favicon is a valid URL, if so, return it directly
  try {
    const faviconUrl = new URL(favicon);
    return faviconUrl.href;
  } catch (error) {
    try {
      const url = new URL(websiteUrl);
      // Split the file path using forward slash or backslash as a delimiter.
      // E.g. '../../../favicon-32x32.png' -> 'favicon-32x32.png'
      const pathParts = favicon.split(/[\\/]/);

      // Get the last part (file name)
      const fileName = pathParts[pathParts.length - 1];
      const faviconUrl = `${url.origin}/${fileName}`;
      return faviconUrl;
    } catch (error) {
      return undefined;
    }
  }
}

export function mapOpenGraphResultToMetaData(
  result: OpenGraphSuccessResult,
  originUrl: string
): LinkPreviewData {
  return {
    title: result.ogTitle || result.dcTitle || null,
    type: result.ogType || result.dcType || null,
    description: result.ogDescription || result.dcDescription || null,
    author: result.author || null,
    url: result.ogUrl ?? originUrl,
    image: mapImage(result),
    favicon: resolveFaviconUrl(originUrl, result.favicon) || null,
    date: result.ogDate || result.dcDate || null,
    origin: originUrl,
  };
}

function mapImage(result: OpenGraphSuccessResult): LinkPreviewData['image'] {
  const alt =
    (result.twitterImage as {alt?: string})?.alt ??
    result.twitterImage?.[0]?.alt ??
    `Thumbnail image`;
  const fallbackImage: LinkPreviewImage = {
    url: '',
    type: '',
    height: 0,
    width: 0,
    alt,
  };
  let image = result.ogImage?.[0];

  if (!image) {
    return fallbackImage;
  }

  const imageIsOpenGraphImage = (image: any): image is LinkPreviewImage => {
    return (
      typeof image === 'object' &&
      ['url', 'type', 'height', 'width'].every((key) =>
        (image as object).hasOwnProperty(key)
      )
    );
  };

  if (imageIsOpenGraphImage(image)) {
    return {
      ...fallbackImage,
      ...image,
    };
  }

  return {
    ...fallbackImage,
    url: typeof image === 'string' ? image : '',
  };
}

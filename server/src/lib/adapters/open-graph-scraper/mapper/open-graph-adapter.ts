import {OpenGraphSuccessResult} from '../models/open-graph-scraper-result';
import {LinkPreviewData} from '../../../domain/models/link-preview-data';

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
    description: result.ogDescription || result.dcDescription || null,
    author: result.author || null,
    url: result.ogUrl ?? originUrl,
    imageUrl: resolveImage(result)?.url ?? null,
    imageAlt: resolveImage(result)?.alt ?? null,
    favicon: resolveFaviconUrl(originUrl, result.favicon) || null,
    date: result.ogDate || result.dcDate || null,
    origin: originUrl,
  };
}

function resolveImage(result: OpenGraphSuccessResult) {
  return result.ogImage?.[0] ?? result.twitterImage?.[0];
}

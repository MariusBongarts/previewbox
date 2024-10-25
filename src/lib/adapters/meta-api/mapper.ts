import {OpenGraphMetaData} from '../../../types/api-types';
import {LinkPreviewData} from '../../domain/types';
import {urlToOrigin} from '../../util/url-helper';

export const mapLinkMetaDataToLinkPreviewData = (
  data: OpenGraphMetaData
): LinkPreviewData => {
  return {
    title: data.title ?? null,
    imageUrl: data.image?.url ?? null,
    imageAlt: data.image?.alt ?? null,
    description: data.description ?? null,
    url: data.url ?? null,
    author: data.author ?? null,
    favicon: data.favicon ?? null,
    date: data.date ?? null,
    origin: urlToOrigin(data.url) ?? null,
  };
};

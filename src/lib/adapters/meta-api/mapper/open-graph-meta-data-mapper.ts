import { LinkPreviewData } from "../../../domain/models/link-preview-data";
import { OpenGraphMetaData } from "../model/open-graph-meta-data";


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
      origin: data.origin ?? null,
    };
  };
  
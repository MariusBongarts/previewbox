import {LinkPreviewData} from '../../domain/types';
import {mapLinkMetaDataToLinkPreviewData} from './mapper';

export const fetchLinkPreviewData = async (
  url: string
): Promise<LinkPreviewData> => {
  const response = await fetch(
    `https://web-highlights.herokuapp.com/meta/${encodeURIComponent(url)}`
  );
  const linkMetaData = await response.json();
  return mapLinkMetaDataToLinkPreviewData(linkMetaData);
};

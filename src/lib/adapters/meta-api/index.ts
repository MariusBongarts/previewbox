import {
  ApiError,
  ApiResponse,
  OpenGraphMetaData,
} from '../../../types/api-types';
import {LinkPreviewData} from '../../domain/types';
import {mapLinkMetaDataToLinkPreviewData as mapResponseToLinkPreviewData} from './mapper';

export const fetchLinkPreviewData = async (
  url: string,
  options: {
    apiUrl: string;
  }
): Promise<ApiResponse<LinkPreviewData>> => {
  try {
    const response = await fetch(
      `${options.apiUrl}?url=${encodeURIComponent(url)}`,
      {
        headers: {
          origin: window.location.origin,
        },
      }
    );
    if (!response.ok) {
      if (response.status === 429) {
        return {error: ApiError.API_LIMIT_REACHED};
      }
      return {error: ApiError.UNKNOWN_ERROR};
    }
    const linkMetaData = (await response.json()) as OpenGraphMetaData;
    return {data: mapResponseToLinkPreviewData(linkMetaData)};
  } catch (error) {
    return {error: ApiError.UNKNOWN_ERROR};
  }
};

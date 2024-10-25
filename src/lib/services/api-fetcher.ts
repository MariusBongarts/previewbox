import {mapLinkMetaDataToLinkPreviewData} from '../adapters/meta-api/mapper/open-graph-meta-data-mapper';
import {OpenGraphMetaData} from '../adapters/meta-api/model/open-graph-meta-data';
import {LinkPreviewData} from '../domain/models/link-preview-data';

export enum ApiError {
  API_LIMIT_REACHED = 'API_LIMIT_REACHED',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

type ApiSuccessResponse<T> = {
  data: T;
};
type ApiErrorResponse = {
  error: ApiError;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return 'data' in response;
}

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
    const openGraphMetaData = (await response.json()) as OpenGraphMetaData;
    return {data: mapLinkMetaDataToLinkPreviewData(openGraphMetaData)};
  } catch (error) {
    return {error: ApiError.UNKNOWN_ERROR};
  }
};

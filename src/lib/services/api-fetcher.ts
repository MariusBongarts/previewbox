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

class ApiFetcher {
  public async fetchLinkPreviewData(
    url: string,
    options: {
      apiUrl: string;
    }
  ): Promise<ApiResponse<LinkPreviewData>> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.set('url', url);
      const response = await fetch(
        `${options.apiUrl}?${searchParams.toString()}`,
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
      const linkPreviewData = (await response.json()) as LinkPreviewData;
      return {data: linkPreviewData};
    } catch (error) {
      return {error: ApiError.UNKNOWN_ERROR};
    }
  }
}

export const apiFetcher = new ApiFetcher();
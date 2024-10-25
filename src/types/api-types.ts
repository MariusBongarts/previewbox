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

export interface OpenGraphImage {
  height?: number;
  type?: string;
  url: string;
  width?: number;
  alt?: string;
}

export interface OpenGraphMetaData {
  title?: string;
  image?: OpenGraphImage;
  description?: string;
  url?: string;
  type?: string;
  author?: string;
  favicon?: string;
  date?: string;
}

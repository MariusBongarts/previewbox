import { LinkPreviewData } from '../domain/models/link-preview-data';
export declare enum ApiError {
    API_LIMIT_REACHED = "API_LIMIT_REACHED",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
type ApiSuccessResponse<T> = {
    data: T;
};
type ApiErrorResponse = {
    error: ApiError;
};
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
export declare function isSuccessResponse<T>(response: ApiResponse<T>): response is ApiSuccessResponse<T>;
export declare const fetchLinkPreviewData: (url: string, options: {
    apiUrl: string;
}) => Promise<ApiResponse<LinkPreviewData>>;
export {};
//# sourceMappingURL=api-fetcher.d.ts.map
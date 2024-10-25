import { mapLinkMetaDataToLinkPreviewData } from '../adapters/meta-api/mapper/open-graph-meta-data-mapper';
export var ApiError;
(function (ApiError) {
    ApiError["API_LIMIT_REACHED"] = "API_LIMIT_REACHED";
    ApiError["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(ApiError || (ApiError = {}));
export function isSuccessResponse(response) {
    return 'data' in response;
}
export const fetchLinkPreviewData = async (url, options) => {
    try {
        const response = await fetch(`${options.apiUrl}?url=${encodeURIComponent(url)}`, {
            headers: {
                origin: window.location.origin,
            },
        });
        if (!response.ok) {
            if (response.status === 429) {
                return { error: ApiError.API_LIMIT_REACHED };
            }
            return { error: ApiError.UNKNOWN_ERROR };
        }
        const openGraphMetaData = (await response.json());
        return { data: mapLinkMetaDataToLinkPreviewData(openGraphMetaData) };
    }
    catch (error) {
        return { error: ApiError.UNKNOWN_ERROR };
    }
};
//# sourceMappingURL=api-fetcher.js.map
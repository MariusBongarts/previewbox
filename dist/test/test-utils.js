export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const extractFaviconElement = (el) => {
    return el.shadowRoot?.querySelector('previewbox-favicon');
};
export const extractImageElement = (el) => {
    return el.shadowRoot?.querySelector('previewbox-image');
};
//# sourceMappingURL=test-utils.js.map
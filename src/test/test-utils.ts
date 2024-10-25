export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const extractFaviconElement = (el: Element) => {
  return el.shadowRoot?.querySelector('previewbox-favicon');
};
export const extractImageElement = (el: Element) => {
  return el.shadowRoot?.querySelector('previewbox-image');
};
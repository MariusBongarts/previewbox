export const customElementIsRegistered = (name: string) => {
  const isRegistered =
    !!customElements.get(name) ||
    document.createElement(name).constructor !== HTMLElement;
  return isRegistered;
};


export const definePreviewBoxCustomElement = (
  name: string,
  element: CustomElementConstructor
) => {
  if (!customElementIsRegistered(name)) {
    customElements.define(name, element);
  }
};

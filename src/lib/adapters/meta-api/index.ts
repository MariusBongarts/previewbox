import { LinkPreviewData } from "../../domain/types";

export const fetchLinkPreviewData = async (url: string): Promise<LinkPreviewData> => {
  const response = await fetch(`https://web-highlights.herokuapp.com/meta/${encodeURIComponent(url)}`);
  return response.json();
};

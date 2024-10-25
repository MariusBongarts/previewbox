export interface LinkPreviewImage {
  height?: number;
  type?: string;
  url: string;
  width?: number;
  alt?: string;
}

export interface LinkPreviewData {
  url: string | null;
  title?: string | null;
  description?: string | null;
  image?: LinkPreviewImage;
  author?: string | null;
  favicon?: string | null;
  date?: string | null;
  origin?: string | null;
  type?: string | null;
}

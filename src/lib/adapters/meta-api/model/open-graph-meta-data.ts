export interface OpenGraphImage {
  height?: number;
  type?: string;
  url: string;
  width?: number;
  alt?: string;
}

// Align with /server/src/lib/domain/models/link-preview-data.ts
export interface OpenGraphMetaData {
  url: string | null;
  title?: string | null;
  description?: string | null;
  image?: OpenGraphImage;
  author?: string | null;
  favicon?: string | null;
  date?: string | null;
  origin?: string | null;
  type?: string | null;
}

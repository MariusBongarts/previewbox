interface OpenGraphImage {
    // Height and Width can be optional, see doc on
    // https://github.com/jshemas/openGraphScraper/blob/master/lib/media.js
    height?: string;
    type: string;
    url: string;
    width?: string;
}

export interface LinkMetaData {
  title?: string;
  image?: OpenGraphImage & {alt?: string};
  description?: string;
  url?: string;
  type?: string;
  author?: string;
  favicon?: string;
  date?: string;
}

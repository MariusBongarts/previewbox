import NodeCache from 'node-cache';
import ogs from 'open-graph-scraper';
import {mapOpenGraphResultToMetaData} from '../lib/adapters/open-graph-scraper/mapper/open-graph-adapter';
import {LinkPreviewData} from '../lib/domain/models/link-preview-data';
import { logger } from './logger.service';

export class MetaService {
  private cache = new NodeCache({stdTTL: 60 * 60});

  private readFromCache(url: string): LinkPreviewData | undefined {
    const resultFromCache = this.cache.get<LinkPreviewData>(url);
    if (resultFromCache) {
      logger.log(`[CACHE] - Read data for url: ${url}`);
    }
    return resultFromCache;
  }

  private invalidateCache(url: string): void {
    this.cache.del(url);
  }

  public async getOpenGraphData(
    url: string,
    {invalidateCache = false} = {}
  ): Promise<LinkPreviewData> {
    try {
      if (invalidateCache) {
        this.invalidateCache(url);
      }
      const resultFromCache = this.readFromCache(url);
      if (resultFromCache) {
        return resultFromCache;
      }
      const {error, result} = await ogs({url});

      if (error || !result?.success) {
        console.error(`${url}: ${result?.error}`);
        return {url};
      }

      const metaData: LinkPreviewData = mapOpenGraphResultToMetaData(
        result,
        url
      );
      logger.log(`Fetched data for url: ${url}`);
      this.cache.set(url, metaData);
      return metaData;
    } catch (error) {
      return {url};
    }
  }
}

import express, {Request, Response} from 'express';
import {MetaService} from '../services/meta.service';
import { isValidUrl } from '../lib/util';

const router = express.Router();

const metaService = new MetaService();

export const getMetaData = async (req: Request, res: Response) => {
  const invalidateCache = !!req.query.invalidateCache;
  const url = req.query.url as string;
  if (!isValidUrl(url)) {
    res.status(400);
  }
  const metaData = await metaService.getOpenGraphData(url, {invalidateCache});
  res.json(metaData);
};

router.get('/api/v1/meta', getMetaData);

export default router;

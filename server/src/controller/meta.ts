import express, { Request, Response } from 'express';
import { MetaService } from '../services/meta.service';

const router = express.Router();

const metaService = new MetaService();

export const getMetaData = async (req: Request, res: Response) => {
  const url = req.query.url as string;
  const metaData = await metaService.getOpenGraphData(url);
  res.json(metaData);
};

router.get('/v1/meta', getMetaData);

export default router;

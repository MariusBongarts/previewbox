import express, { Request, Response } from 'express';

const router = express.Router();

const sendHealthStatus = async (req: Request, res: Response) => {
  res.sendStatus(200);
};

router.get('/health', sendHealthStatus);

export default router;

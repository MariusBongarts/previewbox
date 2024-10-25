import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import metaController from './controller/meta';
import healthController from './controller/health';
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 4444;

app.use(cors(), metaController);
app.use(healthController);

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}. Health check available at: http://localhost:${port}/health`,
  );
});

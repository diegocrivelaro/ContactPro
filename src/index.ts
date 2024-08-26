import express, { type Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { router } from "./routes";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(helmet());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} 🚀`);
});

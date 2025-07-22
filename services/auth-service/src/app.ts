// services/auth-service/src/app.ts

import express, { Express } from "express";
// import { authRouter } from "./routes/auth.routes";

const app: Express = express();
app.use(express.json());

export default app;

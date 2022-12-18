import express from "express";
import { initAppRoutes } from "./routes";

const app = express();
app.use(express.json());

initAppRoutes(app);

export default app;

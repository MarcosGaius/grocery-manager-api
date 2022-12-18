import { Express } from "express";
import userRoutes from "./user";

export const initAppRoutes = (app: Express) => {
  app.use("/users", userRoutes);
};

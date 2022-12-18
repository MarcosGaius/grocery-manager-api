import { Request, Response } from "express";
import { registerUserService } from "../services/user";

export const respondUserRegister = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await registerUserService(data);

  return res.status(200).json(user);
};

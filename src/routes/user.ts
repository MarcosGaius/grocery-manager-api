import { Router } from "express";
import { respondUserRegister } from "../controllers/user";
import { handleSerializationMiddleware } from "../middlewares/handleSerialization";
import { userRegistrationSerializer } from "../serializers/user";

const userRoutes = Router();

userRoutes.post(
  "",
  handleSerializationMiddleware(userRegistrationSerializer),
  respondUserRegister
);

export default userRoutes;

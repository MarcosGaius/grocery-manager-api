import { ResponseUserInterface, UserInterface } from "../interfaces/user";
import { User } from "../models/user";
import { userResponseSerializer } from "../serializers/user";

export const registerUserService = async (
  data: UserInterface
): Promise<ResponseUserInterface> => {
  const newUser = new User(data);
  const createdUser = await newUser.save();

  return userResponseSerializer.validate(createdUser, { stripUnknown: true });
};

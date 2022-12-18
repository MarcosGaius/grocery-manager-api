import * as bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const getHashSync = (input: string) => {
  return bcrypt.hashSync(input, SALT_ROUNDS);
};

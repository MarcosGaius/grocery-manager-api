import * as bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const getHashSync = (input: string) => {
  bcrypt.hash(input, SALT_ROUNDS);
};

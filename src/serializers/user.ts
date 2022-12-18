import * as yup from "yup";
import { getHashSync } from "../helpers/utils/getHash";

export const userRegistrationSerializer = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .required()
    .transform((pwd) => getHashSync(pwd)),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  profile_picture: yup.string(),
  is_active: yup
    .boolean()
    .required()
    .default(() => true)
    .transform(() => true),
});

export const userResponseSerializer = yup.object().shape({
  _id: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  profile_picture: yup.string(),
});

import * as yup from "yup";

export const userRegistrationSerializer = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .required()
    .transform((pwd) => {}),
});

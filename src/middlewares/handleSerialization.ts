import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { MixedSchema } from "yup/lib/mixed";

export const handleSerializationMiddleware =
  (serializer: MixedSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    serializer
      .validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      })
      .then((validatedData) => {
        req.body = validatedData;
        next();
      })
      .catch((error: ValidationError) => {
        const errorArray = error.inner.map((err) => {
          const name = err.path?.toString() || err.name;
          return { [name]: err.message };
        });

        return res.status(400).json(errorArray);
      });
  };

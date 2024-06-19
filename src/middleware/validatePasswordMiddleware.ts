import { Request, Response, NextFunction } from "express"
import { validatePassword } from "../validators/validatePasswordValidator";

interface IRequestBody {
  password: string;
}

/**
 * Middleware to validate the password from the request body.
 * 
 * @param req - The request object from Express.
 * @param res - The response object from Express.
 * @param next - The next middleware function in the stack.
 * 
 * This function extracts the password from the request body and validates it using the `validatePassword` function.
 * If the password is invalid, it sends a 400 response with the validation errors.
 * Otherwise, it calls the next middleware in the stack.
 */
export async function ValidatePasswordMiddleware(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body as IRequestBody;

  const isPasswordValid = validatePassword(password);

  if (isPasswordValid.length > 0) {
    return res.status(400).json({ errors: isPasswordValid })
  }
  
  next();
}
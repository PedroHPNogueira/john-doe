import { NextFunction, Request, Response } from "express"

export const handleJsonError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof SyntaxError) {
      return res.status(400).json({message: "wrong JSON format"})
  }

  return next()
}

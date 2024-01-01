import { UnexpectedInternalServiceError } from "@errors/UnexpectedInternalServiceError";
import { FoodExplorerError } from "@errors/index";
import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof FoodExplorerError) {
    return res.status(error.statusCode).json(error.toJSON());
  }

  return res.status(500).json(new UnexpectedInternalServiceError().toJSON());
};

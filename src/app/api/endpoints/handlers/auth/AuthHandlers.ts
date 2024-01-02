import { NextFunction, Request, Response } from "express";
import { AuthUseCase } from "@interfaces/usecases/AuthUseCase";
import { Account, Credentials } from "@models/auth";

class AuthHandlers {
  constructor(protected readonly usecase: AuthUseCase) {
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const authResponse = await this.usecase.signin({
        email,
        password,
      } as Credentials);
      return res.status(200).json(authResponse.toJSON());
    } catch (error) {
      next(error);
    }
  }

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      await this.usecase.signup({
        name,
        email,
        password,
      } as Account);

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async updateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const token = await this.usecase.updateToken(refreshToken);
      return res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { accountID } = req.body;
      await this.usecase.logout(accountID);
      return res.status(200).json();
    } catch (error) {
      next(error);
    }
  }
}

export { AuthHandlers };

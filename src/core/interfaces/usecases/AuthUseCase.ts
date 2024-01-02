import { Account, AuthResponse, Credentials } from "@models/auth";

abstract class AuthUseCase {
  abstract signin(credentials: Credentials): Promise<AuthResponse>;
  abstract signup(account: Account): Promise<void>;
  abstract updateToken(refreshToken: string): Promise<AuthResponse>;
  abstract logout(accountID: string): Promise<void>;
}

export { AuthUseCase };

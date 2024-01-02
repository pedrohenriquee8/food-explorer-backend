import { Account, AuthResponse, RefreshToken } from "@models/auth";

abstract class AuthAdapter {
  abstract signup(account: Account): Promise<boolean>;
  abstract createRefreshToken(accountID: string, expiresIn: number): Promise<RefreshToken>;
  abstract findAccountByEmail(email: string): Promise<Account>;
  abstract verifyRefreshToken(refreshToken: string): Promise<RefreshToken>;
  abstract logout(accountID: string): Promise<void>;
}

export { AuthAdapter };

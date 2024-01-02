import { AuthAdapter } from "@interfaces/adapter/AuthAdapter";
import { AuthUseCase } from "@interfaces/usecases/AuthUseCase";
import { Account, AuthResponse, Credentials, RefreshToken } from "@models/auth";
import { expiresIn } from "@utils/refreshTokenExpiresIn";
import { compare, hash } from "bcryptjs";
import { generateTokenProvider } from "@providers/GenerateTokenProvider";
import {
  ExpirationTimeRefreshTokenServiceError,
  InvalidCredentialsServiceError,
  InvalidRefreshTokenServiceError,
  AccountAlreadyExistsServiceError,
  AccountNotFoundServiceError,
} from "@errors/index";
import { refreshTokenExpirationTime } from "@utils/refreshTokenExpirationTime";

class AuthService implements AuthUseCase {
  constructor(protected readonly adapter: AuthAdapter) {}

  async signin(credentials: Credentials): Promise<AuthResponse> {
    const { email, password } = credentials;

    const account = await this.findAccountByEmail(email);
    const passwordMatch = await compare(password, account.password);

    if (!passwordMatch) {
      throw new InvalidCredentialsServiceError();
    }

    const token = generateTokenProvider(account.id);
    this.logout(account.id);
    const refreshToken = await this.createRefreshToken(account.id, expiresIn);

    return AuthResponse.fromJSON({ token, refreshToken });
  }

  async signup(account: Account): Promise<void> {
    const passwordHash = await hash(account.password, 8);
    const accountWithHashedPassword = {
      ...account,
      password: passwordHash,
    } as Account;
    const accountSignUp = await this.adapter.signup(accountWithHashedPassword);

    if (!accountSignUp) {
      throw new AccountAlreadyExistsServiceError();
    }
  }

  async updateToken(refreshToken: string): Promise<AuthResponse> {
    const refreshTokenAlreadyExists = await this.adapter.verifyRefreshToken(refreshToken);

    if (!refreshTokenAlreadyExists) {
      throw new InvalidRefreshTokenServiceError();
    }

    if (refreshTokenExpirationTime(refreshTokenAlreadyExists.expiresIn)) {
      throw new ExpirationTimeRefreshTokenServiceError();
    }

    const token = generateTokenProvider(refreshTokenAlreadyExists.accountId);
    return AuthResponse.fromJSON({ token, refreshToken: refreshTokenAlreadyExists });
  }

  async logout(accountID: string): Promise<void> {
    await this.adapter.logout(accountID);
  }

  async createRefreshToken(accountID: string, expiresIn: number): Promise<RefreshToken> {
    return this.adapter.createRefreshToken(accountID, expiresIn);
  }

  async findAccountByEmail(email: string): Promise<Account> {
    const account = await this.adapter.findAccountByEmail(email);

    if (!account) {
      throw new AccountNotFoundServiceError();
    }

    return account;
  }
}

export { AuthService };

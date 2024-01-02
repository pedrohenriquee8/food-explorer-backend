import { AuthAdapter } from "@interfaces/adapter/AuthAdapter";
import { Account, RefreshToken } from "@models/auth";
import { PrismaClient } from "@prisma/client";

class AuthPrisma implements AuthAdapter {
  constructor(protected readonly prisma: PrismaClient) {}
  
  async signup(account: Account): Promise<boolean> {    
    try {
      const { name, email, password } = account;

      await this.prisma.account.create({
        data: {
          name,
          email,
          password,
        },
      });
      
      return true;
    } catch (error) {
      return false;
    }
  }

  async createRefreshToken(accountID: string, expiresIn: number): Promise<RefreshToken> {
    try {
      const refreshToken = await this.prisma.refreshToken.create({
        data: {
          accountId: accountID,
          expiresIn,
        },
      });

      return RefreshToken.fromJSON(refreshToken);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAccountByEmail(email: string): Promise<Account> {
    try {
      const account = await this.prisma.account.findUnique({
        where: {
          email,
        },
      });

      if (account) return Account.fromJSON(account);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  async verifyRefreshToken(refreshToken: string): Promise<RefreshToken> {
      try {
        const refreshTokenAlreadyExists = await this.prisma.refreshToken.findFirst({
          where: {
            id: refreshToken,
          },
        });

        if (refreshTokenAlreadyExists) return RefreshToken.fromJSON(refreshTokenAlreadyExists);
      } catch (error) {
        throw new Error(error.message);
      }
  }

  async logout(accountID: string): Promise<void> {
    try {
      await this.prisma.refreshToken.deleteMany({
        where: {
          accountId: accountID,
        },
      });      
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export { AuthPrisma };

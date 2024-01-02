import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from "../error";

const { ExpirationTimeRefreshTokenMessage } = CommomMessages;

class ExpirationTimeRefreshTokenServiceError extends FoodExplorerError {
  constructor(message: string = ExpirationTimeRefreshTokenMessage) {
    super("Expiration time refresh token error", 401, message);
  }
}

export { ExpirationTimeRefreshTokenServiceError };

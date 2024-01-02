import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from "../error";

const { InvalidRefreshTokenErrorMessage } = CommomMessages;

class InvalidRefreshTokenServiceError extends FoodExplorerError {
  constructor(message: string = InvalidRefreshTokenErrorMessage) {
    super("Invalid refresh token service error", 401, message);
  }
}

export { InvalidRefreshTokenServiceError };

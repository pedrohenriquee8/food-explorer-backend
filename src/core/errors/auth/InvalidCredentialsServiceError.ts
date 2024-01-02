import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from "../error";

const { InvalidCredentialsErrorMessage } = CommomMessages;

class InvalidCredentialsServiceError extends FoodExplorerError {
  constructor(message: string = InvalidCredentialsErrorMessage) {
    super("Invalid credentials service error", 401, message);
  }
}

export { InvalidCredentialsServiceError };

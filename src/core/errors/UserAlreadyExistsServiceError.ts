import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from ".";

const { UserAlreadyExistsErrorMessage } = CommomMessages;

class UserAlreadyExistsServiceError extends FoodExplorerError {
  constructor(message: string = UserAlreadyExistsErrorMessage) {
    super("User already exists service error", 409, message);
  }
}

export { UserAlreadyExistsServiceError };

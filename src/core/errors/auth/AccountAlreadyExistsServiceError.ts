import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from "../error";

const { AccountAlreadyExistsErrorMessage } = CommomMessages;

class AccountAlreadyExistsServiceError extends FoodExplorerError {
  constructor(message: string = AccountAlreadyExistsErrorMessage) {
    super("Account already exists service error", 409, message);
  }
}

export { AccountAlreadyExistsServiceError };

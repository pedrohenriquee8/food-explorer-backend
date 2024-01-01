import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from ".";

const { UnexpectedInternalErrorMessage } = CommomMessages;

class UnexpectedInternalServiceError extends FoodExplorerError {
  constructor(message: string = UnexpectedInternalErrorMessage) {
    super("Unexpected internal service error", 500, message);
  }
}

export { UnexpectedInternalServiceError };

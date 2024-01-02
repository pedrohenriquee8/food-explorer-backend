import { CommomMessages } from "@messages/CommomMessages";
import { FoodExplorerError } from "../error";

const { AccountNotFoundErrorMessage } = CommomMessages;

class AccountNotFoundServiceError extends FoodExplorerError {
    constructor(message: string = AccountNotFoundErrorMessage) {
        super("Account not found service error", 404, message);
    }
}

export { AccountNotFoundServiceError };
import { AuthHandlers } from "@api/endpoints/handlers/auth/AuthHandlers";
import { getAuthService } from "./services";

export function getAuthHandlers() {
  return new AuthHandlers(getAuthService());
}

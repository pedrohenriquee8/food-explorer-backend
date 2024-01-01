import { AuthService } from "@services/auth/AuthService";
import { getAuthRepositories } from "./repositories";

export function getAuthService() {
  return new AuthService(getAuthRepositories());
}

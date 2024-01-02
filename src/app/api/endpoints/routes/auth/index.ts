import { Router } from "express";
import { getAuthHandlers } from "@api/dicontainer/handlers";

const authRoutes = Router();
const authHandlers = getAuthHandlers();

authRoutes.post("/signin", authHandlers.signin);
authRoutes.post("/signup", authHandlers.signup);
authRoutes.post("/updateToken", authHandlers.updateToken);
authRoutes.post("/logout", authHandlers.logout);

export { authRoutes };

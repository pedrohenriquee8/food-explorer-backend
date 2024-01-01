import express from "express";
import cors from "cors";
import { apiRoutes } from "./endpoints/routes";
import { defaultErrorHandler } from "./endpoints/handlers/errors/handler";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);
app.use(defaultErrorHandler);

app.listen(port);

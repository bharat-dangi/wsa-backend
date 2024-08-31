import express from "express";
import { statusRouter } from "./status.routes";
import { playerRouterV1 } from "./player.v1.routes";

const AppRouter = express.Router();

AppRouter.use("/", statusRouter);
AppRouter.use("/v1/player", playerRouterV1);
export { AppRouter };

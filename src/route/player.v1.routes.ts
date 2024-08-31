import express from "express";
import { PlayerController } from "../controller/player.controller";

const playerRouterV1 = express.Router();

playerRouterV1.route("/get-all-players-based-on-condition").get(PlayerController.getAllPlayersBasedOnCondition);

export { playerRouterV1 };

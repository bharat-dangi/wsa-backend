import express from "express";
import { TeamController } from "../controller/team.controller";

const teamRouterV1 = express.Router();

teamRouterV1.route("/get-all-teams").get(TeamController.getAllTeams);

export { teamRouterV1 };

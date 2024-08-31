import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.types";
import { buildResponse } from "../utils/response.utils";
import { container } from "../config/dependency";
import { TeamService } from "../service/team.service";

export class TeamController {
  static async getAllTeams(req: Request, res: Response, next: NextFunction) {
    try {
      const teamService: TeamService = container.resolve("TeamService") as TeamService;

      const { data, error } = await teamService.getAllTeams();

      if (error) {
        return next(new ErrorResponse(error, 500));
      }

      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      return next(new ErrorResponse(error, 500));
    }
  }
}

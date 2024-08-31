import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.types";
import { buildResponse } from "../utils/response.utils";
import { PlayerService } from "../service/player.service";
import { container } from "../config/dependency";

export class PlayerController {
  static async getAllPlayersBasedOnCondition(req: Request, res: Response, next: NextFunction) {
    try {
      const playerService: PlayerService = container.resolve("PlayerService") as PlayerService;

      const { data, error } = await playerService.getAllPlayersBasedOnCondition();

      if (error) {
        return next(new ErrorResponse(error, 500));
      }

      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      return next(new ErrorResponse(error, 500));
    }
  }
}

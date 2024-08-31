import { Sequelize } from "sequelize";
import { PlayerModel, PlayerSchema } from "../schema/player.schema";

export const PlayerTable = (sequelize: Sequelize) => {
  PlayerModel.init(PlayerSchema, {
    sequelize,
    modelName: "players",
    timestamps: true,
  });
};

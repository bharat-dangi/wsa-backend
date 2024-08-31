import { Sequelize } from "sequelize";
import { PlayerBorrowingModel, PlayerBorrowingSchema } from "../schema/playerBorrowing.schema";

export const PlayerBorrowingTable = (sequelize: Sequelize) => {
  PlayerBorrowingModel.init(PlayerBorrowingSchema, {
    sequelize,
    modelName: "PlayerBorrowing",
    tableName: "player_borrowings",
    timestamps: true,
  });
};

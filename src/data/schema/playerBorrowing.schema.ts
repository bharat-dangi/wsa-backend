import { Model, DataTypes } from "sequelize";
import { PlayerBorrowing } from "../../types/playerBorrowing.types";

export class PlayerBorrowingModel extends Model<PlayerBorrowing> implements PlayerBorrowing {
  borrowing_id!: number;
  team_id!: number;
  player_id!: number;
  borrow_date!: Date;
}

export const PlayerBorrowingSchema = {
  borrowing_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "teams",
      key: "team_id",
    },
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "players",
      key: "player_id",
    },
  },
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

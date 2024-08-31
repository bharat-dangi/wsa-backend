import { DataTypes, Model } from "sequelize";
import { Player } from "../../types/player.types";

export class PlayerModel extends Model<Player> implements Player {
  player_id!: number;
  name!: string;
  age!: number;
  position?: string;
  age_group?: string;
}

export const PlayerSchema = {
  player_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING(32),
    allowNull: true,
  },
  age_group: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
};

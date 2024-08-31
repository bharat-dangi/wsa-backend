import { DataTypes, Model } from "sequelize";
import { PlayerTeamAssociation } from "../../types/playerTeamAssociation.types";

export class PlayerTeamAssociationModel extends Model<PlayerTeamAssociation> implements PlayerTeamAssociation {
  association_id!: number;
  player_id!: number;
  team_id!: number;
  start_date!: Date;
  end_date?: Date;
}

export const PlayerTeamAssociationSchema = {
  association_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "players",
      key: "player_id",
    },
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "teams",
      key: "team_id",
    },
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

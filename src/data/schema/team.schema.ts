import { DataTypes, Model } from "sequelize";
import { Team } from "../../types/team.types";

export class TeamModel extends Model<Team> implements Team {
  team_id!: number;
  division_id!: number;
  name!: string;
}

export const TeamSchema = {
  team_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  division_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "divisions",
      key: "division_id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

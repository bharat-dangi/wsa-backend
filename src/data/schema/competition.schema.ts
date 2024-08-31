import { DataTypes, Model } from "sequelize";
import { Competition } from "../../types/competition.types";

export class CompetitionModel extends Model<Competition> implements Competition {
  competition_id!: number;
  name!: string;
  description?: string;
}

export const CompetitionSchema = {
  competition_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
};

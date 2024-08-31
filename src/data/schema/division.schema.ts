import { DataTypes, Model } from "sequelize";
import { Division } from "../../types/division.types";

export class DivisionModel extends Model<Division> implements Division {
  division_id!: number;
  competition_id!: number;
  name!: string;
}

export const DivisionSchema = {
  division_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  competition_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "competitions",
      key: "competition_id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

import { Sequelize } from "sequelize";
import { TeamModel, TeamSchema } from "../schema/team.schema";

export const TeamTable = (sequelize: Sequelize) => {
  TeamModel.init(TeamSchema, {
    sequelize,
    modelName: "teams",
    timestamps: true,
  });
};

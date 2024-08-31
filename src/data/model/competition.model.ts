import { Sequelize } from "sequelize";
import { CompetitionModel, CompetitionSchema } from "../schema/competition.schema";

export const CompetitionTable = (sequelize: Sequelize) => {
  CompetitionModel.init(CompetitionSchema, {
    sequelize,
    modelName: "competitions",
    timestamps: true,
  });
};

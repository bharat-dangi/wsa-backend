import { Sequelize } from "sequelize";
import { DivisionModel, DivisionSchema } from "../schema/division.schema";

export const DivisionTable = (sequelize: Sequelize) => {
  DivisionModel.init(DivisionSchema, {
    sequelize,
    modelName: "divisions",
    timestamps: true,
  });
};

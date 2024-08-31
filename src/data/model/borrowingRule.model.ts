import { Sequelize } from "sequelize";
import { BorrowingRuleModel, BorrowingRuleSchema } from "../schema/borrowingRule.schema";

export const BorrowingRuleTable = (sequelize: Sequelize) => {
  BorrowingRuleModel.init(BorrowingRuleSchema, {
    sequelize,
    modelName: "BorrowingRule",
    tableName: "borrowing_rules",
    timestamps: true,
  });
};

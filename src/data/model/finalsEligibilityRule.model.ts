import { Sequelize } from "sequelize";
import { FinalsEligibilityRuleModel, FinalsEligibilityRuleSchema } from "../schema/finalsEligibilityRule.schema";

export const FinalsEligibilityRuleTable = (sequelize: Sequelize) => {
  FinalsEligibilityRuleModel.init(FinalsEligibilityRuleSchema, {
    sequelize,
    modelName: "FinalsEligibilityRule",
    tableName: "finals_eligibility_rules",
    timestamps: true,
  });
};

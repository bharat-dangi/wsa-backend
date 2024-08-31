import { Model, DataTypes } from "sequelize";
import { FinalsEligibilityRule } from "../../types/finalsEligibilityRule.types";

export class FinalsEligibilityRuleModel extends Model<FinalsEligibilityRule> implements FinalsEligibilityRule {
  eligibility_rule_id!: number;
  division_ids!: number[];
  min_matches_played!: number;
  include_borrowed_players!: boolean;
  include_started_matches_only?: boolean;
  eligible_rounds?: string[];
}

export const FinalsEligibilityRuleSchema = {
  eligibility_rule_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  division_ids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  min_matches_played: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  include_borrowed_players: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  include_started_matches_only: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  eligible_rounds: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
};

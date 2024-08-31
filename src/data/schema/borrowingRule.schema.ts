import { Model, DataTypes } from "sequelize";
import { BorrowingRule } from "../../types/borrowingRule.types";

export class BorrowingRuleModel extends Model<BorrowingRule> implements BorrowingRule {
  rule_id!: number;
  division_ids!: number[];
  is_borrowing_allowed!: boolean;
  borrow_from_divisions?: number[];
  applicable_to_age_groups?: string[];
}

export const BorrowingRuleSchema = {
  rule_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  division_ids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  is_borrowing_allowed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  borrow_from_divisions: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  applicable_to_age_groups: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
};

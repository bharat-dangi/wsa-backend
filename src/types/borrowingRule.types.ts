export interface BorrowingRule {
  rule_id?: number;
  division_ids: number[];
  is_borrowing_allowed: boolean;
  borrow_from_divisions?: number[];
  applicable_to_age_groups?: string[];
}

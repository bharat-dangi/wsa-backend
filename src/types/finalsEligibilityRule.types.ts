export interface FinalsEligibilityRule {
  eligibility_rule_id?: number;
  division_ids: number[];
  min_matches_played: number;
  include_borrowed_players: boolean;
  include_started_matches_only?: boolean;
  eligible_rounds?: string[];
}

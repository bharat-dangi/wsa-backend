export interface PlayerTeamAssociation {
  association_id?: number;
  player_id: number;
  team_id: number;
  start_date: Date;
  end_date?: Date;
}

import { Sequelize } from "sequelize";
import { databaseConnection } from "../config/db";
import { Player } from "../types/player.types";
import { PromiseResponse } from "../types/promiseResponse.types";

export class PlayerService {
  getAllPlayersBasedOnTeamRule = async (fetchPayload: {
    team_id: string;
  }): Promise<PromiseResponse<Player[], Error>> => {
    try {
      const query = `
      SELECT p.player_id, p.name, p.age, p.position, p.age_group
      FROM players p
      JOIN player_team_associations pta ON p.player_id = pta.player_id
      JOIN teams t ON pta.team_id = t.team_id
      JOIN divisions d ON t.division_id = d.division_id
      JOIN borrowing_rules br ON (br.division_ids @> ARRAY[d.division_id] OR br.division_ids IS NULL)
      WHERE br.is_borrowing_allowed = true
        AND pta.team_id != :teamId 
        AND (br.borrow_from_divisions IS NULL OR ARRAY[t.division_id] && br.borrow_from_divisions::INTEGER[])
        AND t.team_id != :teamId  
        AND (
          br.division_ids IS NULL 
          OR d.division_id IN (
            SELECT UNNEST(br.borrow_from_divisions)
            FROM borrowing_rules br
            WHERE br.division_ids @> ARRAY[d.division_id]
          )
        );
    `;

      const [eligiblePlayers, metadata] = await databaseConnection.query(query, {
        replacements: { teamId: fetchPayload?.team_id },
      });
      return { data: eligiblePlayers as any };
    } catch (error) {
      console.error(error);
      return { error: error as Error };
    }
  };
}

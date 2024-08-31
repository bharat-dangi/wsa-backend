import { PromiseResponse } from "../types/promiseResponse.types";
import { Team } from "../types/team.types";
import { databaseConnection } from "../config/db";

export class TeamService {
  getAllTeams = async (): Promise<PromiseResponse<Team[], Error>> => {
    try {
      const [allTeamData, metadata] = await databaseConnection.query(`
        SELECT t.team_id, t.name, t.division_id, d.name AS division_name
        FROM teams t
        JOIN divisions d ON t.division_id = d.division_id
      `);
      return { data: allTeamData as any };
    } catch (error) {
      console.error(error);
      return { error: error as Error };
    }
  };
}

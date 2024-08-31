import { Player } from "../types/player.types";
import { PromiseResponse } from "../types/promiseResponse.types";

export class PlayerService {
  getAllPlayersBasedOnCondition = async (): Promise<PromiseResponse<Player[], Error>> => {
    try {
      return { data: [] };
    } catch (error) {
      console.error(error);
      return { error: error as Error };
    }
  };
}

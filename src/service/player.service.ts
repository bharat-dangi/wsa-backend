import { PlayerRepository } from "../data/repository/player.repository";
import { Player } from "../types/player.types";
import { PromiseResponse } from "../types/promiseResponse.types";

export class PlayerService {
  playerRepository: PlayerRepository;

  constructor(opts: any) {
    this.playerRepository = opts.PlayerRepo as PlayerRepository;
  }

  getAllPlayersBasedOnCondition = async (): Promise<PromiseResponse<Player[], Error>> => {
    try {
      return { data: [] };
    } catch (error) {
      console.error(error);
      return { error: error as Error };
    }
  };
}

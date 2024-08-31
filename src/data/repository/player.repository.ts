import { Player } from "../../types/player.types";
import { PlayerDSBase } from "../source/player/player.data.source.base";
import { BaseRepository } from "./base/base.repository";

export class PlayerRepository extends BaseRepository<Player> {
  constructor(opts: any) {
    super(opts.PlayerDS as PlayerDSBase);
  }
}

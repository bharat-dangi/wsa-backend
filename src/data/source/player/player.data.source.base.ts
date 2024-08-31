import { Player } from "../../../types/player.types";
import { DatabaseDSBase } from "../database/database.data.source.base";

export abstract class PlayerDSBase extends DatabaseDSBase<Player> {}

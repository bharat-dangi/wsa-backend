import { Player } from "../../../types/player.types";
import { PlayerDSBase } from "./player.data.source.base";

export class PlayerDS implements PlayerDSBase {
  insertOne(data: any): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  insertMany(data: any): Promise<Player[]> {
    throw new Error("Method not implemented.");
  }
  find(criteria: any): Promise<Player[]> {
    throw new Error("Method not implemented.");
  }
  findOne(criteria: any): Promise<Player | null> {
    throw new Error("Method not implemented.");
  }
  deleteOne(criteria: any): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  updateOne(updateData: any, criteria: any): Promise<Player | null> {
    throw new Error("Method not implemented.");
  }
  updateMany(criteria: any, options: any, updateData: any): Promise<Player[]> {
    throw new Error("Method not implemented.");
  }
  count(criteria: any): Promise<number> {
    throw new Error("Method not implemented.");
  }
}

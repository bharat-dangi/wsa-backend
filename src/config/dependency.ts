import { PlayerRepository } from "../data/repository/player.repository";
import { PlayerDS } from "../data/source/player/player.data.source";
import { PlayerService } from "../service/player.service";

const awilix = require("awilix");

// Create dependency injection container
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Register dependencies
export const registerDependencies = () => {
  container.register({
    // Player
    PlayerDS: awilix.asClass(PlayerDS),
    PlayerRepo: awilix.asClass(PlayerRepository),
    PlayerService: awilix.asClass(PlayerService),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};

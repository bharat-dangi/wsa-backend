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
    PlayerService: awilix.asClass(PlayerService),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};

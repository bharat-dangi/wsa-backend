import { PlayerService } from "../service/player.service";
import { TeamService } from "../service/team.service";

const awilix = require("awilix");

// Create dependency injection container
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Register dependencies
export const registerDependencies = () => {
  container.register({
    PlayerService: awilix.asClass(PlayerService),
    TeamService: awilix.asClass(TeamService),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};

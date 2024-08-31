import { Sequelize } from "sequelize";
import { PlayerTeamAssociationModel, PlayerTeamAssociationSchema } from "../schema/playerTeamAssociation.schema";

export const PlayerTeamAssociationTable = (sequelize: Sequelize) => {
  PlayerTeamAssociationModel.init(PlayerTeamAssociationSchema, {
    sequelize,
    modelName: "player_team_associations",
    timestamps: true,
  });
};
